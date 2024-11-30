import React from 'react'
import whyus_story from '../assets/whyus_story.png'

function Story_whyus() {
    return (
        <>
            <section className='pt-5 pb-3 '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-justify-centers">
                            <div className="whyimg d-flex align-items-center justify-content-center">
                                <img src={whyus_story} className='whyus_story text-center' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 resmt-38">
                            <div>
                                <h2 className='whyushead'>Why Us?</h2>
                                <p className='whyuspara02'>Helping People to get their <br></br> <span className='whyushighlight'>Dream House</span> for more than <br></br> <span className='whyushighlight'>30 years ago.</span></p>
                                <p className='whyuspara002'>Search and find your dream house at affordable prices with the best quality, Only available in <span className='whyushighlight01'>STANLEY ESTATE.</span></p>
                                <div className="row row-cols-2 row-cols-lg-4 ">
                                    <div className="col text-center">
                                        <p className='storycount '>6K+</p>
                                        <p className='supcount whyuspara02'>Premium <br></br>Villas</p>
                                    </div>
                                    <div className="col text-center">
                                        <p className='storycount'>2K+</p>
                                        <p className='supcount whyuspara02'>Happy Customers</p>
                                    </div>
                                    <div className="col text-center">
                                        <p className='storycount'>20+</p>
                                        <p className='supcount whyuspara02'>Award <br></br>Winnings</p>

                                    </div>
                                    <div className="col text-center">
                                        <p><span className='storycount'>24 </span><span className='storycountsup'>Hrs</span></p>
                                        <p className='supcount whyuspara02'>Customer Service</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}

export default Story_whyus