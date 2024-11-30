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
import { propertyData } from '../Redux/Slice';

function Detail_Testing() {
    const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState("Luxury Villa");


    const dispatch = useDispatch()
    const { propertyList } = useSelector((state) => state.estate)
    const { SearchData } = useSelector((state) => state.estate)

    // console.log("searchData",SearchData?.length);
    console.log("PropertyList", propertyList?.length);

    // Left side Filters
    const [searchText, setSearchText] = useState('');
    const [MaxSelectedValue, setMaxSelectedValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [bhk, setBhk] = useState("");
    const [checkboxvalue, setCheckboxvalue] = useState([]);
    const [amenitiValue, setamenitiValue] = useState("");


    //Property page

    // const { state } = useLocation();
    // console.log("state", state);
    // console.log("state?.data?.data", state?.data?.data);  //API VAlue

    useEffect(() => {
        // handleFilter(value);
        allfilters(value, searchText, bhk, selectedValue, MaxSelectedValue, amenitiValue);
    }, [value, propertyList, SearchData]);

    // console.log(process.env.REACT_APP_API_URL);

    // useEffect(()=>{
    //     axios.get(`http://15.207.132.4/api/properties/search/?location=bangalore`)
    //     .then((response)=>{
    //         // SetpropertyList(response?.data?.data)
    //         dispatch(propertyData({propertyLists:response?.data?.data}))
    //     })
    // },[])

    // console.log("filteredData", filteredData);
    const handleFilter = (filterValue) => {
        const filtered = propertyList.length > 0 ?
            (propertyList?.filter((item) => item?.attributes?.status === filterValue))
            :
            (SearchData?.filter((item) => item?.attributes?.status === filterValue))
        setFilteredData(filtered);
    };
    // TAB
    const handleTabChange = (event, selectedTab) => {
        setValue(selectedTab);
        // console.log("selectedTab", selectedTab);
        allfilters(selectedTab, searchText, bhk, selectedValue, MaxSelectedValue, amenitiValue);
        // handleFilter(selectedTab);
    };
    // -------------------------------------------------------------------------------
    const searchInputSubmit = () => {
        // console.log("searchText", searchText);
        allfilters(value, searchText, bhk, selectedValue, MaxSelectedValue, amenitiValue);
    }

    const handleButtonChange = (bhkvalue) => {
        // console.log("propertyvalue", bhkvalue);
        setBhk(bhkvalue);
        allfilters(value, searchText, bhkvalue, selectedValue, MaxSelectedValue, amenitiValue);
        // console.log("checkboxvalue", checkboxvalue);
    }

    const handleSelectChange = (event) => {
        // console.log("MinBudget", event.target.value);
        setSelectedValue(event.target.value);
        allfilters(value, searchText, bhk, event.target.value, MaxSelectedValue, amenitiValue);
    };
    const handleMaxSelectChange = (event) => {
        // console.log("MaxBudget", event.target.value);
        setMaxSelectedValue(event.target.value);
        // console.log("MaxSelectedValue", MaxSelectedValue);
        allfilters(value, searchText, bhk, selectedValue, event.target.value, amenitiValue);
    };
    const handleAmenitiesButtonChange = (amenitie) => {
        console.log("amenitie", amenitie);
        setamenitiValue(amenitie);
        allfilters(value, searchText, bhk, selectedValue, MaxSelectedValue, amenitie);
    }
    // const check = (event) => {
    //     const { value, checked } = event.target;
    //     console.log("value,checked", value, checked);
    //     console.log("event", event);
    //     let checkboxv = checkboxvalue;
    //     if (event.target.checked == true) {
    //         checkboxv.push(event.target.value);
    //         setCheckboxvalue([...checkboxvalue, event.target.value]);
    //     }

    //     else {
    //         let index = checkboxv.indexOf(event.target.value);
    //         checkboxv.splice(index, 1);
    //     }
    //     setCheckboxvalue([...checkboxv]);
    //     allfilters(value, searchText, bhk, selectedValue, MaxSelectedValue, checkboxvalue);
    // }


    // ALL FILTERS
    const allfilters = (tabvalue, searchvalue, propertyvalue, minvalue, maxvalue, amenitie) => {
        // let filteredresult = PropertyLists?.filter((item) => item?.attributes?.status === tabvalue);
        let filteredresult =
            propertyList?.length > 0 ? (propertyList?.filter((item) => item?.attributes?.status === tabvalue))
                :
                SearchData?.length > 0 ? (SearchData?.filter((item) => item?.attributes?.status === tabvalue)) : null

        // console.log("tabvalue", tabvalue);
        // let filteredresult = filteredData;
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
        if (amenitie) {
            filteredresult = filteredresult?.filter((item) => item?.attributes?.amenities.some((amenity) => amenity.text === amenitie)
            );
            // filteredresult = filteredresult?.filter((item) => item?.attributes?.amenities.map((amenitifilter)=>toString(amenitifilter?.text) == toString(amenitie) ));
        }
        // if (checkboxvalue & checkboxvalue.length>0) {
        //     let data = []
        //     filteredresult.forEach((items) => {
        //         items.attributes.amenities.forEach((item1) => {
        //             if (checkboxvalue.includes(item1.text)) {
        //                 data.push(items);
        //             }
        //         })
        //     })
        //     filteredresult = data;

        // }
        // filteredresult = filteredresult?.filter((item) => item?.attributes?.amenities?.filter((amenitie) => checkboxvalue.includes(amenitie?.text)));
        // console.log("filteredresult", filteredresult);
        // console.log("maxvalue", maxvalue);
        // console.log("maxvalue", maxvalue);
        // console.log("propertyvalue", propertyvalue);

        console.log("filteredresult", filteredresult);
        setFilteredData(filteredresult);
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
                                        <p className='d-flex align-items-center justify-content-between p2-9'><span className='applied_filter'>Applied Filters</span> <span className='clear_all'>Clear All</span></p>
                                    </div>
                                </div>
                                <div className="output-area">
                                    {/* {city.map((values, index) => {
                                        return <button key={index} className="properti_filder_btnblue">{values} <BiXCircle /></button>
                                    })}
                                    {proptype.map((propvalue, index) => {
                                        return <button key={index} className="properti_filder_btnblue">{propvalue} <BiXCircle /></button>
                                    })}
                                    {addstatus.map((statusvalues, index) => {
                                        return <button key={index} className="properti_filder_btnblue">{statusvalues} <BiXCircle /></button>
                                    })}
                                    {ameniti.map((amenitievalue, index) => {
                                        return <button key={index} className="properti_filder_btnblue">{amenitievalue} <BiXCircle /></button>
                                    })} */}
                                </div>
                                <Accordion defaultActiveKey="0" flush>
                                    <div className='location-search'>
                                        <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} className="form-control1 " placeholder="Search your Area" />
                                        <FiSearch className="bold-end" onClick={searchInputSubmit} />

                                    </div >
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='accortian-label'>Property Type</Accordion.Header>
                                        <Accordion.Body>
                                            <button onClick={() => { handleButtonChange(1) }} className="properti_filder_btn">1 BHK <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleButtonChange(2) }} className="properti_filder_btn">2 BHK <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleButtonChange(3) }} className="properti_filder_btn">3 BHK <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleButtonChange(4) }} className="properti_filder_btn">4 BHK <BiPlusCircle className='filder-btn' /></button>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className='accortian-label'>Budget</Accordion.Header>
                                        <Accordion.Body>
                                            <select value={selectedValue} onChange={handleSelectChange} className="properti_filder_btn">
                                                <option>Min Budget</option>
                                                <option value={400}>400</option>
                                                <option value={550}>550</option>
                                                <option value={600}>600</option>
                                                <option value={700}>700</option>
                                            </select>
                                            <select value={MaxSelectedValue} onChange={handleMaxSelectChange} className="properti_filder_btn">
                                                <option >Max Budget</option>
                                                <option value={650}>650</option>
                                                <option value={1000}>1000</option>
                                                <option value={1500}>1500</option>
                                            </select>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header className='accortian-label'>Amenities</Accordion.Header>
                                        <Accordion.Body>
                                            <button onClick={() => { handleAmenitiesButtonChange("Gym") }} className="properti_filder_btn">Gym<BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleAmenitiesButtonChange("Park") }} className="properti_filder_btn">Park <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleAmenitiesButtonChange("Parking") }} className="properti_filder_btn">Parking <BiPlusCircle className='filder-btn' /></button>
                                            <button onClick={() => { handleAmenitiesButtonChange("ATM") }} className="properti_filder_btn">ATM <BiPlusCircle className='filder-btn' /></button>

                                            {/* <input type="checkbox" value="gym" onClick={(e) => { check(e) }} name="gym" id="gym" /> <label htmlFor='gym'>Gym</label>
                                            <input type="checkbox" value="badmindon" onClick={(e) => { check(e) }} name="badmindon" id="badmindon" /> <label htmlFor='badmindon'>badmindon</label>
                                            <input type="checkbox" value="hospital" onClick={(e) => { check(e) }} name="hospital" id="hospital" /><label htmlFor='hospital'>hospital</label> */}

                                        </Accordion.Body>
                                    </Accordion.Item>
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
                                            {/* {city.map((values, index) => {
                                                return <button key={index} className="properti_filder_btnblue">{values} <BiXCircle /></button>
                                            })}
                                            {proptype.map((propvalue, index) => {
                                                return <button key={index} className="properti_filder_btnblue">{propvalue} <BiXCircle /></button>
                                            })}
                                            {addstatus.map((statusvalues, index) => {
                                                return <button key={index} className="properti_filder_btnblue">{statusvalues} <BiXCircle /></button>
                                            })}
                                            {ameniti.map((amenitievalue, index) => {
                                                return <button key={index} className="properti_filder_btnblue">{amenitievalue} <BiXCircle /></button>
                                            })} */}
                                        </div>
                                        <Accordion defaultActiveKey="0" flush>
                                            <div className='location-search'>
                                                <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} className="form-control1 " placeholder="Search your Area" />
                                                <FiSearch className="bold-end" onClick={searchInputSubmit} />

                                            </div >
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header className='accortian-label'>Property Type</Accordion.Header>
                                                <Accordion.Body>
                                                    <button onClick={() => { handleButtonChange(1) }} className="properti_filder_btn">1 BHK <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleButtonChange(2) }} className="properti_filder_btn">2 BHK <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleButtonChange(3) }} className="properti_filder_btn">3 BHK <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleButtonChange(4) }} className="properti_filder_btn">4 BHK <BiPlusCircle className='filder-btn' /></button>

                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header className='accortian-label'>Budget</Accordion.Header>
                                                <Accordion.Body>
                                                    <select value={selectedValue} onChange={handleSelectChange} className="properti_filder_btn">
                                                        <option>Min Budget</option>
                                                        <option value={400}>400</option>
                                                        <option value={550}>550</option>
                                                        <option value={600}>600</option>
                                                        <option value={700}>700</option>
                                                    </select>
                                                    <select value={MaxSelectedValue} onChange={handleMaxSelectChange} className="properti_filder_btn">
                                                        <option >Max Budget</option>
                                                        <option value={650}>650</option>
                                                        <option value={1000}>1000</option>
                                                        <option value={1500}>1500</option>
                                                    </select>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            {/* <Accordion.Item eventKey="3">
                                                <Accordion.Header className='accortian-label'>Status</Accordion.Header>
                                                <Accordion.Body>
                                                  
                                                </Accordion.Body>
                                            </Accordion.Item> */}
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header className='accortian-label'>Amenities</Accordion.Header>
                                                <Accordion.Body>
                                                    <button onClick={() => { handleAmenitiesButtonChange("Gym") }} className="properti_filder_btn">Gym<BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleAmenitiesButtonChange("Park") }} className="properti_filder_btn">Park <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleAmenitiesButtonChange("Parking") }} className="properti_filder_btn">Parking <BiPlusCircle className='filder-btn' /></button>
                                                    <button onClick={() => { handleAmenitiesButtonChange("ATM") }} className="properti_filder_btn">ATM <BiPlusCircle className='filder-btn' /></button>

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

export default Detail_Testing;