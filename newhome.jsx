import React from 'react'
import house_structure from "../assets/house-structure.png";
import { Link } from "react-router-dom"
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import svg1 from '../assets/prop.svg'
import svg2 from '../assets/invest.svg'
import svg3 from '../assets/advisor.svg'
import svg4 from '../assets/propm.svg'
import svg5 from '../assets/assist.svg'
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Hero from "./hero";


function New_home() {
    const [slides, setSlides] = useState([]);
    const [slidesPerPage, setSlidesPerPage] = useState(4); // Default is 4 for desktop
    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await axios.get('https://www.api.stanleyestates.in/api/properties?populate=deep');
                // Map the fetched data to get both title and first image of each property
                const fetchedSlides = response.data.data.map(property => {
                    const firstImage = property.attributes.images?.data[0]?.attributes?.url;
                    const title = property.attributes.title;
                    const label = property.attributes.locality;
                    const href = property.attributes.slug;
                    const price = property.attributes.price;
                    const size = property.attributes.Project.Size_Range;
                    const unit = property.attributes.Project.Unit_Variants;

                    if (firstImage) {
                        return {
                            src: `${process.env.REACT_APP_API_URL}${firstImage}`,
                            title: title,
                            label: label,
                            href: href,
                            price: price,
                            size: size,
                            unit: unit
                        };
                    }
                    return null; // If no image, return null
                }).filter(slide => slide !== null); // Remove any null values (in case some properties don't have images)

                setSlides(fetchedSlides); // Update state with fetched slides (image + title)
            } catch (error) {
                console.error("Error fetching images and titles from Strapi API", error);
            }
        };

        fetchSlides(); // Call the function to fetch data

        // Handle window resize
        const updateSlidesPerPage = () => {
            const width = window.innerWidth;
            if (width <= 576) {
                setSlidesPerPage(1); // Mobile: 1 slide per item
            } else if (width <= 991) {
                setSlidesPerPage(2); // Tablet: 2 slides per item
            } else {
                setSlidesPerPage(4); // Desktop: 4 slides per item
            }
        };

        // Set slides per page initially
        updateSlidesPerPage();

        // Add resize event listener to update on window resize
        window.addEventListener('resize', updateSlidesPerPage);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateSlidesPerPage);
    }, []);

    // Add transparent slides if needed to complete the last page
    const addTransparentSlides = () => {
        const totalSlides = slides.length;
        const remainder = totalSlides % slidesPerPage;
        if (remainder > 0) {
            const missingSlides = slidesPerPage - remainder;
            return [...slides, ...Array(missingSlides).fill({ src: 'transparent', title: '' })];
        }
        return slides;
    };

    const slidesWithTransparent = addTransparentSlides(); // Add transparent slides if necessary

    const [isLoading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            message: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Required*';
            }
            if (!values.mobile) {
                errors.mobile = 'Required*';
            } else if (!/^\d{10}$/.test(values.mobile)) {
                errors.mobile = 'Must be exactly 10 digits';
            }
            if (!values.email) {
                errors.email = 'Required*';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Must be valid e-mail';
            }
            if (!values.message) {
                errors.message = 'Required*';
            } else if (values.message.length > 2000) {
                errors.message = 'Must be 2000 characters or less';
            }

            if (Object.keys(errors).length === 0) {
                formik.setStatus({ isSubmitting: true });
            }

            return errors;
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setLoading(true)

            console.log(values);
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/forms`, {
                    data: values
                })

                if (response.status == 200) {
                    setLoading(false)

                    toast.success("Thank You ! We will contact you soon", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                handleClose()
            }
            catch (error) {
                setLoading(false)
                toast.error(`${error?.error?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                handleClose()
            }
            setTimeout(() => {
                setSubmitting(false);
            }, 2000);
            resetForm();
        },
    });


    // MODEL SHOW HIDE 
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleShow = () => setShow(true);


    return (
        <>
            <Hero />
            {/*<section>
                <div className="hero-container">
                    <video autoPlay loop muted playsInline className="background-video">
                        <source src="https://cdn.prod.website-files.com/64f2540e8b0f1c5e18af0c58/64f25f4ced45456795cc4f9d_Summit-Hero-HQ-transcode.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="container_hero-content">
                        <p className="subtitle h2-hero">Luxury Apartments & Villas In Bengaluru</p>
                        <h1 className="title h1-hero">Elevate your lifestyle <br /> with Stanley Estate</h1>
                        <div className="buttons">
                            <a className="booknow-btn button-top align-item-center" href="/properties">View Projects</a>
                            <a className="booknow-btn button-top align-item-center" href="#" onClick={handleShow}>Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>*/}
            <section className='section_feature-welcome'>
                <div className="container_main-content flex-lg-row flex-column-reverse">
                    <div className="two-column-grid">
                        <div className="summit-tower-photo">
                            <img
                                src="https://www.stanleyestates.in/static/media/house-structure.cdf8f5f4e9b6fd166d6d.png" // Replace with the actual image URL
                                alt="Summit Tower Interior"
                                className="imagea"
                            />
                        </div>
                        <div className="container_content-text">
                            <h4 className="h4-heading">Welcome to</h4>
                            <h3 className="h3-headline white">Stanley Estates</h3>
                            <p className="paragraph">
                                Bengaluru's premier RERA-registered luxury real estate advisors. With 12+ years of expertise, we've helped 1000+ clients find their dream homes in the city's finest neighborhoods.
                            </p>
                            <p className="paragraph">
                                Exclusive access to top projects, backed by excellence, integrity, and client satisfaction guarantee.
                            </p>
                            <a href="#" onClick={handleShow} className="booknow-btn button-top align-item-center">Get in touch</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="amenities-section">
                <div className="container_main-content">
                    <div className="heading-two-column flex-lg-row">
                        <div className="container-column-text">
                            <p className="h4-heading">Our Services</p>
                            <h2 className="h3-headline white">Luxury Living, Simplified Solutions</h2>
                            <a href="/properties" className="booknow-btn button-top align-item-center"> Explore projects</a>
                        </div>
                        <div className="container-column-text top-padding">
                            <p className="paragraph">
                                Stanley Estates provides a complete range of luxury real estate services designed to cater to your every need.
                            </p>
                            <p className="paragraph">
                                From expert guidance on purchasing premium homes, apartments, and plots to strategic investment consultations that maximize returns, we ensure a seamless experience.
                            </p>
                        </div>
                    </div>
                    {/*new amenities */}
                    <div className="container-feature-cards flex-lg-row">
                        <div className="container-card-feature">
                            <div className="card-feature">
                                <div className="content-card-feature">
                                    <img src={svg1} loading="lazy" alt="" />
                                    <h4 className="h4_card">Buying Properties</h4>
                                    <p className='paragraph'>Expert guidance on purchasing luxury homes, apartments, and plots.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-card-feature">
                            <div className="card-feature _3">
                                <div className="content-card-feature">
                                    <img src={svg2} loading="lazy" alt="" />
                                    <h4 className="h4_card">Investment Consultation</h4>
                                    <p className='paragraph'>Strategic advice on real estate investments, ensuring maximum returns.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-card-feature">
                            <div className="card-feature _4">
                                <div className="content-card-feature">
                                    <img src={svg3} loading="lazy" alt="" />
                                    <h4 className="h4_card">Advisory Services</h4>
                                    <p className='paragraph'>Specialized support for smooth transactions, including documentation and financing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-card-feature">
                            <div className="card-feature _1">
                                <div className="content-card-feature">
                                    <img src={svg4} loading="lazy" alt="" />
                                    <h4 className="h4_card">Property Management</h4>
                                    <p className='paragraph'>Professional management services for property owners.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-card-feature">
                            <div className="card-feature _2">
                                <div className="content-card-feature">
                                    <img src={svg5} loading="lazy" alt="" />
                                    <h4 className="h4_card">After Sales Assistance</h4>
                                    <p className='paragraph'>Dedicated support beyond transaction closure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end here*/}
                </div>
                <div className="bg-white-bar"></div>
            </section>

            {/*new section */}
            <div className="section_feature-location">
                <div className="container_main-content">
                    <div className="heading-two-column">
                        <div className="container-column-text">
                            <h4 className="h4-heading">Our Story</h4>
                            <h3 className="h3-headline">Luxury Real<br />Estate Excellence</h3>
                            <a href="#" onClick={handleShow} className="booknow-btn button-top align-item-center"> Contact Us</a>
                        </div>
                        <div className="container-column-text top-padding">
                            <p className="paragraph black">
                                Founded on the principles of transparency, reliability, and innovation, Stanley Estates has grown into a respected name in Bengaluru's luxury real estate landscape. Our mission is to provide bespoke solutions, tailored to each client's unique needs and aspirations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="summit-tower-large-image">
                    <div
                        data-poster-url="https://cdn.prod.website-files.com/64f2540e8b0f1c5e18af0c58/64f25bc1590381a017c42ad9_Summit-Hero-poster-00001.jpg"
                        data-video-urls="https://cdn.prod.website-files.com/64f2540e8b0f1c5e18af0c58/64f25bc1590381a017c42ad9_Summit-Hero-transcode.mp4,https://cdn.prod.website-files.com/64f2540e8b0f1c5e18af0c58/64f25bc1590381a017c42ad9_Summit-Hero-transcode.webm"
                        data-autoplay="true"
                        data-loop="true"
                        data-wf-ignore="true"
                        className="bg-video-internal">
                        <video className="bg-video-internal w-background-video w-background-video-atom"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                backgroundImage: "url('https://cdn.prod.website-files.com/64f2540e8b0f1c5e18af0c58/64f25bc1590381a017c42ad9_Summit-Hero-poster-00001.jpg')",
                                objectFit: 'cover'
                            }}
                        >
                            <source
                                src="https://www.api.stanleyestates.in/uploads/1826896_hd_1920_1080_24fps_c9605ff4b7.mp4"
                            />

                        </video>
                    </div>
                </div>
            </div>
            {/* new section*/}
            <div className="section-gallery">
                <div className="container-center-heading">
                    <div className="heading-two-column">
                        <div className="container-column-text">
                            <h4 className="h4-heading">Our Projects</h4>
                            <h3 className="h3-headline black">Choose your <br />perfect property
                            </h3><a
                                href="https://www.stanleyestates.in/properties" className="booknow-btn button-top align-item-center">Explore More</a>
                        </div>
                        <div className="container-column-text top-padding">
                            <p className="paragraph black">
                                Explore our exclusive projects, featuring luxury residences, prime locations, and world-class amenities. Discover your dream home today!
                            </p>
                        </div>
                    </div>
                </div>
                {/* slider*/}
                <Carousel className="z-2" interval={null} indicators={false}>
                    {[...Array(Math.ceil(slidesWithTransparent.length / slidesPerPage))].map((_, pageIndex) => (
                        <Carousel.Item key={pageIndex}>
                            <div className="carousel-slides-container">
                                {slidesWithTransparent.slice(pageIndex * slidesPerPage, (pageIndex + 1) * slidesPerPage).map((slide, idx) => (
                                    <div key={idx} className="carousel-slide">
                                        {slide.src === 'transparent' ? (
                                            <div className="transparent-slide"></div> // Empty space for transparent slide
                                        ) : (
                                            <><a href={`/${slide.href}`} target="blank" className="slide-link">
                                                <img
                                                    src={slide.src}
                                                    alt={`Slide ${pageIndex * slidesPerPage + idx + 1}`}
                                                    className="d-block w-100"
                                                />
                                                <div className="slide-label">{slide.label}</div>
                                                <div className="slide-price">₹{slide.price} <br />Onwards</div>
                                                <div className='slide-description'>
                                                    <div className="slide-title">{slide.title}</div>
                                                    <div className="slide-size">
                                                        <div className="slide1">{slide.unit}</div>
                                                        <div className="slide2">{slide.size}</div>
                                                    </div></div>
                                            </a> {/* Display title */}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="bg-blue-bar"></div>
            </div>
            {/* new section */}
            <div class="section_feature-welcome">
                <div className="container_main-content">
                    <div className="two-column-grid">
                        <div className="container_content-text">
                            <h4 className="h4-heading">Why Choose Us</h4>
                            <h3 className="h3-headline white">Trusted Expertise in Bengaluru Real Estate</h3>
                            <p className="paragraph">
                                <ul>
                                    <li>12+ years of industry expertise</li>
                                    <li>Dedicated customer service</li>
                                    <li>Extensive knowledge of Bengaluru's real estate market</li>
                                    <li>RERA-registered for added security</li>
                                    <li>Proven track record of successful transactions</li>
                                    <li>Personalized approach</li>
                                </ul>
                            </p><a href="#" onClick={handleShow} className="booknow-btn button-top align-item-center">Learn More</a>
                        </div>
                        <div className="summit-tower-photo"><img
                            src="https://cdn.prod.website-files.com/64f2540e8b0f1c5e18af0c58/6503cbf396969ba57495764b_Homepage-Bottom.jpg"
                            loading="lazy"
                            alt="" className="imagea" /></div>
                    </div>
                </div>
            </div>
            {/* new section */}
            <div className="section_call-to-action">
                <div className="container_main-content">
                    <div className="heading_center no-margin">
                        <h3 className="h3-headline white center">Check Our Current Projects</h3>
                        <p className="paragraph center">And start your new life with Stanley Estates, Bengaluru.</p>
                    </div>
                    <div className="container-buttons"><a
                        href="/properties" target="_blank"
                        className="booknow-btn button-top align-item-center">View Projects</a><a href="#" onClick={handleShow} className="booknow-btn button-top align-item-center">Contact Us</a>
                    </div>
                </div>
            </div>

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
        </>
    )
}
export default New_home;