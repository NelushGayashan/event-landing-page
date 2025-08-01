# 🎉 Event Landing Page

This is a modern, responsive **event landing page** built with **React, Vite, and Tailwind CSS**. It features a detailed event overview, speaker profiles with interactive pop-ups, a dynamic agenda, and a robust registration form. The form is powered by **Formik** and **Yup** for state management and validation, and uses **react-hot-toast** for user feedback. The project includes a simple **Node.js server** to handle form submissions.

---

## ✨ Features

* **Responsive Design**: Optimized for a seamless experience on all devices, from desktops to mobile phones.
* **Interactive Hero Section**: Engaging video background with key event details.
* **Event Overview**: A dedicated section detailing the purpose and benefits of the event.
* **Key Benefits Section**: Visually appealing cards with SVG icons to highlight the benefits of attending.
* **Dynamic Speaker Section**: Displays speaker profiles in an interactive grid. Clicking on a speaker opens a modal with their detailed biography.
* **Event Agenda**: A clear and easy-to-read image of the event's schedule.
* **Registration Form**:

  * Built with **Formik** for efficient form state management.
  * Client-side validation using **Yup**.
  * User-friendly dropdown for country selection with a search filter.
  * Real-time feedback on form submission using **react-hot-toast**.
* **Simple Backend**: A lightweight Node.js/Express server to handle form submissions and demonstrate a full-stack workflow.

---

## 💡 Tech Stack

### Frontend

* **React**: A JavaScript library for building user interfaces.
* **Vite**: A fast build tool that provides a lightning-fast development experience.
* **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
* **Formik**: A popular library for building forms in React.
* **Yup**: A JavaScript schema builder for value parsing and validation.
* **react-hot-toast**: A lightweight and customizable library for adding toast notifications.

### Backend

* **Node.js**: A JavaScript runtime for the server-side.
* **Express.js**: A minimal and flexible Node.js web application framework for building the API.
* **CORS**: Middleware to enable cross-origin requests.

---

## 📁 Folder Structure

```
event-landing-page/
├── frontend
│    └── public/                     # Public assets
│    │   ├── assets/                 # Images and icons
│    │   │   ├── icons/
│    │   │   └── ...
│    │   └── index.html              # Main HTML file
│    ├── src/                        # Source code
│    │   ├── assets/                 # Images and icons used in the app
│    │   │   ├── Agenda.png
│    │   │   └── ...
│    │   ├── components/
│    │   │   └── MainButton.jsx      # Reusable button component
│    │   ├── countriesData.js        # Data for the country dropdown
│    │   ├── speakersData.js         # Data for the speaker section
│    │   ├── App.jsx                 # Main application component
│    │   ├── index.css               # Global styles and Tailwind imports
│    │   └── main.jsx                # Entry point for the React app
│    ├── server.js                   # Node.js backend server
│    ├── package.json                # Project dependencies and scripts
│    └── vite.config.js              # Vite configuration file
└── backend
    └── server.js
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### Installation

#### Clone the repository:

```bash
git clone https://github.com/your-username/event-landing-page.git
cd event-landing-page
```

#### Install frontend dependencies:

```bash
cd frontend
npm install
# or
yarn install
```

Install additional frontend libraries:

```bash
npm install formik yup react-hot-toast
```

#### Start the frontend development server:

```bash
npm run dev
# or
yarn dev
```

App should now be running at: [http://localhost:5173](http://localhost:5173)

---

### ⚙️ Backend Setup

#### Install backend dependencies:

```bash
cd ../backend
npm install express cors
# or
yarn add express cors
```

#### Start the backend server:

```bash
node server.js
```

Backend will be available at: [http://localhost:3001](http://localhost:3001)

---

## 💻 Usage

1. Open your browser and go to [http://localhost:5173](http://localhost:5173)
2. Explore the landing page sections.
3. Scroll down to the "Register Now" section.
4. Fill out and submit the form.
5. See toast notification for success/failure.
6. Check the backend terminal for submitted data.

---

## 📨 Contact

For feedback, issues, or suggestions:

**GitHub:** [https://github.com/NelushGayashan](https://github.com/NelushGayashan)

---

## 📄 License

This project is licensed under the MIT License.
