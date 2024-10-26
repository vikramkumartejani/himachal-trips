// import React from 'react'
"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes  } from 'react-icons/fa';
import { FaMobileScreen , FaFacebookF , FaInstagram} from "react-icons/fa6";

import './../styles/Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className='navbar'>
      <div className='box1'>
        <div className='row'>
            <div className='follow'>
                <li>Follow Us</li>
                <li>
                    <a href="#" className='follow-icons'>
                        <span className=''>
                            <FaFacebookF color='white'/>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className='follow-icons'>
                        <span className='instagram'>
                        <FaInstagram color='white'/>
                        </span>
                    </a>
                </li>
            </div>
            <div className='accounts'>
                <li>
                    <span className='fa mobile'>
                     <FaMobileScreen color='white' className='mobile-icon'/>
                     <a href="tel:+91 7018398641">+91 70183 98641</a>
                    </span>
                </li>
                <li>
                    <a href="#" className='call'>
                        <p>Feel Free to Call Us</p>
                    </a>
                </li>
            </div>
        </div>
      </div>
      
      <div className='box2'>
        <div className='container'>
        <div className='logo'>
            <a href="#">
                <img src='/assests/himachal-trips-logo.png' alt="logo" />
            </a>
        </div>

        <button className='toggle-button' onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`links ${isOpen ? 'active' : ''}`}>
            <ul>
                <li className='close-btn'>
                    <button onClick={toggleMenu}><FaTimes color='#ff8810' /></button>
                </li>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Ladakh
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contact
                    </a>
                </li>
                
            </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

