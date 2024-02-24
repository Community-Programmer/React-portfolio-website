import React, { useState } from "react";
import weblogo from "../../Assets/Images/weblogo.png";
import "./Navbar.css";
import { Link, Outlet} from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="logo">
          <Link to='/'>   
             <img src={weblogo} alt="logo" />
          </Link>
        </div>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/" onClick={toggleNavbar}>
              <li className="fa fa-home" /> Home
            </Link>
            <Link to="/skills" onClick={toggleNavbar}>
              <li className="fa fa-wrench" /> Skill
            </Link>
            <Link to="/projects" onClick={toggleNavbar}>
              <li className="fa fa-file" /> Project
            </Link>
            <Link to="/about" onClick={toggleNavbar}>
              <li className="fa fa-user" /> About me
            </Link>
            <Link to="/contact" onClick={toggleNavbar}>
              <li className="fa fa-address-card" /> Contact Us
            </Link>
          </div>
        
          <button
            className="nav-btn"
            onClick={()=>{window.open('https://community-programmer.blogspot.com/','_blank')}}
          >
            Blog
          </button>

          <div className="close-icon">
          <li onClick={toggleNavbar} className="fa fa-xmark fa-xl"></li>
        </div>

        </ul>

       {!isOpen && <div className="bar-icon">
          <li onClick={toggleNavbar} className="fa fa-bars fa-xl"></li>
        </div> } 
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
