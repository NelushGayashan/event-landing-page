// backend/server.js

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  password: 'root', 
  database: 'event_registration' 
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database!');
    connection.release();
  } catch (err) {
    console.error('Database connection failed:', err.stack);
  }
})();

app.post('/register', async (req, res) => {
  const { firstName, lastName, company, workEmail, industry, phoneNumber, country } = req.body;

  if (!firstName || !lastName || !workEmail || !country) {
    return res.status(400).json({ error: 'Required fields are missing.' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO registrations (firstName, lastName, company, workEmail, industry, phoneNumber, country) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, company, workEmail, industry, phoneNumber, country]
    );

    res.status(201).json({ message: 'Registration successful!', registrationId: result.insertId });
  } catch (error) {
    console.error('Error inserting data:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(409).json({ error: 'This email is already registered.' });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
