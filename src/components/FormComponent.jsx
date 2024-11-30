import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { MdOutlineCancel } from "react-icons/md";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const FormComponent = ({ show, onHide }) => {

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
        onHide()
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
        onHide()
      }
      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
      resetForm();
    },
  });

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header className='modal-btn' closeButton>
      </Modal.Header>
      <Modal.Body className='button-model'>
        <div className="section-heading">
          <h4>Your New Lifestyle Begins Here</h4>
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
              {isLoading ? <Spinner /> : 'Sign Up Today'}
            </button>
          </div>
          <div className="section-heading pe-4 ps-4">
          <h4>By submitting, you agree to receive project details & relevant offers from Stanley Estates.</h4>
        </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default FormComponent