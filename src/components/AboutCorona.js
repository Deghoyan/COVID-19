import React from "react";
import { Link } from 'react-router-dom' ;


export const AboutCorona = () => {
    return (
        <>
           <div className="header gradient">
                <div className="notification-container">
                <div className='notification-text-center'>
                    <p className='uppercase'>ABOUT-CORONA.NET</p>
                    <h1 className='notification-text'>Covid-19 information from trusted sources via <Link to="/documentation" className="nav_link"> API </Link></h1>
                    <p className='notification-paragraf'>A collection of information and development resources for everyone to accelerate application and dashboard implementations</p>
                    <a href='#' className='rounded-full'>Subscribe for notifications</a>
                </div>
                <div className='world-corona'>
                    <img  className='notification-img' src='https://about-corona.net/_nuxt/img/world.06a8f48.svg' alt='World'/>
                </div>
               </div>
               <div className='nav-header'></div>
            </div>
        </>
    )
}