import React from "react";
import location_icon from "../assets/location-icon.png";
import feature_icon01 from "../assets/feature_icon01.png";
import feature_icon02 from "../assets/feature_icon02.png";
import feature_icon03 from "../assets/feature_icon03.png";
import feature_icon04 from "../assets/feature_icon04.png";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Link } from 'react-router-dom'

const Featurefurnished = ({ filteredData }) => {
  // const DetailsApi = (id) => {
  //   console.log(id);
  // }
  return (
    <>

      <div >
        <div className="bg-blue02">
          <div>
            <img
              src={`${process.env.REACT_APP_API_URL}${filteredData?.attributes?.images?.data[0]?.attributes?.url}`}
              alt="Featured property" className="cart-img-fluid imgbor-radius"
            />
            <div className="icon-set">
              <img
                src={`${process.env.REACT_APP_API_URL}${filteredData?.attributes?.brand_icon?.data?.attributes?.url}`}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt="Featured property" className="featurebrand_icon1"
              />
            </div>
          </div>
          <div className="cart-contents">
            <p className="cart-head pe-4">{filteredData?.attributes?.title}</p>
            <p>
              <span>
                <img
                  src={location_icon}
                  alt="Featured property" width={"18"}
                  height={"18"}
                  className="location-icon"
                />
              </span>
              <span className="cart-para">
                {filteredData?.attributes?.address}.
              </span>
            </p>
            <div className="row row-cols-2 row-cols-lg-4">
              <div className="col text-center">
                <img
                  src={feature_icon01}
                  alt="Featured property" className="img-size01"
                />
                <p className="cart-suptext">{filteredData?.attributes?.features?.bedroom} Bedrooms</p>
              </div>
              <div className="col text-center">
                <img
                  src={feature_icon02}
                  alt="Featured property" className="img-size01"
                />
                <p>{filteredData?.attributes?.features?.bathroom} Bathrooms</p>
              </div>
              <div className="col text-center">
                <img
                  src={feature_icon03}
                  alt="Featured property" className="img-size01"
                />
                <p className="cart-suptext">{filteredData?.attributes?.features[0]?.swimming_pool || 0} Swimingpool</p>
              </div>
              <div className="col text-center">
                <img
                  src={feature_icon04}
                  alt="Featured property" className="img-size01"
                />
                <p className="cart-suptext">{filteredData?.attributes?.sqft} sq.ft</p>
              </div>
            </div>
            {/*  */}
            <div className="row">
              <div className="col">
                <p className="cart-price">
                  <FaRupeeSign />
                  {filteredData?.attributes?.price}
                </p>
              </div>
              <div className="col  text-center">
                {/* onClick={DetailsApi(filteredData?.id)} */}
                {/* REDIRECT THE DATAS FOR DETAILS PAGE */}
                <button className="detail-cart-link" >
                  < Link to={`/${filteredData?.attributes?.slug}`} className='cart-link' >
                    More Details
                  </Link>
                  <AiOutlineArrowRight />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featurefurnished