import React from 'react'
import Amenties_group01 from '../assets/Amenties_group01.png'
import Amenties_group02 from '../assets/Amenties_group02.png'

function Amenities() {
    return (
        <>
            <section>
                <div className="container mt-5 mb-3">
                    <div className="row amenties-row">
                        <div className="col-lg-6 col-md-6  col-sm-12 p-lg-3">
                            <div className="image-container rel">
                                <img src={Amenties_group02} alt="" className='Amenties_group02 left-align-img' />
                                <img src={Amenties_group01} alt="" className='img-fluid-80 ' />
                                <img src={Amenties_group02} alt="" className='Amenties_group02 right-align-img' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 p-lg-3">
                            <h3 className='amenties-head'>Amenities</h3>
                            <div className="row row-cols-3 row-cols-md-3 row-cols-lg-3 bg-amenities">

                                <div className="col ">
                                    <div className="bg-amenities01">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para '>Tennis <br></br>Court </p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities02">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Swimming <br></br>Pool</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities03">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Childrens <br></br>Play Area</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities04">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Gym <br></br>Meditations</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities05">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Library</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities06 ">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Guest <br></br>Room</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities07">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Home <br></br>Theater</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities08">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Liquor <br></br>Bar</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-amenities09">
                                        <span className='text-center rel-txt'>
                                            <p className='amenities-para'>Grocery <br></br>Shop</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="submit" className="booknow-btn">
                                        Explore Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Amenities