import React, { useState } from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the dropdown menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <img src="/assets/logo.jpeg" alt="Super Signs Logo" />
      <button
        id="menu-toggle"
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
      <ul id="navbar-menu" className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" activeClassName="active-link" exact onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active-link" onClick={closeMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" activeClassName="active-link" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;