import React, { useState } from 'react'
import Slider from "react-slick";
import axios from "axios";
import {Link} from "react-router-dom";
import luxury_img01 from '../assets/luxury_img01.png'
import luxury_img02 from '../assets/luxury_img02.png'
import luxury_img03 from '../assets/luxury_img03.png'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { propertyData, searchData } from '../Redux/Slice';
import { useDispatch } from 'react-redux';

const images = [luxury_img01, luxury_img02, luxury_img03, luxury_img01, luxury_img02];

function Luxury_carousel() {
  // CAROUSEL
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next4" onClick={onClick}>
        <BsArrowRight className='arrow_next5 ' />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev4" onClick={onClick}>
        <BsArrowLeft className='arrow_prev5' />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "90px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
  // SEND DATA ONE API VALUE IN DETAILS PAGE
  const dispatch = useDispatch()
  const handleProperty = () => {
    axios.get(`http://15.207.132.4/api/properties/search/?location=bangalore`)
      .then((response) => {
        // SetpropertyList(response?.data?.data)
        dispatch(propertyData({ propertyLists: response?.data?.data }))
        dispatch(searchData({ searchLists: [] }))
      })
  }
  return (
    <>
      <section className='mt-5 section006'>
        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-sm-12">
              <h2 className="header-h2 text-center ">Recent Finished Properties</h2>
            </div>

          </div>
          <div className="row">
            <div className="col luxury-carousels">
              <Slider {...settings}>
                {images.map((img, idx) => (
                  <div key={idx} className={idx === imageIndex ? "slides activeSlides" : "slides"}>
                    <img src={img} alt={img} />
                  </div>
                ))}
              </Slider>

            </div>
          </div>
          <div className='container button-top text-center pt-5'>
            <Link to="/properties" onClick={handleProperty} className="booknow-btn button-top align-item-center">See More</Link></div>
        </div>
      </section>
    </>
  )
}


export default Luxury_carousel
