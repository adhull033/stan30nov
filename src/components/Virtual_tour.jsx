import React from 'react'
import axios from 'axios';
import { propertyData, searchData } from '../Redux/Slice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
function Virtual_tour() {
    const dispatch = useDispatch()
    // 
    const handleProperty = () => {
        axios.get(`http://15.207.132.4/api/properties/search/?location=bangalore`)
            .then((response) => {
                // SetpropertyList(response?.data?.data)
                dispatch(propertyData({ propertyLists: response?.data?.data }))
                dispatch(searchData({ searchLists: [] }))
            })
    }
    return (
        <>
            <section className='section03 pt-5 '>
                <div className="container">
                    <div className="row  overDiv ">

                        <div className="col-lg-5 overlay">
                            <Link to="/properties" onClick={handleProperty} className='ul-none'>
                                <p className='full_furnish'>Full Furnished Property  <AiOutlineArrowRight /></p> 
                            </Link>
                        </div>

                        <div className="col-lg-3 overlay1">
                            <Link to="/properties" onClick={handleProperty} className='ul-none'>
                                <p className='full_furnish'>Ready to Moves <AiOutlineArrowRight /></p>  
                            </Link>
                        </div>
                        <div className="col-lg-3 overlay2">
                            <Link to="/properties" onClick={handleProperty} className='ul-none'>
                                <p className='full_furnish'>Under Construction <AiOutlineArrowRight /></p>  
                            </Link>
                        </div>
                    </div>
                    <div className="row bg-white full_furishe pt-5">
                        <div className="col-lg-3 overlay3">
                            <Link to="/properties" onClick={handleProperty} className='ul-none'>
                                <p className='full_furnish'>Semifurnished <AiOutlineArrowRight /></p>  
                            </Link>
                        </div>
                        <div className="col-lg-3 overlay4">
                            <Link to="/properties" onClick={handleProperty} className='ul-none'>
                                <p className='full_furnish'>Unfurnished <AiOutlineArrowRight /></p>  
                            </Link>
                        </div>
                        <div className="col-lg-5 overlay5">
                            <Link to="/properties" onClick={handleProperty} className='ul-none'>
                                <p className='full_furnish'>Upcoming Properties <AiOutlineArrowRight /></p>  
                            </Link>
                        </div>
                    </div>
                </div>
            </section> </>
    )
}

export default Virtual_tour