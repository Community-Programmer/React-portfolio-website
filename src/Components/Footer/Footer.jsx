import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-content">
          <div class="footer-section about">
            <h3>About Me</h3>
            <p>
              I'm passionate about technology and enjoy working on various
              projects. Here, you'll find a mix of my personal projects,
              contributions to open source, and more
            </p>
          </div>
          <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: sarthakpatel230204@gmail.com</p>
            <p>Phone: +91 80812 39465</p>
          </div>
          <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to='/skills'>Skills</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

    
          <div className=" footer-section social-links">
            <Link to="https://github.com/Community-Programmer">
              <i className="fa-brands fa-github fa-2xl" />
            </Link>

            <Link to="https://www.linkedin.com/in/sarthak-patel23">
              <i className="fa-brands fa-linkedin fa-2xl" />
            </Link>

            <Link to="https://wa.me/918081239465">
              <i class="fa-brands fa-whatsapp fa-2xl" />
            </Link>

            <Link to="https://www.instagram.com/sarthak_patel23" target="blank">
              <i class="fa-brands fa-instagram fa-2xl" />
            </Link>
          </div>
          </div>
      
        <div class="footer-bottom">
          <p>&copy; 2024 Sarthak Patel. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;