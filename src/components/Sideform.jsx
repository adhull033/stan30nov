import React, { useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import axios from 'axios';
import { Alert } from "react-bootstrap"
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { Spinner } from 'react-bootstrap';

const Sideform = () => {
    const [isLoading, setLoading] = useState(false);

    const formik = useFormik({
          initialValues: {
              name: '',
              email: '',
              mobile: '',
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
            <div className='formFulldiv'>
                <div className='form-head '>
                    <h3 className='form-name'>Find Your Perfect Address</h3>
                </div >
                <div className='bg-white pt-3 pb-1'>
                <form onSubmit={formik.handleSubmit}>
                <div className="form-group bg-white ">
                        <input type="text" 
                        name="name" 
                        onChange={formik.handleChange}
						value={formik.values.name}
                        className="form-control form-place formPlace-text" 
                        placeholder="Enter your Name" 
                       />
                       <span className="valid_info_name text-danger">{formik.errors.name}</span>
                    </div>
                    <div className="form-group">
                        
                        <input type="text" 
                        name="mobile" 
                        className="form-control form-place formPlace-text" 
                        placeholder="Enter your Mobile Number" 
                        onChange={formik.handleChange}
						value={formik.values.mobile}
                        />
                        <span className="valid_info_name text-danger">{formik.errors.mobile}</span>
                    </div>
                    <div className="form-group">
                        <input type="email" 
                        name="email" 
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="form-control form-place formPlace-text" 
                        placeholder="Enter your E-Mail Id" 
                        />
                        <span className="valid_info_name text-danger">{formik.errors.email}</span>
                    </div>
                    {/* <div className="form-check form-check1 mt-4">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to be contacted by Stanley Estate via WhatsApp, SMS, Phone, Email etc.</label>
                    </div> */}
                    <div className='text-center '>
                        <button onClick={formik.handleSubmit} className="form-get-call btn text-center mt-2 mb-3" >
                            <FiPhoneCall className='icons-footer1' />
                            {isLoading ? <Spinner /> : 'Talk to an Expert'}
                            </button>
                    </div>
                    <div className="section-heading1 mb-3 pe-4 ps-4">
                                    <h4 className='mb-2'>By submitting, you agree to receive project details & relevant offers from Stanley Estates.</h4>
                                </div>
                </form> 
                </div>
               
            </div>

        </>
    )
}

export default Sideform