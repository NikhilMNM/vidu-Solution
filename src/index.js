import React from 'react';
import './style.css';
import App from './App';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Services';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    
    <Footer />
  </Router>,

  document.getElementById("root")
);


