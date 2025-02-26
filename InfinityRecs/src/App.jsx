import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navar.jsx/Navbar";
import Hero from "./Components/Hero.jsx/Hero";
import CategoryGrid from "./Components/CategoryGrid.jsx/CategoryGrid";
import { ClerkProvider } from '@clerk/clerk-react';
import Dashboard from "./Pages/Dashboard"; // Import Dashboard



const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden min-h-screen bg-gradient-to-b from-blue-100 to-purple-200  dark:from-darkyy dark:to-purple-300">
    

        <Navbar />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CategoryGrid />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
