import React, { useEffect } from "react";
import serviceimg from "../assets/undraw_doctor_aum1.png"
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
                Aos.init({
                  easing: 'ease-in-out',
                  duration: 1200,
                });
              }, [])

  return (
    <section id="services">
      <div className="services-container">
        <div className="services-desc">
          <h1 className="service-title" data-aos = "fade" data-aos-delay = "200" data-aot-duration = "1200">Services</h1>
          <hr className="line" data-aos = "fade" data-aos-delay = "200" data-aot-duration = "1200" />
          <p className="services-subtitle" data-aos = "fade" data-aos-delay = "300" data-aot-duration = "1200">
            Whether it is Temporary Placement or Permanent job Placement, Amira
            Medical Staffing can serve as a trusted support partner to our
            medical facilities in need.
          </p>
        </div>
        <div className="placement-container">
            <div className="placement-row" data-aos = "fade-right" data-aos-delay = "500" data-aot-duration = "1200">
          <h4 className="placement-title">Temporary Placement</h4>
          <p className="placement-desc">
            Enlist Amira Medical Staffing to cover temporary assignments to
            avoid burnout of your permanent medical facility staff. Vacancies
            due to unexpected vacations, illnesses and abrupt departures cause
            organizational lack of team coverage that it needs. Temporary
            placement of our agency personnel ensures that the help that you
            need is right there and ready to go for as long as you need them to
            be.
          </p>
          <h4 className="placement-title">Temporary to Direct Placement</h4>
          <p className="placement-desc">
            This service grants the utilization of the temporary assignment for
            evaluation of the employee's skillset firsthand. This service also
            allows the determination of whether a candidate is a good fit in the
            company culture of the organization. A direct hire fee will be
            implemented and discounted according to the amount of hours worked
            before the conversion.
          </p>
          <h4 className="placement-title">Direct Hire Placement</h4>
          <p className="placement-desc">
            This service involves our agency recruitment, screening and
            retention of potential candidate meeting the requirements provided
            by our client organization. Once the client organization extends an
            offer of employment with intent to hire the candidate, our agency
            will collect a hiring fee consisting of a percentage of the offered
            salary amount offered to candidate.
          </p>
          </div>
          <figure className="service-img-wrapper">
            <img src={serviceimg} alt="" className="service-img" data-aos = "fade" data-aos-delay = "600" data-aot-duration = "1200"/>
          </figure>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
