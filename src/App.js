import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Components/navLink/Home';
import Contact from './Components/navLink/Contact';
import Service from './Components/navLink/Service'
import About from './Components/navLink/AboutUs'
import Getstarted from './Components/navLink/Getstarted'
import Error from './Components/navLink/Error'
import './Components/navLink/Navbar.css'
import './App.css'


const App = ({ sticky }) => (
  <Router>
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        {sticky ? <img src=""
  alt="ZinoSpot" className="navbar--logo" /> : null}
      </div>
      <ul className="navbar--link nav">
        <li className="navbar--link-item nav-list">
        <Link to="/"exact>Home</Link>
        </li>
        <li className="navbar--link-item nav-list">
          <Link to="/Service">Service</Link>
          </li>
          <li className="navbar--link-item nav-list">
          <Link to="/About">About</Link>
          </li>
          <li className="navbar--link-item nav-list">
          <Link to="/Contact">Contact Us</Link>
          </li>
            <li className="navbar--link-item nav-list"> 
            <Getstarted />
            </li>
        
      </ul>
    
    </nav>
    
    <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/Service">
        <Service/>
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Getstarted">
        <Getstarted />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Error">
        <Error />
      </Route>
  
    </Router>
  );
  

export default App
