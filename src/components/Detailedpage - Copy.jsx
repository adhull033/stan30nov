import React, { useState } from 'react'
import axios from 'axios';
import { Alert } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import location from "../assets/location.svg";
import Sideform from './Sideform';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';

const Detailedpage = ({ detailApi }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const [isLoading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    // FORM DATAS GET & POST API
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
    // IMAGE SHOW & HIDE STATES 
    const [show, setShow] = useState(false);
    const [findImg, setFindImg] = useState();
    const [imgModal, setImgModal] = useState();
    // IMAGE SHOW & HIDE FUNCTION
    const handleClose = () => {
        setShow(false);
        setImgModal(false);
    }
    const handleShow = () => setShow(true);
    // const handleImg = (id) => {
    //     setFindImg(detailApi?.attributes?.images?.data?.find(img => img.id === id));
    //     console.log(findImg);
    //     setImgModal(true)
    // }
    // IMAGE CAROUSEL
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        console.log("index", index);
    };
    const handleCloseCarousel = () => {
        setSelectedImageIndex(null);
    };
    const slides = detailApi?.attributes?.images?.data?.map((img, index) => ({
        src: `${process.env.REACT_APP_API_URL}${img?.attributes?.url}`,
    }));

    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <div className='container details-start'>
                        <p className="cart-head1 ">{detailApi?.attributes?.title}</p>
                        <p><span><img src={location} alt='Details' className='img-fluid '></img></span> &nbsp; <span className='property-cart_para '>{detailApi?.attributes?.address}</span></p>
                        <img src={`${process.env.REACT_APP_API_URL}${detailApi?.attributes?.images?.data[0]?.attributes?.url}`} alt='Details' className='w-100'></img>
                    </div>
                    <h4 className='properties_cart_price properties_cart_price_color text-center mt-5'>TOTAL PRICE: ₹{detailApi?.attributes?.price}</h4>
                    <p className='property-para text-center mt-3 '>Property Type : {detailApi?.attributes?.type}</p>
                    <div className='row bg-white property-row mt-5 pb-4'>
                        <div className='property-div'>
                            <h6 className='property-head'>Property Details</h6>
                        </div>
                        {/* PROPERTY DETAILS MAP */}
                        {detailApi?.attributes?.property_details?.map((items, i) => (
                            <div key={i} className='col-lg-6 '>
                                <p className='d-flex justify-content-between property-paragraph'><span className='property-span'>{items?.attribute}</span> <span className='property-span1'> {items?.value}</span></p>
                            </div>
                        ))}
                    </div>
                    <div className='property-div1 mt-5'>
                        <h6 className='property-head'> Gallery </h6>
                    </div >
                    {/* GALLERY MAP */}
                    {/* <Modal show={imgModal} onHide={handleClose} className='modal-btn' >
                        <Modal.Header className='modal-btn modal-bg-btn' closeButton>
                        </Modal.Header>
                        <Modal.Body >
                            <img src={`${process.env.REACT_APP_API_URL}${findImg?.attributes?.url}`} alt='Property' className='model-image1' />
                        </Modal.Body>
                    </Modal> */}
                    <div className='row row-cols-1 row-cols-lg-4 bg-white'>
                        {detailApi?.attributes?.images?.data?.slice(0, 3).map((img, index) => (
                            <img key={index} src={`${process.env.REACT_APP_API_URL}${img?.attributes?.url}`} alt='Property gallery' className='image gallery1 mt-3' data-bs-toggle="modal" onClick={() => handleImageClick(index)} />
                        ))}
                        <div className='pageMore' onClick={() => setOpen(true)}>
                            <h6>More Images</h6>
                            <BsArrowRightCircle />
                        </div>
                    </div>
                    {
                        open && (
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                slides={slides}
                            />
                        )
                    }
                    {/* {selectedImageIndex !== null && (
                        <div className="image-carousel">
                            <span className="close-button" onClick={handleCloseCarousel}>
                                Close
                            </span>
                            <img
                                className="carousel-image"
                            />
                        </div>
                    )} */}

                    <div className='row'>
                        <div className='col-lg-12 detail-img-1 bg-white'></div>
                        <div className="detailing_tab-bg mt-5 ">
                            <p className='detailing_tab-subhead property-head'>Highlights</p>
                        </div>

                        <div className='detailing_tab-whitebg'>
                            <p className='detais-about_para unterlinehead'>Amenities</p>
                            <div className="row row-cols-2 row-cols-md-5 row-cols-lg-5">
                                {/* AMENITIES MAP */}
                                {detailApi?.attributes?.amenities?.map((items, i) => (
                                    <div key={i} className="marign-para ">
                                        <span><img src={`${process.env.REACT_APP_API_URL}${items?.icon?.data?.attributes?.url}`} alt='Amenities icon'></img></span> &nbsp; <span className='details-highlight-para '>{items?.text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className='detais-about_para mt-3 unterlinehead'>Nearby</p>
                            <div className="row row-cols-2 row-cols-md-5 row-cols-lg-5">
                                {/* NEARBY MAP */}
                                {detailApi?.attributes?.nearby?.map((items, i) => (
                                    <div key={i} className="marign-para" >
                                        <span><img src={`${process.env.REACT_APP_API_URL}${items?.icon?.data?.attributes?.url}`} alt='Nearby icon'></img></span> &nbsp; <span className='details-highlight-para'>{items?.attribute}</span>
                                    </div>
                                ))
                                }
                            </div>
                            <p className='detais-about_para mt-3 unterlinehead'>Others</p>
                            <p className='detais-about_para'>
                                {/* PARA MAP & USE SPACE  */}
                                {detailApi?.attributes?.other.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                            {/* <ul className='unorderlist_cont'>
                                <li>{detailApi?.attributes?.other}</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Nunc dignissim risus id metus.</li>
                                <li>Cras ornare tristique elit.</li>
                                <li>Vivamus vestibulum ntulla nec ante.</li>
                                <li>Praesent placerat risus quis eros.</li>
                            </ul> */}
                        </div>
                        <div className="detailing_tab-bg mt-5">
                            <p className='detailing_tab-subhead text-center'>About</p>
                        </div>

                        <div className='detailing_tab-whitebg'>
                            {/* PARA MAP & USE SPACE  */}
                            <p className='detais-about_para'>
                                {detailApi?.attributes?.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>

                        <div className='button-close1 text-center mt-5'>
                            <button variant="primary" onClick={handleShow} className='enquirynow_btn '>Enquiry Now</button>
                        </div>
                        {/* FORM MODEL */}
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
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="Enter Your Name"
                                            autoComplete="off" required=""
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                        <span className="valid_info_name text-danger">{formik.errors.name}</span>
                                    </div>

                                    <div className="inputField ">
                                        <input className='enter-name'
                                            type="Email" name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            id="emailaddress"
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
                                            id="phonenumber"
                                            placeholder="Enter Your Mobile Number"
                                            autoComplete="off" required=""
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
                                        <span className="valid_info_message text-danger">{formik.errors.message}</span>
                                    </div>
                                </form>


                                <div className="inputField btn ">
                                    <button className="main-gradient-button" onClick={formik.handleSubmit}>
                                        {isLoading ? <Spinner /> : 'Send a message'}
                                    </button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
                <div className="col-lg-4 mt-5 ">
                    <Sideform />
                </div>
            </div>
        </>
    )
}

export default Detailedpage