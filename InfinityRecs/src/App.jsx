import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navar.jsx/Navbar";
import Hero from "./Components/Hero.jsx/Hero";
import CategoryGrid from "./Components/CategoryGrid.jsx/CategoryGrid";
import Dashboard from "./Pages/Dashboard"; // Import Dashboard

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden min-h-screen bg-gradient-to-b from-blue-100 to-purple-200">
        <Navbar />
        
        <Routes>
          {/* Display Hero and CategoryGrid on the homepage */}
          <Route path="/" element={
            <>
              <Hero />
              <CategoryGrid />
            </>
          } />
          
          {/* Dashboard page  */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
