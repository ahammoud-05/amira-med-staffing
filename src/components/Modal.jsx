import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isModalOpen, toggleModal }) => {

  return (
    <div className={`modal-contact ${isModalOpen ? "open" : "closed"} `}>
            <button onClick={toggleModal} className='modal-close'>
            <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <h3 className="modal-title">
            Thank you for contacting Amira Medical Staffing! Please provide us with the information requested below so that we may best help you.
            </h3>
            <form action="" id="contact-form">
                <div className="form-item">
                    <label htmlFor="" className="form-item-label">Name</label>
                    <input id='user_name' className='input' type='text' required></input>
                </div>
                <div className="form-item">
                    <label htmlFor="" className="form-item-label">Email</label>
                    <input id='user_email' className='input' type='email' required></input>
                </div>
                <div className="form-item">
                    <label htmlFor="" className="form-item-label">Message</label>
                    <textarea id='user_name' className='input' type='text' required></textarea>
                </div>
                <button id='contact__submit' className='form-submit'>Send</button>
            </form>
            <h4 className="modal-subtitle">
            If you would like to submit a referral, please click here.
            </h4>
            <div className="modal-overlay modal-overlay-loading">

            </div>
            <div className="modal-overlay modal-overlay-success">

            </div>
        </div>
  )
}

export default Modal