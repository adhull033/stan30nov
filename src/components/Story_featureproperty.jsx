import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import feature_icon01 from "../assets/feature_icon01.svg";
import feature_icon02 from "../assets/feature_icon02.svg";
import feature_icon03 from "../assets/feature_icon03.svg";
import feature_icon04 from "../assets/feature_icon04.svg";
import feature_img01 from "../assets/feature-img01.png";
import feature_img02 from "../assets/feature-img02.png";
import feature_img03 from "../assets/feature-img03.png";
import feature_img04 from "../assets/feature-img04.png";
import feature_img05 from "../assets/feature-img05.png";


function Story_featureproperty() {
 
    return (
        <>
           <section className='mt-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 col-md-12 p-0 ">
                            <div className='bg-blue06 p-lg-5 p-md-4 p-sm-2'>
                                <h2 className='about-head'>Featured Project</h2>
                                <p className='features-para  mt-lg-2 text-justify'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p className='pt-lg-2 pb-lg-2 '>
                                    <button type="submit" className="booknow-btn">
                                        Show ALL
                                    </button>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="row minus-m-20" >
                        <div className="col mb-3">
                            <Swiper
                            
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                infinite={true}
                                pagination={{
                                    clickable: false,
                                }}
                                breakpoints={{
                                    425: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                      },
                                    540: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                      },
                                    640: {
                                      slidesPerView: 1,
                                      spaceBetween: 20,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                      spaceBetween: 40,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                      spaceBetween: 50,
                                    },
                                  }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="slide-bg">
                                        <div className="row aligning-right-story">
                                            <div className="col-8 aligning-left-story">
                                                <h6 className='slideheadbefore'>CASA GRAND</h6>
                                                <p className=''>Chennai</p>
                                            </div>
                                            <div className="col-4 text-end ">
                                                <p>View <HiOutlineArrowNarrowRight /></p>
                                            </div>
                                        </div>
                                        <div className="row row-cols-2 row-cols-lg-4 ">
                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon01}
                                                    alt=""
                                                    sizes=""
                                                    className="img-size01 text-center"
                                                />
                                                <p className="story-carts-txt">3 Bedrooms</p>
                                            </div>
                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon02}
                                                    alt=""
                                                    sizes=""
                                                   className="img-size01 text-center"
                                                />
                                                <p className='story-carts-txt'>2 Bathrooms</p>
                                            </div>
                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon03}
                                                    alt=""
                                                    sizes=""
                                                    className="img-size01 text-center"
                                                />
                                                <p className='story-carts-txt'>1 Swimingpool</p>
                                            </div>

                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon04}
                                                    alt=""
                                                    sizes=""
                                                   className="img-size01"
                                                />
                                                <p className="story-carts-txt">3500 sq.ft</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <img src={feature_img01} alt="" className='img-fluid border-5' />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-8">
                                                <p className="story-price">
                                                    <FaRupeeSign />
                                                    50L
                                                </p>
                                            </div>
                                            <div className="col-4">
                                                <div className="story-btn">
                                                    Buy Now
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                   </div>
                                </SwiperSlide>
                                <SwiperSlide><div className="slide-bg">
                                    <div className="row aligning-right-story">
                                        <div className="col-8 aligning-left-story">
                                            <h6 className='slideheadbefore'>Harder Real Estate</h6>
                                            <p className=''>Chennai</p>
                                        </div>
                                        <div className="col-4 text-end ">
                                            <p>View <HiOutlineArrowNarrowRight /></p>
                                        </div> 
                                   </div>
                                    <div className="row row-cols-2 row-cols-lg-4 ">
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon01}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className="story-carts-txt">3 Bedrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon02}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>2 Bathrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon03}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>1 Swimingpool</p>
                                        </div>

                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon04}
                                                alt=""
                                                sizes=""
                                                className="img-size01"
                                            />
                                            <p className="story-carts-txt">3500 sq.ft</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={feature_img05} alt="" className='img-fluid border-5' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-8">
                                            <p className="story-price">
                                                <FaRupeeSign />
                                                70L
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <div className="story-btn">
                                                Buy Now
                                            </div>
                                        </div>
                                    </div> 
                                    {/* </div> */}
                               </div>
                                </SwiperSlide>
                                <SwiperSlide><div className="slide-bg">
                                    <div className="row aligning-right-story">
                                        <div className="col-8 aligning-left-story">
                                            <h6 className='slideheadbefore'>Housing Property</h6>
                                            <p className=''>Chennai</p>
                                        </div>
                                        <div className="col-4 text-end ">
                                            <p>View <HiOutlineArrowNarrowRight /></p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-lg-4 ">
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon01}
                                                alt=""
                                                sizes=""
                                                className="img-size01 text-center"
                                            />
                                            <p className="story-carts-txt">3 Bedrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon02}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>2 Bathrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon03}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>1 Swimingpool</p>
                                        </div>

                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon04}
                                                alt=""
                                                sizes=""
                                                className="img-size01"
                                            />
                                            <p className="story-carts-txt">3500 sq.ft</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={feature_img02} alt="" className='img-fluid border-5' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-8">
                                            <p className="story-price">
                                                <FaRupeeSign />
                                                1.2 CR
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <div className="story-btn">
                                                Buy Now
                                            </div>
                                        </div>
                                    </div> 
                                    {/* </div> */}
                               </div></SwiperSlide>
                                <SwiperSlide><div className="slide-bg">
                                    <div className="row aligning-right-story">
                                        <div className="col-8 aligning-left-story">
                                            <h6 className='slideheadbefore'>CASA GRAND</h6>
                                            <p className=''>Chennai</p>
                                        </div>
                                        <div className="col-4 text-end ">
                                            <p>View <HiOutlineArrowNarrowRight /></p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-lg-4 ">
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon01}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className="story-carts-txt">3 Bedrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon02}
                                                alt=""
                                                sizes=""
                                                className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>2 Bathrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon03}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>1 Swimingpool</p>
                                        </div>

                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon04}
                                                alt=""
                                                sizes=""
                                               className="img-size01"
                                            />
                                            <p className="story-carts-txt">3500 sq.ft</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={feature_img03} alt="" className='img-fluid border-5' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-8">
                                            <p className="story-price">
                                                <FaRupeeSign />
                                                50L
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <div className="story-btn">
                                                Buy Now
                                            </div>
                                        </div>
                                    </div> 
                                    {/* </div> */}
                               </div></SwiperSlide>
                                <SwiperSlide>
                                    <div className="slide-bg">
                                        <div className="row aligning-right-story">
                                            <div className="col-8 aligning-left-story">
                                                <h6 className='slideheadbefore'>CASA GRAND</h6>
                                                <p className=''>Chennai</p>
                                            </div>
                                            <div className="col-4 text-end ">
                                                <p>View <HiOutlineArrowNarrowRight /></p>
                                            </div>
                                        </div>
                                        <div className="row row-cols-2 row-cols-lg-4 ">
                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon01}
                                                    alt=""
                                                    sizes=""
                                                   className="img-size01 text-center"
                                                />
                                                <p className="story-carts-txt">3 Bedrooms</p>
                                            </div>
                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon02}
                                                    alt=""
                                                    sizes=""
                                                   className="img-size01 text-center"
                                                />
                                                <p className='story-carts-txt'>2 Bathrooms</p>
                                            </div>
                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon03}
                                                    alt=""
                                                    sizes=""
                                                    className="img-size01 text-center"
                                                />
                                                <p className='story-carts-txt'>1 Swimingpool</p>
                                            </div>

                                            <div className="col p-lg-0 story-icons-txt">
                                                <img
                                                    src={feature_icon04}
                                                    alt=""
                                                    sizes=""
                                                    className="img-size01"
                                                />
                                                <p className="story-carts-txt">3500 sq.ft</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <img src={feature_img01} alt="" className='img-fluid border-5' />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-8">
                                                <p className="story-price">
                                                    <FaRupeeSign />
                                                    80L
                                                </p>
                                            </div>
                                            <div className="col-4">
                                                <div className="story-btn">
                                                    Buy Now
                                                </div>
                                            </div>
                                        </div> 
                                        {/* </div> */}
                                    </div></SwiperSlide>
                                <SwiperSlide> <div className="slide-bg">
                                    <div className="row aligning-right-story">
                                        <div className="col-8 aligning-left-story">
                                            <h6 className='slideheadbefore'>CASA GRAND</h6>
                                            <p className=''>Chennai</p>
                                        </div>
                                        <div className="col-4 text-end ">
                                            <p>View <HiOutlineArrowNarrowRight /></p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-lg-4 ">
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon01}
                                                alt=""
                                                sizes=""
                                                className="img-size01 text-center"
                                            />
                                            <p className="story-carts-txt">3 Bedrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon02}
                                                alt=""
                                                sizes=""
                                                className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>2 Bathrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon03}
                                                alt=""
                                                sizes=""
                                                className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>1 Swimingpool</p>
                                        </div>

                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon04}
                                                alt=""
                                                sizes=""
                                                className="img-size01"
                                            />
                                            <p className="story-carts-txt">3500 sq.ft</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={feature_img01} alt="" className='img-fluid border-5' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-8">
                                            <p className="story-price">
                                                <FaRupeeSign />
                                                5 CR
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <div className="story-btn">
                                                Buy Now
                                            </div>
                                        </div>
                                    </div> 
                                    {/* </div> */}
                                </div></SwiperSlide>
                                <SwiperSlide> <div className="slide-bg">
                                    <div className="row aligning-right-story">
                                        <div className="col-8 aligning-left-story">
                                            <h6 className='slideheadbefore'>CASA GRAND</h6>
                                            <p className=''>Chennai</p>
                                        </div>
                                        <div className="col-4 text-end ">
                                            <p>View <HiOutlineArrowNarrowRight /></p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-2 row-cols-lg-4 ">
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon01}
                                                alt=""
                                                sizes=""
                                                className="img-size01 text-center"
                                            />
                                            <p className="story-carts-txt">3 Bedrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon02}
                                                alt=""
                                                sizes=""
                                                className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>2 Bathrooms</p>
                                        </div>
                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon03}
                                                alt=""
                                                sizes=""
                                               className="img-size01 text-center"
                                            />
                                            <p className='story-carts-txt'>1 Swimingpool</p>
                                        </div>

                                        <div className="col p-lg-0 story-icons-txt">
                                            <img
                                                src={feature_icon04}
                                                alt=""
                                                sizes=""
                                               className="img-size01"
                                            />
                                            <p className="story-carts-txt">3500 sq.ft</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={feature_img04} alt="" className='img-fluid border-5' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-8">
                                            <p className="story-price">
                                                <FaRupeeSign />
                                                50L
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <div className="story-btn">
                                                Buy Now
                                            </div>
                                        </div>
                                    </div> 
                                    {/* </div> */}
                                </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section> 
          
         
        </>
    )
}

export default Story_featureproperty