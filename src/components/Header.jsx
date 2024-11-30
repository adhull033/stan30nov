import React, { useState } from 'react'
import axios from 'axios';
// COMPONENTS
import { Nav, Navbar, Container, Modal, Alert, NavDropdown } from 'react-bootstrap';
//IMAGE
import stanlylogo from '../assets/stanly-logo.png'
//
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';


function Header() {

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
		onSubmit: async(values, { setSubmitting, resetForm }) => {
      setLoading(true)

      console.log(values);
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/forms`, {
          data: values
        })

        if(response.status == 200){
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
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" className='navbg'>
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
              <img
                src={stanlylogo}
                width="110"
                height="70"
                className="d-inline-block align-top"
                alt="Stanly Logo"
              />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='navbar text-align-center'>
              <Nav className="mx-auto  nav_links   ">
                <Link to="/" className='nav-link space-align'>Home</Link>
                <Link to="/ourstory" className='nav-link space-align'>About Us</Link>
                <Link to="/properties" className='nav-link space-align'>Projects</Link>
                {/* <NavDropdown title="Service" id="navbarScrollingDropdown" className='space-align'> */}
              {/* <NavDropdown.Item href="/ourstory">
                Tax Adversing
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
              </Nav>
              <Nav className="button-res-nav" >
                <span className='btn-contact-1'>
                  <Nav.Link href="#" onClick={handleShow} className='btn-txt1 '>Get a Home Loan</Nav.Link>
                </span>
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
              </Nav>
              <Nav className="button-res-nav" >
                <span className='btn-contact'>
                  <Nav.Link href="#" onClick={handleShow} className='btn-txt '>Contact Us</Nav.Link>
                </span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header