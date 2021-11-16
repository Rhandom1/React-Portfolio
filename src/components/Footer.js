import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
                <a style={{ margin: 0 }} href="https://github.com/Rhandom1"><FaGithub size='50px' /></a>
                <a style={{ margin: 0  }} href="https://www.linkedin.com/in/shawn-mcwhorter/" ><FaLinkedin size='50px' /></a>
                <a style={{ margin: 0  }} href="https://www.instagram.com/rhandom01/" ><FaInstagram size='50px' /></a>
            
        </footer>
    )
}

export default Footer;