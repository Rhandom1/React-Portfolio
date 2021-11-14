// Import pages to render
import React from "react";
import "./App.css"
import PortfolioPages from "./components/PortfolioPages"
import'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="portfolio-app">
      <PortfolioPages />
      
    </div>
  );
}

export default App;
