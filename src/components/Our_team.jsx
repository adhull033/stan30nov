import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Slider from "react-slick";


function Our_team() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <BsArrowRight className="arrow_next1" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        < BsArrowLeft className="arrow_prev1" />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);
  // METERIAL UI VALUE
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <>
      <section className='section11 mb-3 pt-5'>
        <div className="container">
          <div className="row">
            <div className='our-team-bg'>
              <h2 className='our-team-head'>Our Team</h2>
              <p className='our-team-para'>Stanely leads the way in luxury, sustainability, delivery and ROI.<br/> Our development focus contemporary homes with something to offer every investor. </p>
            </div>
          </div>
          <div className="row employee-full">
            <Slider {...settings}>
              <div>
                <div className="col employee-1">
                  <div>
                    <div className="employee3">
                      <div className="employee-image">
                      </div>
                      <div className="employee-details">
                        <div className="employee-name">
                          <h1 className="text-center our-team-text">Founder<br /><span className="employee-role">The company’s commitment to it’s core values, adaptation to evolving business strategies, and most trusted name in the property development sector.</span></h1>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col employee-1">
                  <div className="employee1">
                    <div className="employee-image">
                    </div>
                    <div className="employee-details">
                      <div className="employee-name">
                        <h1 className="text-center our-team-text">Manager<br /><span className="employee-role">Founders are impressive people. They get listened to. Even when someone else is telling their story it can be compelling.</span></h1>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col employee-1">
                  <div className="employee2">
                    <div className="employee-image">
                    </div>
                    <div className="employee-details">
                      <div className="employee-name">
                        <h1 className="text-center our-team-text">Co-Founder<br /><span className="employee-role">They’re the businesses with the 30 failed prototypes that paved the way for the one successful one.</span></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="col employee-1">
                  <div>
                    <div className="employee3">
                      <div className="employee-image">
                      </div>
                      <div className="employee-details">
                        <div className="employee-name">
                          <h1 className="text-center our-team-text">Founder<br /><span className="employee-role">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></h1>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </Slider>
          </div>
        </div>
      </section>

    </>
  )
}

export default Our_team;