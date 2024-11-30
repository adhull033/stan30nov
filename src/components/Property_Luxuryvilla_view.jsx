import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';
import location from "../assets/location.svg";
import { MdOutlineCancel } from "react-icons/md";
import FormComponent from './FormComponent';
const Property_Luxuryvilla_view = ({ propertyitem }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const DetailsApi = (id) => {
        console.log(id);
    }
    return (
        <>
            <div key={propertyitem?.id} className="row borbottom_blue bg-white-cart mb-5">
                <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}${propertyitem?.attributes?.images?.data[0]?.attributes?.url}`} alt="banner" className='img-fluid'></img>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                    <div className="row p-3px">
                        <div className="col-12 mt-2">
                            <h5 className='properties_cart_heading'>{propertyitem?.attributes?.title}</h5>
                            <p className='pt-2'><span><img src={location} alt="location icon" className='img-fluid '></img></span> &nbsp; <span className='property-cart_para '>{propertyitem?.attributes?.address}</span></p>
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
                    </div>

                    <div className="row p-3px mt-2">
                        <div className="col viewdetails_btn">
                            <Link to={`/${propertyitem?.attributes?.slug}`} className='view-details'  >
                                View Details
                            </Link>

                        </div>
                        <div className="col enquiry-btn">
                            <button variant="primary" onClick={handleShow} className='view-details1 '>Enquiry Now</button>
                        </div>
                        <FormComponent show={show} onHide={handleClose}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Property_Luxuryvilla_view