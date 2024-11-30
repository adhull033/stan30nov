import React, { useState, useEffect } from 'react'
import { Accordion } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
// METERIAL UI
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from '@mui/lab';
//IMAGES ADD
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
// ICONS
import { BiPlusCircle, BiXCircle } from "react-icons/bi";
import Propertiereadytomove from './Propertiereadytomove';
import Propertieluxuryvilla from './Propertieluxuryvilla';
import Propertieunderconstruction from './Propertieunderconstruction';
import Propertiefurnished from './Propertiefurnished';
import Propertieunfurnished from './Propertieunfurnished';
import { useDispatch, useSelector } from 'react-redux';
import { propertyData, searchData } from '../Redux/Slice';

function Properties_listings() {
    const { propertyList } = useSelector((state) => state.estate)
    const { SearchData } = useSelector((state) => state.estate)

    const [filteredData, setFilteredData] = useState([]);

    const [value, setValue] = useState("Luxury Villa");


    const dispatch = useDispatch()


    // Left side Filters
    const [searchText, setSearchText] = useState('');
    const [MaxSelectedValue, setMaxSelectedValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [bhk, setBhk] = useState("");
    const [checkboxvalue, setCheckboxvalue] = useState([]);
    const [amenitiValue, setamenitiValue] = useState("");
    const [typeValues, setTypeValues] = useState("");
    const [activeButton, setActiveButton] = useState(null);
    const [typeActiveButton, setTypeActiveButton] = useState(null);


    useEffect(() => {
        allfilters(value, searchText, bhk, selectedValue, MaxSelectedValue, amenitiValue);
    }, [value, propertyList, SearchData]);

    

    useEffect(()=>{
        if(SearchData?.length > 0){
            const getstatus = SearchData?.map((item)=>item?.attributes.status)
            setValue(getstatus[0])
        }
        // else if(SearchData?.length < 0){
        //     axios.get(`${process.env.REACT_APP_API_URL}/api/properties?populate=deep`)
        //     .then((response) => {
        //         // SetpropertyList(response?.data?.data)
        //         dispatch(propertyData({ propertyLists: response?.data?.data }))
        //         dispatch(searchData({ searchLists: [] }))
        //     })
        // }
    },[SearchData])

    // TAB
    const handleTabChange = (event, selectedTab) => {
        setValue(selectedTab);
        allfilters(selectedTab, searchText, bhk, selectedValue, MaxSelectedValue, typeValues);
    };

    const searchInputSubmit = () => {
        allfilters(value, searchText, bhk, selectedValue, MaxSelectedValue, typeValues);
    }

    const handleButtonChange = (bhkvalue) => {
        setBhk(bhkvalue);
        setActiveButton(bhkvalue);
        allfilters(value, searchText, bhkvalue, selectedValue, MaxSelectedValue, typeValues);
    }

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        allfilters(value, searchText, bhk, event.target.value, MaxSelectedValue, typeValues);
    };
    const handleMaxSelectChange = (event) => {
        setMaxSelectedValue(event.target.value);
        allfilters(value, searchText, bhk, selectedValue, event.target.value, typeValues);
    };

    const handlePropertyTypes = (typevalue) => {
        setTypeActiveButton(typevalue);
        allfilters(value, searchText, bhk, selectedValue, MaxSelectedValue, typevalue);
    };


    // ALL FILTERS
    const allfilters = (tabvalue, searchvalue, propertyvalue, minvalue, maxvalue, propertytypes) => {
        // let filteredresult = PropertyLists?.filter((item) => item?.attributes?.status === tabvalue);
        let filteredresult =
            propertyList?.length > 0 ? (propertyList?.filter((item) => item?.attributes?.status === tabvalue))
                :
                SearchData?.length > 0 ? (SearchData?.filter((item) => item?.attributes?.status === tabvalue)) : null


        if (searchvalue) {
            filteredresult = filteredresult?.filter((item) => item?.attributes?.locality.toLowerCase().includes(searchvalue.toLowerCase()));

        }
        if (propertyvalue) {
            filteredresult = filteredresult?.filter((item) => parseInt(item?.attributes?.bhk) === parseInt(propertyvalue));
        }
        if (minvalue) {
            filteredresult = filteredresult?.filter((item) => parseInt(item?.attributes?.price) >= parseInt(minvalue));

        }
        if (maxvalue) {
            filteredresult = filteredresult?.filter((item) => parseInt(item?.attributes?.price) <= parseInt(maxvalue));

        }
        if (propertytypes) {
            filteredresult = filteredresult?.filter((item) => item?.attributes?.type === propertytypes);
        }
        setFilteredData(filteredresult);
    }

    const handleClear = ()=>{
        setValue("Luxury Villa")
        dispatch(searchData({ searchLists: [] }))
        axios.get(`${process.env.REACT_APP_API_URL}/api/properties?populate=deep`)
    .then((response) => {
        // SetpropertyList(response?.data?.data)
        dispatch(propertyData({ propertyLists: response?.data?.data }))
    })
    }

    return (
        <>
            <section className='mt-5 mb-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 d-lg-block d-md-block d-sm-none">
                            <div className="left-contents ">
                                <div className="row">
                                    <div className="col mt-5">
                                        <p className='d-flex align-items-center justify-content-between p2-9'><span className='applied_filter'>Applied Filters</span> <span className='clear_all' onClick={()=>{handleClear()}}>Clear All</span></p>
                                    </div>
                                </div>
                                <div className="output-area"></div>
                                <Accordion defaultActiveKey="0" flush>
                                    <div className='location-search'>
                                        <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} className="form-control1 " placeholder="Search your Area" />
                                        <FiSearch className="bold-end" onClick={searchInputSubmit} />

                                    </div >
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='accortian-label'>Bedrooms</Accordion.Header>
                                        <Accordion.Body>
                                            <button onClick={() => { handleButtonChange("2") }} className={activeButton == 2 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >2 BHK <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleButtonChange("3") }} className={activeButton == 3 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >3 BHK <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleButtonChange("4") }} className={activeButton == 4 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >4 BHK <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleButtonChange("5") }} className={activeButton == 5 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >5 BHK <BiPlusCircle className='filder-btn' /></button>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className='accortian-label'>Property Type</Accordion.Header>
                                        <Accordion.Body>
                                            <button onClick={() => { handlePropertyTypes("Residential Apartment") }} className={typeActiveButton == "Residential Apartment" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Apartments <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handlePropertyTypes("Independent Villa") }} className={typeActiveButton == "Independent Villa" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Independent Villa <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handlePropertyTypes("Luxury Villa") }} className={typeActiveButton == "Luxury Villa" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Luxury Villa <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handlePropertyTypes("Plot") }} className={typeActiveButton == "Plot" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Plots <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handlePropertyTypes("Independent House") }} className={typeActiveButton == "Independent House" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Indepentent House<BiPlusCircle className='filder-btn' /></button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className='accortian-label'>Budget</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="row">
                                                <div className="col p-0">
                                                    <select value={selectedValue} onChange={handleSelectChange} className="propety-select-btn">
                                                        <option>Min Budget</option>
                                                        <option value={1000000}>10L</option>
                                                        <option value={2000000}>20L</option>
                                                        <option value={4000000}>40L</option>
                                                        <option value={6000000}>60L</option>
                                                        <option value={8000000}>80L</option>
                                                        <option value={10000000}>1C</option>
                                                        <option value={20000000}>2C</option>
                                                    </select>
                                                </div>
                                                <div className="col p-0">
                                                    <select value={MaxSelectedValue} onChange={handleMaxSelectChange} className="propety-select-btn">
                                                        <option >Max Budget</option>
                                                        <option value={2000000}>20L</option>
                                                        <option value={4000000}>40L</option>
                                                        <option value={6000000}>60L</option>
                                                        <option value={8000000}>80L</option>
                                                        <option value={10000000}>1C</option>
                                                        <option value={20000000}>2C</option>
                                                        <option value={50000000}>5C</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    {/* <Accordion.Item eventKey="4">
                                        <Accordion.Header className='accortian-label'>Amenities</Accordion.Header>
                                        <Accordion.Body>
                                            <button onClick={() => { handleAmenitiesButtonChange("Gym") }} className="properti_filder_btn">Gym<BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleAmenitiesButtonChange("Park") }} className="properti_filder_btn">Park <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleAmenitiesButtonChange("Parking") }} className="properti_filder_btn">Parking <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleAmenitiesButtonChange("ATM") }} className="properti_filder_btn">ATM <BiPlusCircle className='filder-btn' /></button>

                                        </Accordion.Body>
                                    </Accordion.Item> */}
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col">
                                    <h3 className="header-h2 text-sm-center text-lg-start">Property Listings</h3>
                                </div>
                            </div>
                            {/* MOBILE VIEW */}
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 d-lg-none d-md-none d-sm-block">
                                    <div className="left-contents">
                                        <div className="row">
                                            <div className="col">
                                                <p className='d-flex align-items-center justify-content-between p2-9'><span className='applied_filter'>Applied Filters</span> <span className='clear_all'>Clear All</span></p>
                                            </div>
                                        </div>
                                        {/* OUTPUT AREA */}
                                        <div className="output-area">
                                        </div>
                                        <Accordion defaultActiveKey="0" flush>
                                            <div className='location-search'>
                                                <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} className="form-control1 " placeholder="Search your Area" />
                                                <FiSearch className="bold-end" onClick={searchInputSubmit} />

                                            </div >
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header className='accortian-label'>Bedrooms</Accordion.Header>
                                                <Accordion.Body>
                                                    <button onClick={() => { handleButtonChange("2") }} className={activeButton == 2 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >2 BHK <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleButtonChange("3") }} className={activeButton == 3 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >3 BHK <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleButtonChange("4") }} className={activeButton == 4 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >4 BHK <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleButtonChange("5") }} className={activeButton == 5 ? 'properti_filder_btn active-button' : 'properti_filder_btn'} >5 BHK <BiPlusCircle className='filder-btn' /></button>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header className='accortian-label'>Property Type</Accordion.Header>
                                                <Accordion.Body>
                                                    <button onClick={() => { handlePropertyTypes("Residential Apartment") }} className={typeActiveButton == "Residential Apartment" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Apartments <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handlePropertyTypes("Independent Villa") }} className={typeActiveButton == "Independent Villa" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Independent Villa <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handlePropertyTypes("Luxury Villa") }} className={typeActiveButton == "Luxury Villa" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Luxury Villa <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handlePropertyTypes("Plot") }} className={typeActiveButton == "Plot" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Plots <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handlePropertyTypes("Independent House") }} className={typeActiveButton == "Independent House" ? 'properti_filder_btn typeActiveButton' : 'properti_filder_btn'}>Indepentent House<BiPlusCircle className='filder-btn' /></button>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header className='accortian-label'>Budget</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="row">
                                                        <div className="col p-0">
                                                            <select value={selectedValue} onChange={handleSelectChange} className="propety-select-btn">
                                                                <option>Min Budget</option>
                                                                <option value={1000000}>10L</option>
                                                                <option value={2000000}>20L</option>
                                                                <option value={4000000}>40L</option>
                                                                <option value={6000000}>60L</option>
                                                                <option value={8000000}>80L</option>
                                                                <option value={10000000}>1C</option>
                                                                <option value={20000000}>2C</option>
                                                            </select>
                                                        </div>
                                                        <div className="col p-0">
                                                            <select value={MaxSelectedValue} onChange={handleMaxSelectChange} className="propety-select-btn">
                                                                <option >Max Budget</option>
                                                                <option value={2000000}>20L</option>
                                                                <option value={4000000}>40L</option>
                                                                <option value={6000000}>60L</option>
                                                                <option value={8000000}>80L</option>
                                                                <option value={10000000}>1C</option>
                                                                <option value={20000000}>2C</option>
                                                                <option value={50000000}>5C</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header className='accortian-label'>Amenities</Accordion.Header>
                                                <Accordion.Body>
                                                    {/* <button onClick={() => { handleAmenitiesButtonChange("Gym") }} className="properti_filder_btn">Gym<BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleAmenitiesButtonChange("Park") }} className="properti_filder_btn">Park <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleAmenitiesButtonChange("Parking") }} className="properti_filder_btn">Parking <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleAmenitiesButtonChange("ATM") }} className="properti_filder_btn">ATM <BiPlusCircle className='filder-btn' /></button> */}

                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    {/* allowScrollButtonsMobile */}
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <Box sx={{
                                                borderBottom: 1, borderColor: 'divider',
                                                '& .MuiTabs-indicator ': {
                                                    backgroundColor: "#0A243F"
                                                },
                                            }}>
                                                <TabList onChange={handleTabChange} variant="scrollable" scrollbuttons="true" allowscrollbuttonsmobile="true" aria-label="Properties Listings Tabs">
                                                    <Tab label="Luxury Villas" value="Luxury Villa" className='muitab_label1' />
                                                    <Tab label="Ready to Move" value="Ready to move" className='muitab_label1' />
                                                    <Tab label="Under Construction" value="Under Construction" className='muitab_label1' />
                                                    <Tab label="Furnished" value="Furnished" className='muitab_label1' />
                                                    <Tab label="Semi/Unfurnished" value="Unfurnished" className='muitab_label1' />
                                                </TabList>
                                            </Box>
                                            {/* VILLA */}
                                            <TabPanel value="Luxury Villa">
                                                {
                                                    <Propertieluxuryvilla filteredData={filteredData} />
                                                }
                                            </TabPanel>

                                            {/* APARTMENT} */}
                                            <TabPanel value="Ready to move" className='property_tabpanel'>
                                                {
                                                    <Propertiereadytomove filteredData={filteredData} />
                                                }
                                            </TabPanel>

                                            {/* PLOT/LAND */}
                                            <TabPanel value="Under Construction" className='property_tabpanel'>
                                                {
                                                    <Propertieunderconstruction filteredData={filteredData} />
                                                }
                                            </TabPanel>
                                            <TabPanel value="Furnished" className='property_tabpanel'>
                                                {
                                                    <Propertiefurnished filteredData={filteredData} />
                                                }
                                            </TabPanel>

                                            {/* HOLIDAY HOMES */}
                                            <TabPanel value="Unfurnished" className='property_tabpanel'>
                                                {
                                                    <Propertieunfurnished filteredData={filteredData} />
                                                }
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Properties_listings;