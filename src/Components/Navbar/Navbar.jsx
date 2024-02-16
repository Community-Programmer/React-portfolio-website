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
      <nav class="navbar" id="navbar">
        <div class="logo">
          <Link to='/'>   
             <img src={weblogo} alt="logo" />
          </Link>
        </div>
        <ul class={`nav-list ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/" onClick={toggleNavbar}>
              <li class="fa fa-home" /> Home
            </Link>
            <Link to="/skills" onClick={toggleNavbar}>
              <li class="fa fa-wrench" /> Skill
            </Link>
            <Link to="/projects" onClick={toggleNavbar}>
              <li class="fa fa-file" /> Project
            </Link>
            <Link to="/about" onClick={toggleNavbar}>
              <li class="fa fa-user" /> About me
            </Link>
            <Link to="/contact" onClick={toggleNavbar}>
              <li class="fa fa-address-card" /> Contact Us
            </Link>
          </div>
        
          <button
            class="btn"
            onClick={()=>{window.open('https://community-programmer.blogspot.com/','_blank')}}
          >
            Blog
          </button>
        </ul>

        <div class="bar-icon">
          <li onClick={toggleNavbar} class="fa fa-bars fa-xl"></li>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;