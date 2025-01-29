import React, { useState, useEffect } from 'react';
import { Modal, Button, Accordion } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from '@mui/lab';
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
import { BiPlusCircle, BiXCircle } from "react-icons/bi";
import Propertiereadytomove from './Propertiereadytomove';
import Propertieluxuryvilla from './Propertieluxuryvilla';
import Propertieunderconstruction from './Propertieunderconstruction';
import Propertiefurnished from './Propertiefurnished';
import Propertieunfurnished from './Propertieunfurnished';
import { useDispatch, useSelector } from 'react-redux';
import { propertyData, searchData } from '../Redux/Slice';

function Properties_listings() {
    const { propertyList } = useSelector((state) => state.estate);
    const { SearchData } = useSelector((state) => state.estate);

    const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState("East");

    const dispatch = useDispatch();

    // Filters state
    const [showModal, setShowModal] = useState(false);

    const [searchText, setSearchText] = useState('');
    const [selectedBHK, setSelectedBHK] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [activeButton, setActiveButton] = useState(null);

    // Parse price string to numeric value (handles both Lakhs and Crores)
    const parsePrice = (priceString) => {
        const numericValue = parseFloat(priceString.replace(/[^0-9.]/g, ''));
        if (priceString.includes('L')) {
            return numericValue * 0.01; // Convert Lakhs to Crores
        }
        return numericValue; // Already in Crores
    };

    useEffect(() => {
        allfilters(value, searchText, selectedBHK, minPrice, maxPrice);
    }, [value, propertyList, SearchData, selectedBHK, minPrice, maxPrice]);

    // Fetch data on component mount
    useEffect(() => {
        if (SearchData?.length > 0) {
            const getstatus = SearchData?.map((item) => item?.attributes.Zone);
            setValue(getstatus[0]);
        }
    }, [SearchData]);

    // Handle tab change
    const handleTabChange = (event, selectedTab) => {
        setValue(selectedTab);
        allfilters(selectedTab, searchText, selectedBHK, minPrice, maxPrice);
    };

    // Handle BHK filter
    const handleBHKFilter = (bhk) => {
        setSelectedBHK(bhk);
        setActiveButton(bhk);
    };

    // Handle Price filter
    const handlePriceFilter = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    // Main filter function
    const allfilters = (tabvalue, searchvalue, selectedBHK, minprice, maxprice) => {
        let filteredresult =
            propertyList?.length > 0
                ? propertyList?.filter((item) => item?.attributes?.Zone === tabvalue)
                : SearchData?.length > 0
                    ? SearchData?.filter((item) => item?.attributes?.Zone === tabvalue)
                    : [];

        // Search filter
        if (searchvalue) {
            filteredresult = filteredresult?.filter((item) =>
                item?.attributes?.locality.toLowerCase().includes(searchvalue.toLowerCase())
            );
        }

        // BHK filter
        if (selectedBHK) {
            const selectedBHKValue = parseFloat(selectedBHK);
            filteredresult = filteredresult?.filter((item) =>
                item?.attributes?.Pricing?.some((price) => {
                    const bhkValue = parseFloat(price.BHK);
                    return Math.abs(bhkValue - selectedBHKValue) <= 0.5;
                })
            );
        }

        // Price filter
        if (minprice && maxprice) {
            filteredresult = filteredresult?.filter((item) =>
                item?.attributes?.Pricing?.some((price) => {
                    const priceValue = parsePrice(price.Price);
                    return priceValue >= parseFloat(minprice) && priceValue <= parseFloat(maxprice);
                })
            );
        }

        setFilteredData(filteredresult);
    };

    // Clear all filters
    const handleClear = () => {
        setValue("East");
        setSearchText("");
        setSelectedBHK("");
        setMinPrice("");
        setMaxPrice("");
        setActiveButton(null);
        dispatch(searchData({ searchLists: [] }));
        axios.get(`${process.env.REACT_APP_API_URL}/api/properties?populate=deep`).then((response) => {
            dispatch(propertyData({ propertyLists: response?.data?.data }));
        });
    };

    return (
        <>
            <section className='mt-5 mb-3'>
                <div className="container">
                    <div className="col">
                      
                        <div className="col-lg-3 col-md-4 col-sm-12 d-lg-block d-md-block d-sm-none">
                            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                                <Modal.Header closeButton>
                                <Modal.Title className="text-white">Filters</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="left-contents">
                                     
                                        <div className="output-area"></div>
                                        <Accordion defaultActiveKey="0" flush>
                                            <div className='location-search'>
                                                <input
                                                    type="text"
                                                    value={searchText}
                                                    onChange={(event) => setSearchText(event.target.value)}
                                                    className="form-control1"
                                                    placeholder="Search your Area"
                                                />
                                                <FiSearch className="bold-end" onClick={() => allfilters(value, searchText, selectedBHK, minPrice, maxPrice)} />
                                            </div>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header className='accortian-label'>Bedrooms</Accordion.Header>
                                                <Accordion.Body>
                                                    {["2 BHK", "2.5 BHK", "3 BHK", "3.5 BHK", "4 BHK", "4.5 BHK", "5 BHK"].map((bhk) => (
                                                        <button
                                                            key={bhk}
                                                            onClick={() => handleBHKFilter(bhk)}
                                                            className={activeButton === bhk ? 'properti_filder_btn active-button' : 'properti_filder_btn'}
                                                        >
                                                            {bhk} <BiPlusCircle className='filder-btn' />
                                                        </button>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header className='accortian-label'>Price Range</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="row">
                                                        <div className="col p-0">
                                                            <input
                                                                type="number"
                                                                value={minPrice}
                                                                onChange={(event) => setMinPrice(event.target.value)}
                                                                className="propety-select-btn"
                                                                placeholder="Min Price (in Cr)"
                                                            />
                                                        </div>
                                                        <div className="col p-0">
                                                            <input
                                                                type="number"
                                                                value={maxPrice}
                                                                onChange={(event) => setMaxPrice(event.target.value)}
                                                                className="propety-select-btn"
                                                                placeholder="Max Price (in Cr)"
                                                            />
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='flex-nowrap'>
                                  
                                    <Button variant="secondary" onClick={handleClear} className='btn12'>
                                    Clear All
                                    </Button>
                                    <Button variant="primary" onClick={() => setShowModal(false)} className='btn12 booknow-btn button-top align-item-center'>
                                        Apply Filters
                                    </Button>
                                  
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="col-lg-12 col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col d-flex justify-content-between">
                                    <h3 className="header-h2 text-sm-center text-lg-start">Property Listings</h3>
                                    <div className='w-25 d-flex justify-content-end'>
                                    <Button variant="primary" onClick={() => setShowModal(true)} className=' btn12 booknow-btn button-top align-item-center'>
                            Filters
                        </Button></div>
                                </div>
                            </div>
                            {/* Tab Panels */}
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            borderBottom: 1,
                                            borderColor: 'divider',
                                            '& .MuiTabs-indicator': {
                                                backgroundColor: "#0A243F"
                                            }
                                        }}
                                    >
                                        <TabList onChange={handleTabChange} variant="scrollable" scrollbuttons="true">
                                            <Tab label="East" value="East" className='muitab_label1' />
                                            <Tab label="West" value="West" className='muitab_label1' />
                                            <Tab label="CBD" value="CBD" className='muitab_label1' />
                                            <Tab label="North" value="North" className='muitab_label1' />
                                            <Tab label="South" value="South" className='muitab_label1' />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="East" className='property_tabpanel'>
                                        {
                                            <div className="container">
                                                <div className="row">
                                                    <Propertieluxuryvilla filteredData={filteredData} />
                                                </div>
                                            </div>}
                                    </TabPanel>
                                    <TabPanel value="West" className='property_tabpanel'>
                                        {
                                            <div className="container">
                                                <div className="row">
                                                    <Propertiereadytomove filteredData={filteredData} />
                                                </div>
                                            </div>}
                                    </TabPanel>
                                    <TabPanel value="CBD" className='property_tabpanel'>
                                        {
                                            <div className="container">
                                                <div className="row">
                                                    <Propertieunfurnished filteredData={filteredData} />
                                                </div>
                                            </div>}
                                    </TabPanel>
                                    <TabPanel value="North" className='property_tabpanel'>
                                        {
                                            <div className="container">
                                                <div className="row">
                                                    <Propertieunderconstruction filteredData={filteredData} />
                                                </div>
                                            </div>}
                                    </TabPanel>
                                    <TabPanel value="South" className='property_tabpanel'>
                                        {
                                            <div className="container">
                                                <div className="row">
                                                    <Propertiefurnished filteredData={filteredData} />
                                                </div>
                                            </div>}
                                    </TabPanel>

                                </TabContext>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Properties_listings;