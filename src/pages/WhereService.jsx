import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';


const WhereService = () => {

    useEffect(() => {
                    Aos.init({
                      easing: 'ease-in-out',
                      duration: 1200,
                    });
                  }, [])
    
  return (
    <section id='whereservice'>
        <div className="ws-text">
            <h1 className="ws-title" data-aos = "fade" data-aos-delay = "200" data-aot-duration = "1200">Where do we service?</h1>
        </div>
    <div className="service-row">
                  <ul className="service-list">
                    <div className="service-list-container" data-aos = "fade-right" data-aos-delay = "500" data-aot-duration = "1200">
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Hospitals</li>
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Acute care facilities</li>
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Skilled nursing and rehabilitation centers</li>
                    </div>
                    <div className="service-list-container" data-aos = "fade-right" data-aos-delay = "600" data-aot-duration = "1200">
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Assisted living facilities</li>
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Physician practices</li>
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Outpatient surgery centers</li> 
                    </div>
                    <div className="service-list-container" data-aos = "fade-right" data-aos-delay = "700" data-aot-duration = "1200">
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Clinics</li>
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Correctional facilities</li>
                        <li className="service-list-item"><FontAwesomeIcon className='check-icon' icon={faCheck} /> Schools</li>
                    </div>
                </ul>  
                </div>
                </section>
  )
}

export default WhereService