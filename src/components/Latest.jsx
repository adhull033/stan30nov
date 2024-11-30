import React, { useState } from 'react'
import Slider from "react-slick";

import { BsArrowRight } from "react-icons/bs";
import latest from "../assets/latest1.png";
import latest2 from "../assets/latest2.png";
import latest3 from "../assets/latest3.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


function Latest() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <BsArrowRightCircle className="arrow_next2" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <BsArrowLeftCircle className="arrow_prev2" />
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
      <section className='mt-5 mb-5'>
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="header-h2">Latest Press Release</h2>
              <p className="property-para ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className='row'>
            <Slider {...settings}>
              <div>
                <div className='latest_cont'>

                  <img
                    src={latest}
                    alt="latest"
                    width={"95px"}
                    height={"110px"}
                    className="latest"
                  />

                  <p className="latest_para ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                  </p>
                  <p className='latest_span '>31 Jan, 2023.</p>
                  <h2 className='latest-read'>Read More<BsArrowRight className='length pt-1' /></h2>
                </div>
              </div>
              <div>


                <div className='latest_cont'>
                  <img
                    src={latest2}

                    alt="latest"
                    sizes=""
                    width={"95px"}
                    height={"110px"}
                    className="latest"
                  />

                  <p className="latest_para ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                  </p>
                  <p className='latest_span '>31 Jan, 2023.</p>
                  <h2 className='latest-read'>Read More<BsArrowRight className='length pt-1' /></h2>
                </div>

              </div>

              <div>


                <div className='latest_cont'>

                  <img
                    src={latest3}

                    alt="latest"
                    sizes="latest"
                    width={"95px"}
                    height={"110px"}
                    className="latest"
                  />

                  <p className="latest_para ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                  </p>
                  <p className='latest_span '>31 Jan, 2023.</p>
                  <h2 className='latest-read'>Read More<BsArrowRight className='length pt-1' /></h2>
                </div>

              </div>

              <div>
                <div className='latest_cont'>

                  <img
                    src={latest2}

                    alt="latest"
                    sizes=""
                    width={"95px"}
                    height={"110px"}
                    className="latest"
                  />

                  <p className="latest_para  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                  </p>
                  <p className='latest_span'>31 Jan, 2023.</p>
                  <h2 className='latest-read'>Read More<BsArrowRight className='length pt-1' /></h2>
                </div>

              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}


export default Latest