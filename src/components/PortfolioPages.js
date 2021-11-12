import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';


 function PortfolioPages() {
    const [currentPage, setCurrentPage] = useState('');

    // Set up const to conditionally render the pages
    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <About />;
    };

    // Add page change and set variable
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
            <Header />
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioPages;