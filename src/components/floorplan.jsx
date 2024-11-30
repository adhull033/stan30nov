import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './floorplan.css';

const Floorplan = ({ mapData, handleShow }) => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <button className="slick-next">
        <i className="fas fa-chevron-right"></i>
      </button>
    ),
    prevArrow: (
      <button className="slick-prev">
        <i className="fas fa-chevron-left"></i>
      </button>
    ),
  };

  return (
    <div className="carousel-container bg-white">
      <Slider {...carouselSettings}>
        {mapData.map((img, index) => (
          <div key={index}>
            <img 
              src={`${process.env.REACT_APP_API_URL}${img?.attributes?.url}`}
              alt={`Property image ${index + 1}`}
              className="w-100"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Floorplan;
