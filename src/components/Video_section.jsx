import React from 'react'
import video_img from '../assets/video_img.png'
import video_img1 from '../assets/play.png'
function Video_section() {
    return (
        <>
            <section className='section009'>
                <div className="container-fluid video pt-5 mt-5">
                    <div className="row">
                        <div className="col p-0 mb-2">
                            <div className='container-fluid'>
                                <img src={video_img} alt="" className='postion1 w-100'/>
                            </div>
                             <img src={video_img1} alt="" className=' video-img'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video_section;