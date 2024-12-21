import React, { useState } from 'react'
import amiralogo from "../assets/AmiraLogoClearPadded.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ toggleModal }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }


  return (
    <div className='nav-container'>
        <nav>
            <figure className="logo-wrapper">
                <a href='/'>
                  <img src={amiralogo} alt="" className="logo-img" />  
                </a>
            </figure>
            <div className={`sidebar ${isSidebarOpen ? "open" : "closed"} `}>
                <button onClick={toggleSidebar} className='sidebar-close'>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <ul className='sidebar-links'>
                <a href='/' className='sidebar-link'>
                <li className='nav-link sidebar-link'>Home</li>
                </a>
                <a href='#about' className='sidebar-link'>
                <li className='nav-link sidebar-link'>About Us</li>
                </a>
                <a href='#services' className='sidebar-link'>
                <li className='nav-link sidebar-link'>Services</li>
                </a>
                <a className='sidebar-link'>
                <li className='nav-link sidebar-link'>Jobs</li>
                </a>
            </ul>
            </div>
            <ul className='nav-links'>
                <a href='/'>
                <li className='nav-link link-hover-effect'>Home</li>
                </a>
                <a href='#about'>
                <li className='nav-link link-hover-effect'>About Us</li>
                </a>
                <a href='#services'>
                <li className='nav-link link-hover-effect'>Services</li>
                </a>
                <li className='nav-link link-hover-effect'>Jobs</li>
                <button onClick={toggleSidebar} className='nav-btn'>
                <FontAwesomeIcon className='bars-icon' icon={faBars} />
                </button>
                <button onClick={toggleModal} className='contact-btn'>Contact Us</button>
            </ul>
        </nav>
    </div>
  )
}

export default Nav