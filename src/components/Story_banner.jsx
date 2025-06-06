import React from 'react'
import wp from "../assets/watsappicon.png";
import wp1 from "../assets/call.png";
function Story_banner() {
  return (
    <>
<section className='bg-storybanner'>
    <div className="container">
        <div className="row d-conten-center tex-center ">
            <div className="col-lg-7 col-md-8 col-sm-12">
                <div>
                <span className='story_head'>Anywhere, Anytime, <br /> Anyplace </span>
                <span className='story_smlhead'> you can book </span> <br />
                <span className='story_head'> <span  className='text-white1 '>your  </span>Dream Home!</span>
                </div>
               
            </div>
        </div>
    </div>
    <a href="/wp" target="_blank" className="wtbtn  btn-circle  fixedbutton-whatsapp1" id="webcall" role="button" type="button">
                    <i className="fa fa-whatsapp"></i>
                    <img src={wp} alt="watsapp icon" className="wapp-wh"/>
                </a>
                <a href="tel:+919620675555" className="wtbtn  btn-circle  fixedbutton-whatsapp1" id="call" role="button" type="button">
          <img src={wp1} alt="call icon" className="wapp-wh1" />
        </a>
</section>
    </>
  )
}

export default Story_banner