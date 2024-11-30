import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Living from "../assets/living.jpg";
import Bedroom from "../assets/Bed room.jpg";
import kids from "../assets/Kids Room.jpg";
import kitchen from "../assets/Kitchen.jpg";
import dining from "../assets/Dining Room.jpg"
import Balcony from "../assets/Balcony.jpg"
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Spinner, Modal } from "react-bootstrap";



function Hero() {
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required*";
      }
      if (!values.mobile) {
        errors.mobile = "Required*";
      } else if (!/^\d{10}$/.test(values.mobile)) {
        errors.mobile = "Must be exactly 10 digits";
      }
      if (!values.email) {
        errors.email = "Required*";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Must be valid e-mail";
      }
      if (!values.message) {
        errors.message = "Required*";
      } else if (values.message.length > 2000) {
        errors.message = "Must be 2000 characters or less";
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/forms`,
          { data: values }
        );

        if (response.status === 200) {
          toast.success("Thank you! We will contact you soon.", {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
          });
        }
        handleClose();
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
      } finally {
        setLoading(false);
        setSubmitting(false);
        resetForm();
      }
    },
  });

  const HeroSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      customPaging: () => <div className="custom-dot"></div>,
    };

    const slides = [
      {
        id: 1,
        p: "We help you find spaces",
        title: "Where laughter echoes and<br> stories unfold!",
        backgroundImage: Living,
      },
      {
        id: 2,
        p: "We find you the perfect",
        title: "Space to snuggle up,<br> unwind, and recharge!",
        backgroundImage: Bedroom,
      },
      {
        id: 3,
        p: "We connect you with homes",
        title: "Where imagination turns walls<br> into adventures!",
        backgroundImage: kids,
      },
      {
        id: 4,
        p: "We help you discover kitchens",
        title: "Where flavors and memories<br> come to life!",
        backgroundImage: kitchen,
      },
      {
        id: 5,
        p:"We match you with dining spaces",
        title: "Where shared meals create<br> lasting bonds!",
        backgroundImage: dining,
      },
      {
        id: 6,
        p:"We bring you closer to balconies",
        title: "Where you soak the sun and<br> gaze at endless blue skies!",
        backgroundImage: Balcony,
      },
    ];

    return (
      <div className="hero-slider">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide a1">
              <img
                src={slide.backgroundImage}
                alt={`Slide ${slide.id}`}
                className="slide-image"
              />
              <div className="color-blur-overlay"></div>
              <div className="slide-content">
                <p className="subtitle h2-hero" dangerouslySetInnerHTML={{ __html: slide.p }}></p>
                <h1 className="title h1-hero" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                <div className="buttons">
                  <a className="booknow-btn button-top align-item-center" href="/properties">View Projects</a>
                  <a className="booknow-btn button-top align-item-center" href="#" onClick={handleShow} >Contact Us</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='modal-btn' closeButton>
          </Modal.Header>
          <Modal.Body className='button-model'>
            <div className="section-heading">
              <h4>Fill this form to get a Entry Ticket to your New Home</h4>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="inputField mt-3 ">
                <input className='enter-name'
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="off"
                />
                <span className="valid_info_name text-danger">{formik.errors.name}</span>
              </div>
              <div className="inputField ">
                <input className='enter-name'
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  id="email"
                  placeholder="Enter Your Email Address"
                  autoComplete="off"
                  required=""
                />
                <span className="valid_info_email text-danger">{formik.errors.email}</span>
              </div>

              <div className="inputField ">
                <input className='enter-name'
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Your Mobile Number"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                />
                <span className="valid_info_message text-danger">{formik.errors.mobile}</span>
              </div>

              <div className="inputField ">
                <textarea
                  className='enter-name name-enter'
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
                <span className="valid_info_message text-danger ">{formik.errors.message}</span>
              </div>

              <div className="inputField btn ">
                <button
                  className="main-gradient-button"
                  onClick={formik.handleSubmit}
                  type='submit'
                >
                  {isLoading ? <Spinner /> : 'Send a message'}
                </button>
              </div>
            </form>
          </Modal.Body>

        </Modal>
        <style jsx>{`
        .hero-slider {
          max-width: 100%;
          margin: auto;
          overflow: hidden;
        }
        .a1 {
          position: relative;
          height: 100vh;
        }
        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
          .color-blur-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(#256bcb69, #252d3869); /* Semi-transparent color */
          z-index: 2;
        } 
        .slide-content {
          position: relative;
          z-index: 3;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align:center;
          height: 100%;
        }   
        
        .slick-dots {
          display: flex !important;
          justify-content: center;
          bottom: 20px;
        }
        .custom-dot {
          width: 30px;
          height: 5px;
          margin: 0 5px;
          background-color: #0a243f;
          transition: background-color 0.3s;
        }
        .slick-dots .slick-active .custom-dot {
          background-color: #DCB88B;
        }
      `}</style>
      </div>
    );
  };
  return <HeroSlider />;
}

export default Hero;