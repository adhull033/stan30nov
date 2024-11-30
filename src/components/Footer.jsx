import React, { useState } from 'react'
import axios from 'axios';
import stanly_logo from '../assets/stanly-logo.png'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiPhoneCall, FiMapPin, FiMail, FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';

function Footer() {
  const [isLoading, setLoading] = useState(false);
  const currentYear = new Date().getFullYear();
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

      }
      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
      resetForm();
    },
  });
  return (
    <>
      <section className='footer1 text-center pt-3'>
        <div className='container '>
          <p className='get-call' ><span><FiPhoneCall className='icons-footer' /></span>Get Call Back</p>
        </div>
      </section>
      <section className='bg-bluefooter mt-5 '>
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
              <img src={stanly_logo} className='' width={200} height={150}></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
              <div className='getul'>
                <h6 className='getintouch'>Get In Touch</h6>
                <p><span><FiMapPin className='icons-footer' /></span>
                  <span className='text-justify '>No. 136,Jal Vayu Towers, NGEF Layout,<br></br> Bayappanahalli,Indiranagar Post, Bengaluru,<br></br>Bengaluru Urban, Karnataka, 560038</span></p>
                <p><span><FiPhoneCall className='icons-footer' /></span><span>+91 96206 75555</span></p>
                <p><span><FiMail className='icons-footer' /></span><span>stanley@stanleyestates.in</span></p>
              </div>

            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
              {/*<h6 className='getintouch'>Send Enquiry</h6>
              <div className="row mb-3">
                <div className="col">
                  <Form.Control placeholder="Full Name" 
                  name="name" 
                  className='input-field'
                  onChange={formik.handleChange}
									value={formik.values.name}
                   autoComplete='off' />
                    <span className="valid_info_message text-danger ">{formik.errors.name}</span>
                </div>
                <div className="col">
                  <Form.Control 
                  placeholder="Phone" 
                  name="mobile" 
                  className='input-field' 
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  autoComplete='off' />
                  <span className="valid_info_message text-danger ">{formik.errors.mobile}</span>
                </div>
              </div>
              <div className='mb-1'>
                <Form.Control placeholder="Email Address" 
                name="email" 
                className='input-field' 
                onChange={formik.handleChange}
								value={formik.values.email}
                autoComplete='off' />
                 <span className="valid_info_message text-danger ">{formik.errors.email}</span>
              </div>
              <div className='mb-1'>
                <Form.Control as="textarea" 
                rows={3} 
                placeholder="Message" 
                name="message" 
                onChange={formik.handleChange}
                value={formik.values.message}
                className='input-field' autoComplete='off' />
                 <span className="valid_info_message text-danger ">{formik.errors.message}</span>
              </div>
              <div>
                <button   onClick={formik.handleSubmit}  className='msb-btn'>
                {isLoading ? <Spinner /> : 'Send a message'}
                  </button>
              </div>*/}
              <div>
                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bangalore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 col-sm-12 col-md-6">
              <div>
                <h6 className='foo-head'>Our Projects - Bangalore | Goa | Chennai</h6>
                {/*<p className='foo-para'>Recent Projects in Bangalore | Recent Projects in Goa | Recent Projects in Chennai</p>*/}
              </div>
              {/*<div>
                <h6 className='foo-head'>Our Villas</h6>
                <p className='foo-para'>Villas in Bangalore | Villas in Goa | Villas in Chennai</p>
              </div>
              <div>
                <h6 className='foo-head'>Our Commercial Projects</h6>
                <p className='foo-para'>Commercial Projects in Bangalore | Commercial Projects in Goa | Commercial Projects in Chennai</p>
              </div>
              <div>
                <h6 className='foo-head'>Our Luxury Apartments</h6>
                <p className='foo-para'>Luxury Apartments in Bangalore | Luxury Apartments in Goa | Luxury Apartments in Chennai</p>
              </div >
              <div>
                <h6 className='foo-head'>
                  <a href='/privacy-policy' style={{ textDecoration: "none", color: 'white' }}>Privacy-Policy</a>
                </h6>
              </div >*/}
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div className='ftsocial'
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              ><a href="https://x.com" target="_blank" rel="noopener noreferrer"><FiFacebook className='icons-footer fticon fticon1' /></a><a href="https://x.com" target="_blank" rel="noopener noreferrer"><FiYoutube className='icons-footer fticon fticon1' /></a><a href="https://x.com" target="_blank" rel="noopener noreferrer"><FiInstagram className='icons-footer fticon fticon1' /></a><a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <FiTwitter className="icons-footer fticon" />
                </a> </div>
            </div>
          </div>
          <div className="row mt-3 footbortop">
            <div className="col mt-2 footcol">
              <p className='foo-para'><span>Stanley Estates</span> <span><AiOutlineCopyrightCircle color='#DCB88B' /></span> <span>{currentYear}. All Rights Reserved.</span></p>
              <h6 className='foo-para fh6'>
                <a href='/privacy-policy' style={{ textDecoration: "none", color: 'white' }}>Privacy-Policy</a>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer