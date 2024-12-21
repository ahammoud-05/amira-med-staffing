import React, { useEffect } from 'react'
import doctors from "../assets/doctors-and-nurses-coordinate-hands-concept-teamwork-free-photo.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        Aos.init({
          easing: 'ease-in-out',
          duration: 1200,
        });
      }, [])

  return (
    <div className='landing-container'>
        <div className="landing-row">
            <div className="landing-desc-container">
                <h1 className="landing-title" data-aos = "fade-up" data-aos-delay = "200" data-aot-duration = "1200">Welcome</h1>
                <p className="landing-subtitle"data-aos = "fade-up" data-aos-delay = "300" data-aot-duration = "1200">
                <span className='purple'>Amira Medical Staffing</span> has the expertise to find the <span className='purple'>best candidates</span> for our client's needs. Our support staff works diligently with hiring managers to address various staff shortages and <span className='purple'>fluctuating demand.</span>
                </p>
                <a href="#about">
                <button className='landing-btn' data-aos = "fade-up" data-aos-delay = "700" data-aot-duration = "1200">About Us</button>
                </a>
            </div>
            <figure className='landing-img-container'>
            <img src={doctors} alt="" className="landing-img" />
            </figure> 
        </div>
    </div>
  )
}

export default Home