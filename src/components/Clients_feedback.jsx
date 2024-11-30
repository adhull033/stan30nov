import React from 'react'
import Slider from "react-slick";
import clients01 from '../assets/feedback1.png'
import clients02 from '../assets/feedback2.png'
import clients03 from '../assets/feedback3.png'
import emoji01 from '../assets/emoji01.svg'
import emoji02 from '../assets/emoji02.svg'


import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
// REACT SLICK CAROUSEL
function Clients_feedback() {
  const settingsclients = {
    dots: true,
    speed: 500,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: '40px',
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section>
        <div className="container rel mt-4 pb-5 pt-2 ">

          <img src={emoji01} alt="Clients" className='emojismile01' />
          <div className="row">
            <div className="col">
              <h3 className='header-h2 text-center'>Happy Clients and Feedback</h3>
              <p className='mt-3'></p>
              <Slider {...settingsclients}>
                <div>
                  <div className="bg-clients  h-100">
                    <div className="row d-alignning">
                      <div className="col-4 text-center d-alignning">
                        <img src={clients01} alt="Clients" className='clientimg_size ' />

                      </div>
                      <div className="col-8 ">
                        <h5 className='client_name mb-0'>Felix Nakojah Yenabi</h5>
                        <p className='client_position'>Flemy Tech General Manager</p>
                      </div>
                    </div>
                    <p className='client-para text-justify'>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!.</p>
                    <p><span className='clientsstar'><TiStarFullOutline size={23} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarHalfOutline size={26} /> </span><span className='ratings'>4.2 Ratings</span></p>
                  </div>
                </div>
                {/* SLIDE 2 */}
                <div>
                  <div className="bg-clients  h-100">
                    <div className="row d-alignning">
                      <div className="col-4 text-center d-alignning">
                        <img src={clients02} alt="Clients" className='clientimg_size ' />
                      </div>
                      <div className="col-8 ">
                        <h5 className='client_name mb-0 name1'>Neaj</h5>
                        <p className='client_position name1'>CEO: Neaj innovations  </p>
                      </div>
                    </div>
                    <p className='client-para text-justify'>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!.</p>
                    <p><span className='clientsstar'><TiStarFullOutline size={23} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarHalfOutline size={26} /> </span><span className='ratings'>4.3 Ratings</span></p>
                  </div>
                </div>
                {/* SLIDE 3 */}

                {/* SLIDE 4 */}
                <div>
                  <div className="bg-clients  h-100">
                    <div className="row d-alignning">
                      <div className="col-4 text-center d-alignning">
                        <img src={clients03} alt="Clients" className='clientimg_size  ' />
                      </div>
                      <div className="col-8 ">
                        <h5 className='client_name mb-0'>Elijah Ofori</h5>
                        <p className='client_position'>Project Manager: Neaj Innovations </p>
                      </div>
                    </div>
                    <p className='client-para text-justify'>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!.</p>
                    <p><span className='clientsstar'><TiStarFullOutline size={23} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarHalfOutline size={26} /> </span><span className='ratings'>4.7 Ratings</span></p>
                  </div>
                </div>
                {/* SLIDE 5 */}
                <div>
                  <div className="bg-clients h-100">
                    <div className="row d-alignning">
                      <div className="col-4 text-center d-alignning">
                        <img src={clients02} alt="Clients" className='clientimg_size ' />
                      </div>
                      <div className="col-8 ">
                        <h5 className='client_name mb-0'>Elijah Ofori</h5>
                        <p className='client_position'>Project Manager: </p>
                      </div>
                    </div>
                    <p className='client-para text-justify'>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!.</p>
                    <p><span className='clientsstar'><TiStarFullOutline size={23} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarFullOutline size={26} /> <TiStarHalfOutline size={26} /> </span><span className='ratings'>4.5 Ratings</span></p>
                  </div>
                </div>

              </Slider>
              <img src={emoji02} alt="Clients" className='emojismile02' />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Clients_feedback;