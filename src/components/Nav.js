import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import "./App.css";

// This is to build the NavBar
    // Turns off the click function if the user is on the same page
function NavTabs({currentPage, handlePageChange }) {
return (
    <ul className="nav navtabs">
        <li className="nav-item">
            <a href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
        </li>
        <li className="nav-item">
            <a href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
                Projects
            </a>
        </li>
        <li className="nav-item">
            <a href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
        </li>
        <li className="nav-item">
            <a href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
        </li>
    </ul>
    );
}

export default NavTabs;