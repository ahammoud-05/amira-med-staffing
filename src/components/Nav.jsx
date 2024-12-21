import React from 'react'
import amiralogo from "../assets/AmiraLogoClearPadded.png"

const Nav = () => {
  return (
    <div className='nav-container'>
        <nav>
            <figure className="logo-wrapper">
                <a href='/'>
                  <img src={amiralogo} alt="" className="logo-img" />  
                </a>
            </figure>
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
                <button className='contact-btn'>Contact Us</button>
            </ul>
        </nav>
    </div>
  )
}

export default Nav