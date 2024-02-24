import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import Alert from "../../Components/Alert/Alert";
import axios from "axios";
import API_BASE_URL from "../../config/config";

const Contact = () => {
  const [alert, setAlert] = useState(null);
  const [info, setinfo] = useState({ name: "", email: "", message: "" });
  const handlechange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value });
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000); 
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = info;
      const response = await axios.post(`${API_BASE_URL}/data/contact`, {
        name,
        email,
        message,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        showAlert('Message sent!', 'success');
        setinfo({ name: "", email: "", message: "" });
      } else {
        showAlert('Please fill all the details', 'error');
      }
  
  };
  
  return (
    <>
      <div className="contact-container" >
        <div className="left-section">
          <h1>
            Let's talk on something <span>great</span> together
          </h1>
          <div className="contact-info">
            <p>
              <i className="fa-solid fa-envelope" />
              sarthakpatel230204@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>+91 80812 39465
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>Bengaluru, Karnataka
            </p>
          </div>
          <div className="social-links">
            <Link
              to="https://www.linkedin.com/in/sarthak-patel23"
              target="blank"
            >
              <i className="fa-brands fa-linkedin fa-2xl" />
            </Link>

            <Link to="https://wa.me/918081239465" target="blank">
              <i className="fa-brands fa-whatsapp fa-2xl" />
            </Link>

            <Link to="https://www.instagram.com/sarthak_patel23" target="blank">
              <i className="fa-brands fa-instagram fa-2xl" />
            </Link>
          </div>
        </div>

        <div className="right-section" data-aos="zoom-in"
     data-aos-duration="1000">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h1>
              Contact me - <span>Sarthak Patel</span>
            </h1>
            <p>
              Contact me using below form drop a mail at -
              sarthakpatel230204@gmail.com
            </p>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              value={info.name}
              onChange={handlechange}
              placeholder="Enter Name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={info.email}
              onChange={handlechange}
              placeholder="Enter Email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={info.message}
              onChange={handlechange}
            ></textarea>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      {alert && (<Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)}/>)}
    </>
  );
};

export default Contact;
