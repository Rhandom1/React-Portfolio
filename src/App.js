// Import pages to render
import React,{ useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";



function App() {
  // Set document title to current page rendered
  useEffect(() => {
    document.title = currentPage;
  });
  //creates the nav menu
  const navMenu = ["About", "Portfolio", "Contact", "Resume"];
  // sets currentpage to a default of About
  const [currentPage, setCurrentPage] = useState("About");
  // Renders content based on what page is clicked
  const renderPage = () => {
    console.log("!!!!!!Current Page!!!!!!!", currentPage);
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Portfolio />;
  };
  // Passes menu items, current page and page change function to nav bar, renders page in to main body of html
  return (
    <div>
      <Nav
        navMenu={navMenu}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
