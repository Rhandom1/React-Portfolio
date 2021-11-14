import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"></svg>
                </a>
                <span className="text-muted">© 2021 Shawn McWhorter</span>
            </div>
            <div className="nav col-md-4 justify-content-start list-unstyled d-flex">
                <a style={{ marginRight: 10 }} href="https://github.com/Rhandom1"><FaGithub size='50px' /></a>
                <a style={{ marginRight: 10 }} href="https://www.linkedin.com/in/shawn-mcwhorter/" ><FaLinkedin size='50px' /></a>
                <a style={{ marginRight: 10 }} href="https://www.instagram.com/rhandom01/" ><FaInstagram size='50px' /></a>
            </div>
        </footer>
    )
}

export default Footer;