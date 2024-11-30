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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './details.css';
import Slider from 'react-slick';



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
        appendDots: dots => (
            <div>
                <ul className="row mb-3 slick-dots justify-content-center bg-white"> {dots} </ul>
            </div>
        ),
    };
    const videoUrl = detailApi?.attributes?.Video?.data?.attributes?.url;
    const mapsearch = `${detailApi?.attributes?.title}, ${detailApi?.attributes?.address}`;

    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <div className='container details-start'>
                        <p className="cart-head1 ">{detailApi?.attributes?.title}</p>
                        <p><span><img src={location} alt='Details' className='img-fluid '></img></span> &nbsp; <span className='property-cart_para '>{detailApi?.attributes?.address}</span></p>
                        <img src={`${process.env.REACT_APP_API_URL}${detailApi?.attributes?.images?.data[0]?.attributes?.url}`} alt='Details' className='w-100'></img>
                    </div>
                    <h4 className='properties_cart_price properties_cart_price_color text-center mt-5'>STARTING PRICE: ₹{detailApi?.attributes?.price}</h4>
                    <p className='property-para text-center mt-3 '>Property Type : {detailApi?.attributes?.type}</p>
                    <div className='property-div1 mt-5'>
                        <h6 className='property-head'> About </h6>
                    </div >
                    <div className="row detailing_tab-whitebg p-0 pt-3 pb-3">
                        {/* PARA MAP & USE SPACE  */}
                        <p className='detais-about_para'>
                            {detailApi?.attributes?.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        {videoUrl && (
                            <div className='p-3'>
                                <video
                                    controls
                                    src={`${process.env.REACT_APP_API_URL}${videoUrl}`}
                                    alt={`Property video`}
                                    className="w-100 gallery1"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    </div>
                    <div className='c-div mt-5'>
                        <div className='row p-4 p-md-5 justify-content-sm-center'>
                            <div className='col-md-8 col-sm-12 d-flex justify-content-center text-sm-center justify-content-md-start flex-column'><h2 className='mt-2 mt-md-0'>Plan Your Future</h2><h6>Get all the details about the project to make an informed decision!</h6></div>
                            <div className='col-md-4 col-sm-12 d-flex align-items-center justify-content-center mt-1 mt-md-0 mb-1 mb-md-0'><button variant="primary" onClick={handleShow} className='enquirynow_btn '>Download Brochure</button></div>
                        </div>
                    </div>
                    {detailApi?.attributes?.Project && (
                        <div>
                            <div className='property-div1 mt-5'>
                                <h6 className='property-head'>Project Overview</h6>
                            </div>
                            <div className='row bg-white property-row'>
                                <div className='container'>
                                    <div className='row mt-3 p-1 justify-content-center'>
                                        <div className='col-12 d-flex flex-column justify-content-center'>
                                            <table className="table table-striped table-bordered">
                                                <tbody>
                                                    {detailApi?.attributes?.Project?.Type && (
                                                        <tr>
                                                            <td scope="col"><b>Type Of Project:</b></td>
                                                            <td scope="col">{detailApi?.attributes?.Project?.Type}</td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.Location && (
                                                        <tr>
                                                            <td scope="col"><b>Location:</b></td>
                                                            <td scope="col">{detailApi?.attributes?.Project?.Location}</td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.Land_Parcel && (
                                                        <tr>
                                                            <td scope="col"><b>Land Parcel:</b></td>
                                                            <td scope="col">{detailApi?.attributes?.Project?.Land_Parcel}</td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.Structure && (
                                                        <tr>
                                                            <td scope="col"><b>Structure:</b></td>
                                                            <td scope="col" className="text-break">
                                                                <span
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: detailApi?.attributes?.Project?.Structure.replace(/\n/g, '<br />')
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.No_of_Units && (
                                                        <tr>
                                                            <td scope="col"><b>No. of Units:</b></td>
                                                            <td scope="col" className="text-break">
                                                                <span
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: detailApi?.attributes?.Project?.No_of_Units.replace(/\n/g, '<br />')
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.Unit_Variants && (
                                                        <tr>
                                                            <td scope="col"><b>Unit Variants:</b></td>
                                                            <td scope="col" className="text-break">
                                                                <span
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: detailApi?.attributes?.Project?.Unit_Variants.replace(/\n/g, '<br />')
                                                                    }}
                                                                />
                                                            </td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.Size_Range && (
                                                        <tr>
                                                            <td scope="col"><b>Size Range:</b></td>
                                                            <td scope="col">{detailApi?.attributes?.Project?.Size_Range}</td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.Price_Range && (
                                                        <tr>
                                                            <td scope="col"><b>Price Range:</b></td>
                                                            <td scope="col">{detailApi?.attributes?.Project?.Price_Range}</td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.Possession_Date && (
                                                        <tr>
                                                            <td scope="col"><b>Possession Date:</b></td>
                                                            <td scope="col">{detailApi?.attributes?.Project?.Possession_Date}</td>
                                                        </tr>
                                                    )}
                                                    {detailApi?.attributes?.Project?.RERA_No && (
                                                        <tr>
                                                            <td scope="col"><b>RERA No:</b></td>
                                                            <td scope="col" className="text-break">{detailApi?.attributes?.Project?.RERA_No}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='button-close1 text-center mt-3'>
                                <button variant="primary" onClick={handleShow} className='enquirynow_btn '>Enquire Now</button>
                            </div>
                        </div>
                    )}
                    {detailApi?.attributes?.Pricing?.some(item => item?.BHK) && (
                        <div>
                            <div className='property-div1 mt-5'>
                                <h6 className='property-head'>Property & Pricing Details</h6>
                            </div>
                            <div className='row bg-white property-row'>
                                {/* PROPERTY DETAILS MAP 
                        {detailApi?.attributes?.property_details?.map((items, i) => (
                            <div key={i} className='col-lg-6 '>
                                <p className='d-flex justify-content-between property-paragraph'><span className='property-span'>{items?.attribute}</span> <span className='property-span1'> {items?.value}</span></p>
                            </div>
                        ))}*/}
                                <div className='container'>
                                    <div className='row mt-3 p-1 justify-content-center'>
                                        <div className='col-12 d-flex flex-column justify-content-center'>
                                            <table className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">BHK</th>
                                                        <th scope="col">Size</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {detailApi?.attributes?.Pricing?.map((items1, i) => (
                                                        <tr key={i}>
                                                            <td>{items1?.BHK}</td>
                                                            <td>{items1?.Size}</td>
                                                            <td>{items1?.Price}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='button-close1 text-center mt-3'>
                                <button variant="primary" onClick={handleShow} className='enquirynow_btn '>Get Price Breakup & Payment Plan</button>
                            </div>
                        </div>
                    )}
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
                            <img onClick={handleShow} key={index} src={`${process.env.REACT_APP_API_URL}${img?.attributes?.url}`} alt='Property gallery' className='image gallery1 mt-3' />
                        ))}
                        <div className='pageMore mb-3' onClick={() => setOpen(true)}>
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
                    {detailApi?.attributes?.map?.data?.length > 0 && (
                        <div>
                            <div className="property-div1 mt-5">
                                <h6 className="property-head">Master & Floor Plans</h6>
                            </div>
                            <div className="row carousel-container bg-white">
                                <Slider className="mb-3 pb-5" {...carouselSettings}>
                                    {detailApi.attributes.map.data.map((img, index) => (
                                        <div key={index}>
                                            <img
                                                onClick={handleShow}
                                                src={`${process.env.REACT_APP_API_URL}${img?.attributes?.url}`}
                                                alt={`Floorplan image ${index + 1}`}
                                                className="img-carousel w-100"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    )}

                    <div className='c-div mt-5'>
                        <div className='row p-4 p-md-5 justify-content-sm-center'>
                            <div className='col-md-8 col-sm-12 d-flex justify-content-center text-sm-center justify-content-md-start flex-column'><h2 className='mt-2 mt-md-0'>Book your Site Visit Now!</h2><h6>Visit the site & see if your requirements are matching!</h6></div>
                            <div className='col-md-4 col-sm-12 d-flex align-items-center justify-content-center mt-1 mt-md-0 mb-1 mb-md-0'><button variant="primary" onClick={handleShow} className='enquirynow_btn '>Book Now</button></div>
                        </div>
                    </div>
                    {detailApi?.attributes?.amenities?.length > 0 && (
                        <div className="row">
                            <div className="property-div mt-4">
                                <h6 className="property-head c-head">Highlights</h6>
                            </div>
                            <div className="detailing_tab-whitebg">
                                <div className="row">
                                    <h6 className="unterlinehead mb-3">Amenities</h6>
                                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4">
                                        {detailApi.attributes.amenities.map((items, i) => (
                                            <div key={i} className="col d-flex">
                                                <span className="pe-2">
                                                    <i className="fas fa-arrow-circle-right c-icon"></i>
                                                </span>
                                                <p className="detais-about_para fw-normal mb-1">
                                                    {items.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <p className='detais-about_para mt-3 unterlinehead'>Nearby</p>
                            <div className="row row-cols-2 row-cols-md-5 row-cols-lg-5">
                                {/* NEARBY MAP 
                                {detailApi?.attributes?.nearby?.map((items, i) => (
                                    <div key={i} className="marign-para" >
                                        <span><img src={`${process.env.REACT_APP_API_URL}${items?.icon?.data?.attributes?.url}`} alt='Nearby icon'></img></span> &nbsp; <span className='details-highlight-para'>{items?.attribute}</span>
                                    </div>
                                ))
                                }
                            </div> */}
                    {/* <h6 className='unterlinehead mb-3 mt-3'>Others</h6>
                            <p className='detais-about_para'>
                                {/* PARA MAP & USE SPACE  
                                {detailApi?.attributes?.other.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>  */}
                    {/* <ul className='unorderlist_cont'>
                                <li>{detailApi?.attributes?.other}</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                                <li>Nunc dignissim risus id metus.</li>
                                <li>Cras ornare tristique elit.</li>
                                <li>Vivamus vestibulum ntulla nec ante.</li>
                                <li>Praesent placerat risus quis eros.</li>
                            </ul> */}
                    <div className='row'>
                        <div className='property-div mt-5'>
                            <h6 className='property-head c-head'> Unbeatable Location </h6>
                        </div >
                        <div className='detailing_tab-whitebg'>
                            {/* PARA MAP & USE SPACE  
                           <p className='detais-about_para'>
                                {detailApi?.attributes?.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>*/}

                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                {detailApi?.attributes?.Nearby?.Educational?.length > 0 && (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                EDUCATIONAL INSTITUTES
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <div>
                                                    {detailApi?.attributes?.Nearby?.Educational?.map((items1, i) => (
                                                        <div key={i} className='d-flex'>
                                                            <span className='pe-2'><i className="fas fa-arrow-circle-right c-icon"></i> </span>
                                                            <p className='detais-about_para fw-normal mb-2'> {items1.Name}</p>
                                                            <br />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {detailApi?.attributes?.Nearby?.CONNECTIVITY?.length > 0 && (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                CONNECTIVITY
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <div>
                                                    {detailApi?.attributes?.Nearby?.CONNECTIVITY?.map((items1, i) => (
                                                        <div key={i} className='d-flex'>
                                                            <span className='pe-2'><i className="fas fa-arrow-circle-right c-icon"></i> </span>
                                                            <p className='detais-about_para fw-normal mb-2'> {items1.Name}</p>
                                                            <br />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                  {detailApi?.attributes?.Nearby?.HOSPITAL?.length > 0 && (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                HOSPITALS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <div>
                                                    {detailApi?.attributes?.Nearby?.HOSPITAL?.map((items1, i) => (
                                                        <div key={i} className='d-flex'>
                                                            <span className='pe-2'><i className="fas fa-arrow-circle-right c-icon"></i> </span>
                                                            <p className='detais-about_para fw-normal mb-2'> {items1.Name}</p>
                                                            <br />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  )}
                                 {detailApi?.attributes?.Nearby?.Mall?.length > 0 && (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                MALLS AND ENTERTAINMENTS HUB
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <div>
                                                    {detailApi?.attributes?.Nearby?.Mall?.map((items1, i) => (
                                                        <div key={i} className='d-flex'>
                                                            <span className='pe-2'><i className="fas fa-arrow-circle-right c-icon"></i> </span>
                                                            <p className='detais-about_para fw-normal mb-2'> {items1.Name}</p>
                                                            <br />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                 {detailApi?.attributes?.Nearby?.ITPARKS?.length > 0 && (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                IT PARKS
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <div>
                                                    {detailApi?.attributes?.Nearby?.ITPARKS?.map((items1, i) => (
                                                        <div key={i} className='d-flex'>
                                                            <span className='pe-2'><i className="fas fa-arrow-circle-right c-icon"></i> </span>
                                                            <p className='detais-about_para fw-normal mb-2'> {items1.Name}</p>
                                                            <br />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="mapouter mt-4 mb-4 p-2"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${encodeURIComponent(mapsearch)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}></iframe></div></div>
                        </div>

                        <div className='button-close1 text-center mt-5'>
                            <button variant="primary" onClick={handleShow} className='enquirynow_btn '>Enquire Now</button>
                        </div>
                        {/* FORM MODEL */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header className='modal-btn' closeButton>
                            </Modal.Header>
                            <Modal.Body className='button-model'>

                                <div className="section-heading">
                                    <h4>Your New Lifestyle Begins Here</h4>
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
                                </form>
                                <div className="inputField btn pt-3">
                                    <button className="main-gradient-button" onClick={formik.handleSubmit}>
                                        {isLoading ? <Spinner /> : 'Sign Up Today'}
                                    </button>
                                </div>
                                <div className="section-heading pe-4 ps-4">
                                    <h4>By submitting, you agree to receive project details & relevant offers from Stanley Estates.</h4>
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

export default Detailedpage;