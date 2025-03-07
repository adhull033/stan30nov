import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from '@mui/lab';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Featureluxuryvilla from "./Featureluxuryvilla";
import Featurefurnished from "./Featurefurnished";
import Featuredlist from "./Featuredlist";
import Featuresemifurnished from "./Featuresemifurnished";
import Featurereadytomove from "./Featurereadytomove";
import NoProperty from "./NoProperty";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { propertyData, searchData } from '../Redux/Slice';
import { useDispatch } from 'react-redux';
import "./extra.css"

function Featured_property() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState("Luxury Villa");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        handleFilter(value);
    }, [data, value]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/properties/featured/bangalore?populate=deep&filters[publishedAt][$notNull]=true`);
            setData(response?.data?.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFilter = (filterValue) => {
        const filtered = data.filter((item) => item?.attributes?.status === filterValue);
        setFilteredData(filtered);
    };

    const handleTabChange = (event, selectedTab) => {
        setValue(selectedTab);
        handleFilter(selectedTab);
    };

    const renderItem = (item) => {
        switch (value) {
            case "Luxury Villa":
                return <Featureluxuryvilla filteredData={item} key={item?.id} />;
            case "Furnished":
                return <Featurefurnished filteredData={item} key={item?.id} />;
            case "Unfurnished":
                return <Featuresemifurnished filteredData={item} key={item?.id} />;
            case "Ready to move":
                return <Featurereadytomove filteredData={item} key={item?.id} />;
         case "Under Construction":
                return <Featuredlist filteredData={item} key={item?.id} />
            default:
                return null;
        }
    };

    const items = filteredData.map((item) => (
        <div key={item?.id}>
            {renderItem(item)}
        </div>
    ));

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <BsArrowRightCircle className="arrow_next" />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <BsArrowLeftCircle className="arrow_prev" />
            </div>
        );
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]

    };
    return (
        <>
            <section className="section02 pt-5 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col flex-column text-center">
                            <h2 className="header-h2">Featured Projects</h2>
                            <p className="property-para">
                                Choose your perfect property from the number of options provided by our company.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{
                                        borderBottom: 1, borderColor: 'divider',
                                        '& .MuiTabs-indicator': { backgroundColor: "#0A243F" },
                                        '& .MuiTabs-flexContainer': { justifyContent: 'start' },
                                    }}>
                                        <TabList onChange={handleTabChange} variant="scrollable" scrollbuttons="auto" aria-label="Properties Listings Tabs">
                                            <Tab label="Luxury Villas" value="Luxury Villa" className='muitab_label' />
                                            <Tab label="Ready to Move" value="Ready to move" className='muitab_label' />
                                            <Tab label="Under Construction" value="Under Construction" className='muitab_label' />
                                            <Tab label="Furnished" value="Furnished" className='muitab_label' />
                                            <Tab label="Semi/Unfurnished" value="Unfurnished" className='muitab_label' />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="Luxury Villa" className={`${filteredData?.length > 0 ? "tabslider" : "tabheight"}`}>
                                    <Slider {...settings}>
                                            {
                                                filteredData?.length > 0 ? (
                                                    filteredData?.map((item) => (
                                                        <Featureluxuryvilla filteredData={item} key={item?.id} />
                                                    ))
                                                ):
                                                (
                                                    <NoProperty/>
                                                )
                                            }
                                        </Slider>
                                        {filteredData?.length > 0 && (
                                            <AliceCarousel
                                                items={items}
                                                mouseTracking
                                                infinite
                                                autoPlay
                                                autoPlayInterval={3000}
                                                disableButtonsControls
                                                responsive={{
                                                    0: { items: 1 },
                                                    600: { items: 2 },
                                                    1024: { items: 3 },
                                                }}
                                                // Center the item if there's only one slide
                                                centerMode={filteredData.length === 1}
                                            />
                                        )}
                                    </TabPanel>
                                    <TabPanel value="Furnished" className={`${filteredData?.length > 0 ? "tabslider" : "tabheight"}`}>
                                    <Slider {...settings}>
                                            {
                                                filteredData?.length > 0 ? (
                                                    filteredData?.map((item) => (
                                                        <Featurefurnished filteredData={item} key={item?.id} />
                                                    ))
                                                ):
                                                (
                                                    <NoProperty/>
                                                )
                                            }
                                        </Slider>
                                        {filteredData?.length > 0 && (
                                            <AliceCarousel
                                                items={items}
                                                mouseTracking
                                                infinite
                                                autoPlay
                                                autoPlayInterval={3000}
                                                disableButtonsControls
                                                responsive={{
                                                    0: { items: 1 },
                                                    600: { items: 2 },
                                                    1024: { items: 3 },
                                                }}
                                                // Center the item if there's only one slide
                                                centerMode={filteredData.length === 1}
                                            />
                                        )}
                                    </TabPanel>
                                    <TabPanel value="Under Construction" className={`${filteredData?.length > 0 ?  "tabslider" : "tabheight"}`}>
                                    <Slider {...settings}>
                                            {
                                                filteredData?.length > 0 ? (
                                                    filteredData?.map((item) => (
                                                        <Featuredlist filteredData={item} key={item?.id} />
                                                    ))
                                                ):
                                                (
                                                    <NoProperty/>
                                                )
                                            }
                                        </Slider>
                                    {filteredData?.length > 0 && (
                                            <AliceCarousel
                                                items={items}
                                                mouseTracking
                                                infinite
                                                autoPlay
                                                autoPlayInterval={3000}
                                                disableButtonsControls
                                                responsive={{
                                                    0: { items: 1 },
                                                    600: { items: 2 },
                                                    1024: { items: 3 },
                                                }}
                                                // Center the item if there's only one slide
                                                centerMode={filteredData.length === 1}
                                            />
                                        ) }
                                    </TabPanel>
                                    <TabPanel value="Unfurnished" className={`${filteredData?.length > 0 ? "tabslider" : "tabheight"}`}>
                                    <Slider {...settings}>
                                            {
                                                filteredData?.length > 0 ? (
                                                    filteredData?.map((item) => (
                                                        <Featuresemifurnished filteredData={item} key={item?.id} />
                                                    ))
                                                ):
                                                (
                                                    <NoProperty/>
                                                )
                                            }
                                        </Slider>
                                        {filteredData?.length > 0 && (
                                            <AliceCarousel
                                                items={items}
                                                mouseTracking
                                                infinite
                                                autoPlay
                                                autoPlayInterval={3000}
                                                disableButtonsControls
                                                responsive={{
                                                    0: { items: 1 },
                                                    600: { items: 2 },
                                                    1024: { items: 3 },
                                                }}
                                                // Center the item if there's only one slide
                                                centerMode={filteredData.length === 1}
                                            />
                                        )}
                                    </TabPanel>
                                    <TabPanel value="Ready to move" className={`${filteredData?.length > 0 ? "tabslider" : "tabheight"}`}>
                                    <Slider {...settings}>
                                            {
                                                filteredData?.length > 0 ? (
                                                    filteredData?.map((item) => (
                                                        <Featurereadytomove filteredData={item} key={item?.id} />
                                                    ))
                                                ):
                                                (
                                                    <NoProperty/>
                                                )
                                            }
                                        </Slider>
                                        {filteredData?.length > 0 && (
                                            <AliceCarousel
                                                items={items}
                                                mouseTracking
                                                infinite
                                                autoPlay
                                                autoPlayInterval={30000}
                                                disableButtonsControls
                                                responsive={{
                                                    0: { items: 1 },
                                                    600: { items: 2 },
                                                    1024: { items: 3 },
                                                }}
                                                // Center the item if there's only one slide
                                                centerMode={filteredData.length === 1}
                                            />
                                        ) }
                                    </TabPanel>
                                    {/* Repeat for other TabPanels with corresponding components */}
                                </TabContext>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className='container button-top text-center pt-2'>
                    <Link to="/properties" className='booknow-btn button-top align-item-center'>See More</Link>
                </div>
            </section>
        </>
    );
}

export default Featured_property;
