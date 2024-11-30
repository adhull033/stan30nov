import React from 'react'
// METERIAL UI
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from '@material-ui/lab';

import details_01 from "../assets/details_01.png";
import details_02 from "../assets/details_02.png";
import details_03 from "../assets/details_03.png";
import details_04 from "../assets/details_04.png";
import details_05 from "../assets/details_05.png";
import details_06 from "../assets/details_06.png";
import details_07 from "../assets/details_07.png";
import atmmachine from "../assets/atmmachine.png";
import auditorium from "../assets/auditorium.png";
import badminton from "../assets/badminton.png";
import busstop from "../assets/busstop.png";
import cafe from "../assets/cafe.png";
import cctvcamera from "../assets/cctvcamera.png";
import dumbbell from "../assets/dumbbell.png";
import hospital from "../assets/hospital.png";
import restaurant from "../assets/restaurant.png";
import school from "../assets/school.png";
import shop from "../assets/shop.png";
import slider from "../assets/slider.png";
import swimmingpool from "../assets/swimmingpool.png";
import parkingarea from "../assets/parkingarea.png";


function Detailing_tab() {
    const [detailvalue, setDetailvalue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setDetailvalue(newValue);
    };
    return (
        <>
            <section className='mt-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="content-center_align text-center">
                                <p><span className='details_tab-head01'>Total Price: </span> <span className='details_tab-head02'>₹ 20CR</span></p>
                                <p className='details_tab-para01'>Rent Per Token: <span className='details_tab-para02'>₹ 50,000/year</span></p>
                                <p className='details_tab-para01'>Expected Income: <span className='details_tab-para02'>10.00%</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="row div-center-align">
                        <div className="col-lg-10 col-sm-12">
                            <div >
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={detailvalue} className="detailing-tab_container">
                                        <Box sx={{
                                            color: '#0A243F', backgroundColor: '#FFFFF',
                                            '& .MuiTabs-indicator ': {
                                                // backgroundColor: "#0A243F"
                                                display: 'none'
                                            },
                                            '& .Mui-selected ': {
                                                color: '#FFFFFF',
                                                backgroundColor: '#0A243F'
                                            },
                                        }}>
                                            <TabList onChange={handleChange} variant="scrollable" scrollbuttons="true" allowscrollbuttonsmobile="true" aria-label="Properties Listings Tabs">
                                                <Tab label="Property Details" value="1" className='detailing-tab_label_btn' />
                                                <Tab label="Highlights" value="2" className='detailing-tab_label_btn' />
                                                <Tab label="About" value="3" className='detailing-tab_label_btn' />
                                                <Tab label="Gallery" value="4" className='detailing-tab_label_btn' />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <div className="row ">
                                                <div className="col-12 p-0 bx-shadow-details">
                                                    <div className="detailing_tab-bg">
                                                        <p className='detailing_tab-subhead'>Property Details</p>
                                                    </div>

                                                    <div className='detailing_tab-whitebg'>
                                                        <ul className='unorderlist_cont'>
                                                            <li className=''>RCC framed structure as per IS Codes. Exterior Walls of 8” and Interior Walls of 4” with solid blocks masonry. </li>
                                                            <li>Internal walls with Cement Plaster, Wall Putty and Emulsion Paint.</li>
                                                            <li>Exterior face of the building finished with Cement Plaster and Weather Proof Branded Emulsion Paint. </li>
                                                            <li>Toilet walls finished with Ceramic Tiles up to 7 feet height. </li>
                                                            <li>Living, Dining, Kitchen, Bedroom flooring finished with 2x2 Vitrified Tiles.</li>
                                                            <li>Balcony, Utility and Toilets Floorings will be finished with Anti-Skid Vitrified Tiles.</li>
                                                            <li>Solid wooden main door with Teak wood frames.</li>
                                                            <li>Country wood frames with laminating/painting finished flush doors for bedrooms.</li>
                                                            <li>UPVC windows and glass shutters with fixed grill for all windows and UPVC Ventilator with glass louvers shutters for Toilet Safety and Privacy.</li>
                                                            <li>Kitchen: counter top platform will be fine Granite, Stainless Steel Sink (with Sink Cock) along with convenient electrical points, Provision for Chimney, Fridge, Aqua Guard, Mixer Grinder etc.,</li>
                                                            <li>Branded Quality CP fittings and Electrical fittings in all Toilets. </li>
                                                            <li>Concealed FRLS (Fire Resistant/Smoke) Branded Wires, Switches and Sockets for Safety with 3 phase connections. </li>
                                                            <li>Entire Premises and Common Areas covered by Surveillance Cameras for Safety systems.</li>
                                                            <li>STP and Water Treatment Plants for Better Water Management. </li>
                                                            <li>Adequate Power Supply with DG backup for entire common areas.</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="2">
                                            <div className="row">
                                                <div className="col-12 p-0 bx-shadow-details">
                                                    <div className="detailing_tab-bg">
                                                        <p className='detailing_tab-subhead'>Highlights</p>
                                                    </div>

                                                    <div className='detailing_tab-whitebg'>
                                                        <p className='detais-about_para unterlinehead'>Amenities</p>
                                                        <div className="row row-cols-2 row-cols-md-5 row-cols-lg-5">
                                                            <div className="col ">
                                                                <span><img src={swimmingpool}></img></span> &nbsp; <span className='details-highlight-para'>Swimming Pool</span>
                                                            </div>
                                                            <div className="col"><span><img src={dumbbell}></img></span> &nbsp; <span className='details-highlight-para'>Gym</span></div>
                                                            <div className="col"><span><img src={slider}></img></span> &nbsp; <span className='details-highlight-para'>Play Area</span></div>
                                                            <div className="col"><span><img src={badminton}></img></span> &nbsp; <span className='details-highlight-para'>Badminton Court</span></div>
                                                            <div className="col"><span><img src={auditorium}></img></span> &nbsp; <span className='details-highlight-para'>Party Hall</span></div>
                                                            <div className="col"><span><img src={cctvcamera}></img></span> &nbsp; <span className='details-highlight-para'>Security Cam</span></div>
                                                            <div className="col"><span><img src={parkingarea}></img></span> &nbsp; <span className='details-highlight-para'>Car Parking</span></div>
                                                        </div>
                                                        <p className='detais-about_para mt-3 unterlinehead'>Nearby</p>
                                                        <div className="row row-cols-2 row-cols-md-5 row-cols-lg-5">
                                                            <div className="col ">
                                                                <span><img src={hospital}></img></span> &nbsp; <span className='details-highlight-para'>Hospital</span>
                                                            </div>
                                                            <div className="col"><span><img src={school}></img></span> &nbsp; <span className='details-highlight-para'>School</span></div>
                                                            <div className="col"><span><img src={cafe}></img></span> &nbsp; <span className='details-highlight-para'>Cafeteria</span></div>
                                                            <div className="col"><span><img src={restaurant}></img></span> &nbsp; <span className='details-highlight-para'>Restaurant</span></div>
                                                            <div className="col"><span><img src={shop}></img></span> &nbsp; <span className='details-highlight-para'>Department Store</span></div>
                                                            <div className="col"><span><img src={busstop}></img></span> &nbsp; <span className='details-highlight-para'>Busstop</span></div>
                                                            <div className="col"><span><img src={atmmachine}></img></span> &nbsp; <span className='details-highlight-para'>ATM</span></div>
                                                        </div>
                                                        <p className='detais-about_para mt-3 unterlinehead'>Others</p>
                                                        <ul className='unorderlist_cont'>
                                                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                                            <li>Aliquam tincidunt mauris eu risus.</li>
                                                            <li>Vestibulum auctor dapibus neque.</li>
                                                            <li>Nunc dignissim risus id metus.</li>
                                                            <li>Cras ornare tristique elit.</li>
                                                            <li>Vivamus vestibulum ntulla nec ante.</li>
                                                            <li>Praesent placerat risus quis eros.</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="3">
                                            <div className="row">
                                                <div className="col-12 p-0 bx-shadow-details">
                                                    <div className="detailing_tab-bg">
                                                        <p className='detailing_tab-subhead'>About</p>
                                                    </div>

                                                    <div className='detailing_tab-whitebg'>
                                                        <p className='detais-about_para'>For those looking to buy a residential property, here comes one of the choicest offerings in Coimbatore, at Singanallur . Brought to you by VSK Housing India, VSKs Aira is among the newest addresses for homebuyers. There are apartments for sale in VSKs Aira. This is an under-construction project right now, and is expected to be delivered by Jul, 2024 .</p>
                                                        <p className='detais-about_para'>VSKs Aira Coimbatore is a RERA-registered housing society, which means all projects details are also available on state RERA website for end-users and investors. The RERA registration number of this project is TN/11/Building/0330/2022.</p>
                                                        <p className='detais-about_para'>VSK Housing India is one of the known real estate brands in Coimbatore.The builder has delivered 5 projects so far.</p>
                                                        <p className='detais-about_para'>Read on to know more about must-know features, VSKs Aira Photos, Floor Plans, Payment Plans, Brochure download procedure and other exciting facts about the project.</p>
                                                        <p className='detais-about_para'>Features & Amenities</p>
                                                        <ul className='unorderlist_cont'>
                                                            <li>There are around 109 units on offer.</li>
                                                            <li>VSKs Aira Singanallur housing society has 2 towers with 5 floors.</li>
                                                            <li>VSKs Aira Coimbatore has some great amenities to offer such as Water Softener Plant, Amphitheatre and Vastu Compliant. Ortho One is a popular landmark in Singanallur</li>
                                                            <li>Ortho One is a popular landmark in Singanallur</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel value="4">
                                            <div className="row">
                                                <div className="col-12 p-0 bx-shadow-details">
                                                    <div className="detailing_tab-bg">
                                                        <p className='detailing_tab-subhead'>Gallery</p>
                                                    </div>
                                                    <div className='detailing_tab-whitebg'>
                                                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 p-1-175">
                                                            <div className="col text-center p-3">
                                                                <img src={details_07} className='img-fluid'></img>
                                                            </div>
                                                            <div className="col text-center p-3"><img src={details_06} className='img-fluid'></img></div>
                                                            <div className="col text-center p-3"><img src={details_05} className='img-fluid'></img></div>
                                                            <div className="col text-center p-3"><img src={details_04} className='img-fluid'></img></div>
                                                            <div className="col text-center p-3"><img src={details_03} className='img-fluid'></img></div>
                                                            <div className="col text-center p-3"><img src={details_02} className='img-fluid'></img></div>
                                                            <div className="col text-center p-3"><img src={details_01} className='img-fluid'></img></div>
                                                            <div className="col text-center p-3"><img src={details_04} className='img-fluid'></img></div>
                                                            <div className="col text-center p-3"><img src={details_04} className='img-fluid'></img></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detailing_tab