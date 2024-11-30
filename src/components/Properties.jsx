import React, { useEffect } from 'react'
import Properties_listings from './Properties_listings'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material';
import wp from "../assets/watsappicon.png";

function Properties() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])



    console.log(process.env.REACT_APP_API_URL);
    return (
        <>
            <section className='bg-properties'>
                <div className="container">
                    <div className="row d-conten-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <span className='story_head text-center d-block'>Trusted Real Estate</span>
                                <span className='story_smlhead text-center d-block'>Properties for you</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/wp" target="_blank" className="wtbtn  btn-circle  fixedbutton-whatsapp1" id="webcall" role="button" type="button">
                    <i className="fa fa-whatsapp"></i>
                    <img src={wp} alt="watsapp icon" className="wapp-wh"/>
                </a>
            </section>
            {/* ADD SUB COMPONENTS */}
            <div className='container'>
                <div className="col breadcrumb_align mt-5">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" underline="hover" color="#949494" className='breadcrum_txt'>
                            Home
                        </Link>
                        <Link
                            to="/properties"
                            underline="hover"
                            color="#949494"
                            className='breadcrum_txt'
                        >
                            Property Listings
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <Properties_listings />

        </>
    )
}

export default Properties;