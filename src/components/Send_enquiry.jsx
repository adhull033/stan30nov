// import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function Send_enquiry() {
    // FORM SHOW & HIDE
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <section >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='form-fully' id="contact" action="" method="post">
                            <MdOutlineCancel className='send-icon' />
                            <div className="section-heading">
                                <h4>Fill this form to get a Entry Ticket to your New Home</h4>
                            </div>

                            <div className="inputField mt-3">
                                <input className='enter-name' type="name" name="name" id="name" placeholder="Enter Your Name" autocomplete="on" required="" />
                                <span className="valid_info_name"></span>
                            </div>

                            <div className="inputField mt-3">
                                <input className='enter-name' type="Email" name="email" id="email" placeholder="Enter Your Email Address" required="" />
                                <span className="valid_info_email"></span>
                            </div>

                            <div className="inputField mt-3">
                                <input className='enter-name' type="Email" name="email" id="email" placeholder="Enter Your Mobile Number" required="" />
                                <span className="valid_info_message"></span>
                            </div>
                            <div className="inputField mt-3">
                                <textarea className='enter-name name-enter' name="message" id="message" placeholder="Enter Your Message"></textarea>
                                <span className="valid_info_message"></span>
                            </div>

                            <div className="inputField btn mt-3">
                                <button type="submit" id="form-submit" className="main-gradient-button" >Send a message</button>
                            </div>

                        </form>
                    </Modal.Body>
                </Modal>
            </section>
        </>
    )
}

export default Send_enquiry;