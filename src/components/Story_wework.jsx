import React from 'react'
import wework01 from "../assets/wework01.png";
import wework02 from "../assets/wework02.png";
import wework03 from "../assets/wework03.png";
import wework04 from "../assets/wework04.png";
// 
import arrow_line from "../assets/arrow-team.png";
import arrow_line02 from "../assets/arrow-team 2.png";
import line from "../assets/Line 1.png";
import line2 from "../assets/Line 2.png";

import line3 from "../assets/Line 3.png";


function Story_wework() {
    return (
        <>
            <section className='bg-wework mb-3 pt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col mt-4 ">
                            <h2 className='bg-wework-head text-center'> <img src={line3} alt='story' className='arrowlines ' ></img>
                                <img src={line2} alt='story' className='arrowlines1' ></img>
                                <img src={line} alt='story' className='arrowlines2' ></img> How we work</h2>
                        </div>

                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ptb-4">
                        <div className="col rel txt-center-res">
                            <div >
                                <img src={arrow_line} alt='story' className="arrow_lines"></img>
                            </div>
                            <img src={wework02} alt='story '  className="img-fluid wework-line01"></img>
                            <p className='wework-paras mt-3'>Easy Booking System</p>
                        </div>
                        <div className="col rel txt-center-res">
                            <div >
                                <img src={arrow_line02} alt='story' className="arrow_lines02" />
                            </div>
                            <img src={wework03} alt='story' className="img-fluid"></img>
                            <p className='wework-paras mt-1'>Property Insurance</p>
                        </div>
                        <div className="col rel txt-center-res">
                            <div >
                                <img src={arrow_line} alt='story' className="arrow_lines"></img>
                            </div>
                            <img src={wework04} alt='story ' className="img-fluid wework-line01"></img>
                            <p className='wework-paras mt-3'>No Hidden Cost</p>
                        </div>
                        <div className="col txt-center-res">
                            <img src={wework01} alt='story' className="img-fluid"></img>
                            <p className='wework-paras mt-2'>24x7 Customer Support</p>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Story_wework