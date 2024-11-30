import React  from 'react'
import house_structure from "../assets/house-structure.png";
import {Link} from "react-router-dom"

function About_us() {
  
    return (
        <>
            <section className='mb-5 pt-5 '>
                <div className="container-fluid sec-bortopbot">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12  p-0 dflex-aligns">
                            <div className='bg-blue05 image11 p-lg-5 p-md-3 p-sm-2'>
                                <h2 className='about-head'>About Us</h2>
                                <p className='col-lg-10 about-para mt-lg-2 text-justify'>
                                At the Stanely Group, we believe the good life isn't a destination, it's a journey. This quest has led us through roads less travelled, uncharted mindscapes and places beyond the common to bring luxury lifestyles that transcend cliches.
                                </p>
                                <p className='col-lg-10 about-para mt-lg-2 text-justify'>
                                Stanely residential properties are future-ready, ahead of time. The design features considered essential today are already in place across Stanely properties and were conceived years ago. This is made possible by our 'Future First' vision. A vision to see where the world is headed and to consistently have the agility to get there.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 sec-bortopbot1 p-0">
                            <img src={house_structure} alt="About" className='img-fluid-fill' />
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}
export default About_us;