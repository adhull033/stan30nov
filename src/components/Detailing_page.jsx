import React from 'react'
//component
import Detailing_tab from './Detailing_tab';
import { Typography, Breadcrumbs } from '@mui/material';
import { Link } from "react-router-dom"
import { FiArrowRightCircle } from "react-icons/fi";
import details_01 from "../assets/details_01.png";
import details_02 from "../assets/details_02.png";
import details_03 from "../assets/details_03.png";
import details_04 from "../assets/details_04.png";
import details_05 from "../assets/details_05.png";
import details_06 from "../assets/details_06.png";
import details_07 from "../assets/details_07.png";
// 
import { Swiper, SwiperSlide, } from "swiper/react";
import location from "../assets/location.svg";
import properties_cart01 from "../assets/properties_cart01.png";
//
import { Navigation, Autoplay, Pagination } from "swiper";

function Detailing_page() {

    return (
        <>
            <section className='mt-4'>
                <div className="container ">
                    <div className="row divide_gray">
                        <div className="col breadcrumb_align">
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
                                <Typography color="#000000" className='breadcrum_txt02'> Details</Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h6 className='details-cart_head'>Casa Grand Properties</h6>
                            <p><span><img src={location} className='img-fluid'></img></span>&nbsp;<span className='details-cart_para'>14, Gandhi Nagar, ECR Mainroad, Pondicherry-600051.</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col details_carousels_con p-2">
                            <Swiper spaceBetween={30}
                             
                                navigation={{
                                    nextE1: '.swiper-button-next',
                                    prevE1: '.swiper-button-prev',
                                 }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    425: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                      },
                                    640: {
                                      slidesPerView: 1,
                                      spaceBetween: 20,
                                    },
                                    768: {
                                      slidesPerView: 1,
                                      spaceBetween: 40,
                                    },
                                    1024: {
                                      slidesPerView: 1,
                                      spaceBetween: 50,
                                    },
                                  }}
                                // navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiperDetails" >
                                <SwiperSlide>
                                    <img src={properties_cart01} className='slide_imges' ></img>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={properties_cart01} className='slide_imges'></img>
                                </SwiperSlide>
                                <SwiperSlide><img src={properties_cart01} className='slide_imges'></img></SwiperSlide>

                            </Swiper>
                        </div>
                    </div></div>
            </section>

            <Detailing_tab/>
            
            
        </>
    )
}

export default Detailing_page