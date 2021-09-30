import React from "react";
import 'bootstrap-4-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className="nav fixed">
      <nav className={colorChange ? 'navbar colorChange navbar navbar-expand-lg  flex-navbar' : 'navbar navbar-expand-lg  flex-navbar'}>
        <a href='#' className="navbar-brand covid-logo" >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src="https://about-corona.net/_nuxt/img/logo.69d78f5.png" alt="Corona" />
            <span className='text-about-corona'>about-corona</span>
          </Link>
        </a>
        <button className="navbar-toggler  navbar-button nav-button-border" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav nav-ul">
            <li className="nav-item nav-item-style">
              <Link to="/" className="nav_link">Overveiw</Link>
            </li>
            <li className="nav-item nav-item-style">
              <Link to="/dashboard" className="nav_link">Dashboard</Link>
            </li>
            <li className="nav-item nav-item-style">
              <Link to="/documentation" className="nav_link">API Documentation</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}