import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import MainButton from './components/MainButton';
import './index.css';
import speakers from './speakersData';
import countries from './countriesData';

// Import images and icons
import napierLogo from './assets/favicon2.png';
import rightImage from './assets/right2.webp';
import agendaImage from './assets/Agenda.png';
import videoBg from './assets/bg.mp4';

// Import the new SVG icons as React components
import FileIcon from './assets/icons/svg2.svg?react';
import TrendsIcon from './assets/icons/svg4.svg?react';
import CloudsIcon from './assets/icons/svg5.svg?react';
import ClipboardIcon from './assets/icons/svg6.svg?react';
import GlobeIcon from './assets/icons/svg7.svg?react';
import ChartIcon from './assets/icons/svg8.svg?react';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  company: Yup.string().required('Company is required'),
  workEmail: Yup.string().email('Invalid email address').required('Work Email is required'),
  industry: Yup.string().required('Industry is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  country: Yup.string().required('Country is required'),
  privacyAccepted: Yup.boolean()
    .oneOf([true], 'You must accept the privacy policy to register.')
    .required('You must accept the privacy policy to register.'),
});

function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [countryInputValue, setCountryInputValue] = useState('');

  const openPopup = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closePopup = () => {
    setSelectedSpeaker(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countryInputValue.toLowerCase())
  );

  return (
    <div className="main-container">
      <Toaster />
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden hero-np">
        <video className="absolute top-0 left-0 w-[75%] h-full object-cover z-10 video-bg-np" autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20 video-overlay-np"></div>
        <div className="relative z-30 flex items-center h-full content-wrapper-np">
          <div className="bg-white p-8 w-[85%] h-full shadow-lg absolute right-0 flex items-center justify-end content-box-np">
            <div className="flex items-center w-1/2 h-full pl-[5%] relative content-flex-np">
              <div className="w-[600px] relative flex absolute top-[20%] left-[-5%] flex-col justify-center items-center px-4 content-hero-np">
                <h1 className="text-center font-black uppercase font-rubik text-black text-[25px] md:text-[30px] leading-[1.8rem] md:leading-[2.1rem]">
                  SAUDI ARABIA'S FINANCIAL CRIME<br />COMPLIANCE ROUNDTABLE
                </h1>
                <img src={napierLogo} alt="Napier AI Logo" className="w-[40%] mt-5" />
                <div className="flex flex-col justify-center items-center gap-5 mt-5 hero-info-np">
                  <div className="flex items-center gap-2 hero-info-item-np">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hero-info-icon-np">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-lg uppercase font-semibold mt-[3px]">
                      19<sup>th</sup> february, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2 hero-info-item-np">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hero-info-icon-np">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                      <circle cx="12" cy="9" r="3"></circle>
                    </svg>
                    <span className="text-lg uppercase font-semibold mt-[3px]">Hyatt Regency Riyadh Olaya, Riyadh, KSA</span>
                  </div>
                </div>
                <MainButton href="#register" text="Register Now" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col hidden mobile-hero bg-black/30 backdrop-blur-md rounded-lg p-5 shadow-lg absolute bottom-0 z-50 lg:hidden">
          <img src={napierLogo} alt="Napier AI Logo" className="w-[20%] my-2" />
          <h1 className="text-center text-3xl leading-[2.1rem] my-5 font-rubik font-black text-white">
            Saudi Arabia's <br /> Financial Crime <br /> Compliance Roundtable
          </h1>
          <div className="flex flex-col justify-center items-center gap-5 mt-5 hero-info-np text-white">
            <div className="flex items-center gap-2 hero-info-item-np">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 fill-white hero-info-icon-np">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-lg uppercase font-semibold mt-[3px]">
                19<sup>th</sup> february, 2025
              </span>
            </div>
            <div className="flex items-center gap-2 hero-info-item-np">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 fill-white hero-info-icon-np">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                <circle cx="12" cy="9" r="3"></circle>
              </svg>
              <span className="text-lg uppercase font-semibold mt-[3px]">Hyatt Regency Riyadh Olaya, Riyadh, KSA</span>
            </div>
          </div>
          <MainButton text="Register Now" />
        </div>

        {/* RIGHT YELLOW SHAPE (The large one, starts from top right) */}
        <div className="custom-shape-divider-right">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 1200 0 1200 120z" className="shape-fill" fill="#ffe500" />
          </svg>
        </div>

        {/* LEFT YELLOW SHAPE (The smaller one, at bottom left) */}
        <div className="custom-shape-divider-left">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 1200 0 1200 120z" className="shape-fill" fill="#ffe500" />
          </svg>
        </div>
      </section>

      {/* Event Overview Section */}
      <section className="event-overview wrap-np flex justify-center items-center py-16 bg-white">
        <div className="container-np flex items-center gap-8 event-overview-container">
          <div className="w-1/2 relative overflow-hidden flex items-center justify-center event-image-wrapper">
            <img src={rightImage} alt="Event" className="w-[80%] h-[500px] block event-image" />
          </div>
          <div className="w-1/2 text-left px-[50px] event-content">
            <h2 className="text-[32px] title-np">Event Overview</h2>
            <p className="text-[15px] tracking-[1.05px] leading-7 my-[10px] para-np font-rubik font-semibold">
              As a global leader in financial innovation and compliance, the Kingdom of Saudi Arabia continues to set benchmarks in Anti-Money Laundering (AML) efficiency and effectiveness. Despite these advancements and spending $1.10 billion as the cost of compliance, the country still lost 5.74% of its gross domestic product (GDP) to money laundering in 2023. Vision 2030 and the Saudi Central Bank's efforts embrace an innovation-centric, risk-based approach to anti-money laundering. This exclusive roundtable brings together compliance leaders and industry experts to discuss how financial institutions can embrace next-generation AML technologies with a compliance-first approach. Delve into cutting-edge strategies, regulatory updates, and technology trends shaping the future of financial crime compliance in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-np wrap-np w-[80%] mx-auto">
        <div className="bg-white text-center my-8 rounded-md shadow-lg features-np">
          <div className="flex mb-2 feature-title-div bg-primary-color">
            <h2 className="text-xl font-bold uppercase text-[#333] bg-primary-color rounded-t-lg wrap-np">
              Key Benefits of Attending
            </h2>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-8 py-8 features-grid-np">
            {/* Feature Item */}
            <div className="w-[47%] text-left px-6 py-4 rounded-md shadow-md transition-all duration-500 hover:scale-[1.01] hover:rotate-x-10 hover:shadow-xl hover:border-b-2 hover:border-black feature-item-np">
              <div className="flex mb-2 feature-title-div">
                <FileIcon className="w-[8%] text-[#0078ff] feature-icon-np" />
                <h3 className="text-base font-bold text-[#333] mx-4 feature-title-np">
                  Regulatory Innovations
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#666] leading-[1.4rem] tracking-[1.03px] feature-description-np">
                Discuss the latest regulatory changes and technology advancements transforming compliance into a business advantage.
              </p>
            </div>
            {/* Repeat feature items */}
            <div className="w-[47%] text-left px-6 py-4 rounded-md shadow-md transition-all duration-500 hover:scale-[1.01] hover:rotate-x-10 hover:shadow-xl hover:border-b-2 hover:border-black feature-item-np">
              <div className="flex mb-2 feature-title-div">
                <TrendsIcon className="w-[8%] text-[#0078ff] feature-icon-np" />
                <h3 className="text-base font-bold text-[#333] mx-4 feature-title-np">
                  Trends from the Napier AI/AML Index
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#666] leading-[1.4rem] tracking-[1.03px] feature-description-np">
                Deep dive into the Napier AI/AML Index methodology, local trends influencing AI adoption, and opportunities for Saudi institutions.
              </p>
            </div>
            <div className="w-[47%] text-left px-6 py-4 rounded-md shadow-md transition-all duration-500 hover:scale-[1.01] hover:rotate-x-10 hover:shadow-xl hover:border-b-2 hover:border-black feature-item-np">
              <div className="flex mb-2 feature-title-div">
                <CloudsIcon className="w-[8%] text-[#0078ff] feature-icon-np" />
                <h3 className="text-base font-bold text-[#333] mx-4 feature-title-np">
                  Vision 2030 Readiness
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#666] leading-[1.4rem] tracking-[1.03px] feature-description-np">
                With just years to go, uncover how financial institutions can modernize AML systems to align with the nation's Vision 2030 goals.
              </p>
            </div>
            <div className="w-[47%] text-left px-6 py-4 rounded-md shadow-md transition-all duration-500 hover:scale-[1.01] hover:rotate-x-10 hover:shadow-xl hover:border-b-2 hover:border-black feature-item-np">
              <div className="flex mb-2 feature-title-div">
                <ClipboardIcon className="w-[8%] text-[#0078ff] feature-icon-np" />
                <h3 className="text-base font-bold text-[#333] mx-4 feature-title-np">
                  Real-world case studies
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#666] leading-[1.4rem] tracking-[1.03px] feature-description-np">
                Hear from industry experts on how global financial institutions use multi-configuration, sandbox environments and alternative scoring for dynamic risk assessments.
              </p>
            </div>
            <div className="w-[47%] text-left px-6 py-4 rounded-md shadow-md transition-all duration-500 hover:scale-[1.01] hover:rotate-x-10 hover:shadow-xl hover:border-b-2 hover:border-black feature-item-np">
              <div className="flex mb-2 feature-title-div">
                <GlobeIcon className="w-[8%] text-[#0078ff] feature-icon-np" />
                <h3 className="text-base font-bold text-[#333] mx-4 feature-title-np">
                  Future-Proofing Your AML Strategy
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#666] leading-[1.4rem] tracking-[1.03px] feature-description-np">
                Learn how to prepare your organization for the future of AML, perpetual client assessment. Use dynamic segmentation to minimize false positives and achieve the highest level of compliance efficiency.
              </p>
            </div>
            <div className="w-[47%] text-left px-6 py-4 rounded-md shadow-md transition-all duration-500 hover:scale-[1.01] hover:rotate-x-10 hover:shadow-xl hover:border-b-2 hover:border-black feature-item-np">
              <div className="flex mb-2 feature-title-div">
                <ChartIcon className="w-[8%] text-[#0078ff] feature-icon-np" />
                <h3 className="text-base font-bold text-[#333] mx-4 feature-title-np">
                  Reducing compliance costs
                </h3>
              </div>
              <p className="text-[0.95rem] text-[#666] leading-[1.4rem] tracking-[1.03px] feature-description-np">
                Discover how implementing AI into your AML systems can help save up to $0.3 billion in compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <h2 className="text-center mt-10 title-np title-sp">Our Speakers</h2>
      <section className="container-np wrap-np w-[80%] mx-auto">
        <div className="w-full flex items-center justify-center flex-wrap py-[50px] gap-10 card-section-sp">
          {speakers.map((speaker, index) => (
            <div key={index} className="w-[310px] h-[300px] flex flex-col items-center justify-center text-center gap-2 bg-white rounded-lg relative overflow-hidden shadow-lg cursor-pointer transition-all duration-500 card-sp" onClick={() => openPopup(speaker)}>
              <div className="image-sp w-[130px] h-[130px] rounded-full border-4 border-white mt-[30px] absolute top-[10px]">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full rounded-full" />
              </div>
              <div className="card-info-sp flex flex-col transition-all duration-500 pt-[140px]">
                <span className="font-semibold text-xl text-[#161a42] my-4 leading-3">{speaker.name}</span>
                <p className="text-black/50 my-[5px]">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaker Popup */}
      {selectedSpeaker && (
        <>
          <div className="overlay-sp fixed top-0 left-0 w-full h-full bg-black/50 z-[999] block" onClick={closePopup}></div>
          <div className="popup-sp fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[90%] max-h-screen bg-white px-24 py-[50px] shadow-lg rounded-md z-[1000] overflow-y-auto flex flex-col items-center justify-center clip-path-popup">
            <span className="close-sp absolute top-3 right-4 cursor-pointer text-xl" onClick={closePopup}>&times;</span>
            <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="w-[100px] h-[100px] rounded-full mx-auto" />
            <h3 className="text-center">{selectedSpeaker.name}</h3>
            <h4 className="text-center">{selectedSpeaker.title}</h4>
            <p className="text-center font-normal leading-6">{selectedSpeaker.bio}</p>
          </div>
        </>
      )}

      {/* Agenda Section */}
      <section className="agenda-section wrap-np w-[80%] mx-auto flex items-center justify-center py-[50px]">
        <img src={agendaImage} alt="Event Agenda" className="w-1/2" />
      </section>

      {/* Register Form Section */}
      <section id="register" className="bg-black text-white p-8 flex justify-center items-center min-h-screen relative section-np bg-[radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)] bg-[30px_30px] bg-[-5px_-5px]">
        <div className="bg-[#1e1e1e] p-10 rounded-lg w-full max-w-3xl shadow-lg form-container-np">
          <h2 className="text-center mb-8 text-3xl font-bold uppercase tracking-wide text-primary-color form-heading-np">Register Now</h2>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              company: '',
              workEmail: '',
              industry: '',
              phoneNumber: '',
              country: '',
              privacyAccepted: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const response = await fetch('http://localhost:3001/register', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                });

                const result = await response.json();

                if (response.ok) {
                  toast.success('Registration successful!');
                  resetForm();
                  setCountryInputValue('');
                } else {
                  toast.error(`Error: ${result.error}`);
                }
              } catch (error) {
                toast.error('An error occurred. Please try again.');
              }
              setSubmitting(false);
            }}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form className="form-np">
                <div className="mb-6 form-group-np">
                  <label htmlFor="firstName" className="block mb-2 text-base font-bold text-[#ccc] label-np">First Name</label>
                  <Field type="text" id="firstName" name="firstName" className="w-full p-3 border border-[#444] rounded-md bg-[#2b2b2b] text-white text-base transition-all duration-300 focus:border-primary-color focus:outline-none input-np" placeholder="Enter your first name" />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6 form-group-np">
                  <label htmlFor="lastName" className="block mb-2 text-base font-bold text-[#ccc] label-np">Last Name</label>
                  <Field type="text" id="lastName" name="lastName" className="w-full p-3 border border-[#444] rounded-md bg-[#2b2b2b] text-white text-base transition-all duration-300 focus:border-primary-color focus:outline-none input-np" placeholder="Enter your last name" />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6 form-group-np">
                  <label htmlFor="company" className="block mb-2 text-base font-bold text-[#ccc] label-np">Company</label>
                  <Field type="text" id="company" name="company" className="w-full p-3 border border-[#444] rounded-md bg-[#2b2b2b] text-white text-base transition-all duration-300 focus:border-primary-color focus:outline-none input-np" placeholder="Enter your company name" />
                  <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6 form-group-np">
                  <label htmlFor="workEmail" className="block mb-2 text-base font-bold text-[#ccc] label-np">Work Email</label>
                  <Field type="email" id="workEmail" name="workEmail" className="w-full p-3 border border-[#444] rounded-md bg-[#2b2b2b] text-white text-base transition-all duration-300 focus:border-primary-color focus:outline-none input-np" placeholder="Enter your work email address" />
                  <ErrorMessage name="workEmail" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6 form-group-np">
                  <label htmlFor="industry" className="block mb-2 text-base font-bold text-[#ccc] label-np">Industry</label>
                  <Field as="select" id="industry" name="industry" className="w-full p-3 border border-[#444] rounded-md bg-[#2b2b2b] text-white text-base transition-all duration-300 focus:border-primary-color focus:outline-none input-np">
                    <option value="">Select your industry</option>
                    <option value="Banking">Banking</option>
                    <option value="Payments">Payments</option>
                    <option value="Telco">Telco</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Wealth and Asset management">Wealth and Asset management</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage name="industry" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mb-6 form-group-np">
                  <label htmlFor="phoneNumber" className="block mb-2 text-base font-bold text-[#ccc] label-np">Phone Number</label>
                  <Field type="tel" id="phoneNumber" name="phoneNumber" className="w-full p-3 border border-[#444] rounded-md bg-[#2b2b2b] text-white text-base transition-all duration-300 focus:border-primary-color focus:outline-none input-np" placeholder="Enter your phone number" />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                {/* Updated Country Dropdown with Formik integration */}
                <div className="mb-6 form-group-np relative" ref={dropdownRef}>
                  <label htmlFor="country" className="block mb-2 text-base font-bold text-[#ccc] label-np">Country</label>
                  <div
                    className="w-full p-3 border border-[#444] rounded-md bg-[#2b2b2b] text-base transition-all duration-300 focus:border-primary-color focus:outline-none cursor-pointer flex items-center input-np"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsCountryDropdownOpen(!isCountryDropdownOpen);
                      }
                    }}
                  >
                    <span className="mr-2 text-xl">{values.country ? countries.find(c => c.value === values.country)?.flag : ''}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 mr-3 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''} ${values.country ? 'text-white' : 'text-[#757575]'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className={`${values.country ? 'text-white' : 'text-[#757575]'}`}>
                      {values.country ? countries.find(c => c.value === values.country)?.name : 'Select your country'}
                    </span>
                  </div>

                  {isCountryDropdownOpen && (
                    <ul className="absolute z-50 left-0 right-0 mt-1 bg-[#2b2b2b] border border-[#444] rounded-md max-h-60 overflow-y-auto shadow-lg">
                      <li className="p-3">
                        <input
                          type="text"
                          value={countryInputValue}
                          onChange={(e) => setCountryInputValue(e.target.value)}
                          className="w-full p-2 bg-[#1e1e1e] border border-[#444] text-white rounded-md"
                          placeholder="Search for a country"
                          onClick={(e) => e.stopPropagation()} // Prevent closing dropdown when clicking inside input
                        />
                      </li>
                      {filteredCountries.map((country) => (
                        <li
                          key={country.value}
                          className="flex items-center p-3 cursor-pointer hover:bg-[#3a3a3a] text-white transition-colors border-b border-[#444] last:border-b-0"
                          onClick={() => {
                            setFieldValue('country', country.value);
                            setIsCountryDropdownOpen(false);
                            setCountryInputValue('');
                          }}
                        >
                          <span className="mr-3 text-xl">{country.flag}</span>
                          <span>{country.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="mt-6 text-sm text-center text-[#ccc] privacy-policy-np">
                  <Field type="checkbox" id="privacyAccepted" name="privacyAccepted" className="checkbox-np" />
                  <label htmlFor="privacyAccepted" className="ml-2">
                    By filling out the registration form to attend our event, you agree and consent to Cogent Solutions's <a href="#" className="text-primary-color underline transition-all duration-300 hover:text-white">Privacy Policy</a>.
                  </label>
                  <ErrorMessage name="privacyAccepted" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <button type="submit" disabled={isSubmitting} className="mt-4 w-full p-4 bg-primary-color text-white text-base font-bold border-none rounded-md cursor-pointer uppercase transition-all duration-300 hover:bg-yellow-400 button-np">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default App;