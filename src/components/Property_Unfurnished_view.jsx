import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';
import location from "../assets/location.svg";
import { MdOutlineCancel } from "react-icons/md";
import FormComponent from './FormComponent';
const Property_Unfurnished_view = ({ propertyitem }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div key={propertyitem?.id} className=" bg-white-cart">
                <div className="col-lg-12 p-0 position-relative">
                <div>
                        
                        <div className="slide-label">{propertyitem?.attributes?.locality}</div>
                        <div className="slide-price">₹{propertyitem?.attributes?.price} <br />Onwards</div>
                        <a href={propertyitem?.attributes?.slug} target="_blank" rel="noopener noreferrer" className="slide-link">
                        <img src={`${process.env.REACT_APP_API_URL}${propertyitem?.attributes?.images?.data[0]?.attributes?.url}`} alt="property listing images" className='img-fluid propimg'></img>
                        </a><a href={propertyitem?.attributes?.slug} target="_blank" rel="noopener noreferrer" className="slide-link"><div className='slide-description'>
                            <div className="slide-title">{propertyitem?.attributes?.title}</div>
                            <div className="slide-size">
                                <div className="slide2">{propertyitem?.attributes?.Project?.Unit_Variants}</div>
                                <div className="slide1">{propertyitem?.attributes?.Project?.Size_Range}</div>
                            </div>
                            </div></a>
                      </div>
                     {/*<div className='slide-description pt-2 pb-2'>
                          <div className='d-flex justify-content-around '>
                              <div className="btn-contact-11 d-flex align-items-center">
                                <Link to={`/${propertyitem?.attributes?.slug}`} className='btn-txt1 btn13'>
                                View Details
                                </Link>
                              </div>
                        
                               <button variant="primary" onClick={handleShow} className='booknow-btn btn11 button-top align-item-center'>Enquiry Now</button>
                          </div>
                          <FormComponent show={show} onHide={handleClose} />
                      </div>*/}
                </div>
                <div className="col-lg-12 p-0">
                    {/* <div className="row p-3px">
                        <div className="col-12 mt-2">
                            <h5 className='properties_cart_heading'>{propertyitem?.attributes?.title}</h5>
                            
                            <p className='pt-2'>
                                <span><img src={location} alt="location icon" className='img-fluid '></img></span>
                                &nbsp; <span className='property-cart_para '>{propertyitem?.attributes?.address}</span>
                            </p>
                        </div>
                    </div>
                    <div className="row p-3px text-center-res">
                        <div className="col">
                            <h6 className='properties_cart_subhead'>TOTAL PRICE RANGE</h6>
                        
                            <h4 className='properties_cart_price properties_cart_price_color'>₹ {propertyitem?.attributes?.price}</h4>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-lg-3 row-cols-md-3 p-3px mt-2">
                        <div className="col">
                            <h6 className='properties_cart_subhead'>TYPE</h6>
                            <h4 className='properties_cart_price1'>{propertyitem?.attributes?.type}</h4>
                        </div>
                        <div className="col">
                            <h6 className='properties_cart_subhead'>Sq.ft</h6>
                            <h4 className='properties_cart_price1'>{propertyitem?.attributes?.sqft}</h4>
                        </div>
                        <div className="col">
                            <h6 className='properties_cart_subhead'>Facing</h6>
                            <h4 className='properties_cart_price1'>{propertyitem?.attributes?.facing}</h4>
                        </div>
                    </div>*/}


                </div>
            </div>
        </div>
    );
};
export default Property_Unfurnished_view