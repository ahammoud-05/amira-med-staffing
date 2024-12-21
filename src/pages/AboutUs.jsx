import React, { useEffect } from "react";
import aboutdoctors from "../assets/undraw_doctors_djoj.png"
import Aos from 'aos';
import 'aos/dist/aos.css';



const AboutUs = () => {

    useEffect(() => {
            Aos.init({
              easing: 'ease-in-out',
              duration: 1200,
            });
          }, [])


  return (
    <section id="about">
      <div className="about-container">
          <div className="about-desc">
            <h1 className="about-title" data-aos = "fade" data-aos-delay = "200" data-aot-duration = "1200">About Us</h1>
            <hr className="line" />
        <div className="about-row">
            <div className="about-text">
            <p className="about-text1" data-aos = "fade-right" data-aos-delay = "500" data-aot-duration = "1200">
              Our staffing firm is dedicated to connecting healthcare
              professionals with job opportunities across all 50 States. We
              accomplish this by providing our client healthcare systems and
              independent medical facilities with support staff and solutions to
              their most persistent labor challenges.
              <br />
              
            </p>
            <p className="about-text2" data-aos = "fade-right" data-aos-delay = "600" data-aot-duration = "1200">
              For our client medical facilities, Amira Medical Staffing is a
              trusted partner in the facilitation of quality outcome measures
              and ongoing patient care. With our vast industry knowledge, we
              help health systems, hospitals and government entities to build
              and maintain an effective workplace model that ensures patient
              access to care and organizational stability.
            </p>
            </div>
            <figure className="about-img-wrapper">
                <img src={aboutdoctors} alt="" className="about-img" data-aos = "fade" data-aos-delay = "600" data-aot-duration = "1200" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
