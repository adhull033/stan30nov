import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import location from "../assets/location.svg";
import { MdOutlineCancel } from "react-icons/md";
import Property_Luxuryvilla_view from './Property_Luxuryvilla_view';

const Propertieluxuryvilla = ({ filteredData: initialFilteredData }) => {
    const [filteredData, setFilteredData] = useState(initialFilteredData || []);
    const [page, setPage] = useState(1); // Track the current page
    const [loading, setLoading] = useState(false); // Track loading state
    const [hasMore, setHasMore] = useState(true); // Track if more data is available

    // Helper function to merge data without duplicates
    const mergeWithoutDuplicates = (existingData, newData) => {
        const mergedData = [...existingData];
        const existingIds = new Set(existingData.map((item) => item.id));

        newData.forEach((item) => {
            if (!existingIds.has(item.id)) {
                mergedData.push(item);
                existingIds.add(item.id);
            }
        });

        return mergedData;
    };

    // Fetch more data when the "Load More" button is clicked
    const fetchMoreData = async () => {
        if (loading || !hasMore) return; // Prevent multiple requests

        setLoading(true);

        try {
            const nextPage = page + 1;
            const response = await axios.get(
                `https://www.api.stanleyestates.in/api/properties?populate=deep&pagination[page]=${nextPage}&pagination[pageSize]=10`
            );

            const newData = response.data.data;

            if (newData.length > 0) {
                // Merge data without duplicates
                setFilteredData((prevData) => mergeWithoutDuplicates(prevData, newData));
                setPage(nextPage); // Update the page number
            } else {
                setHasMore(false); // No more data available
            }
        } catch (error) {
            console.error('Error fetching more properties:', error);
        } finally {
            setLoading(false);
        }
    };

    // Reset filteredData when initialFilteredData changes
    useEffect(() => {
        setFilteredData(initialFilteredData || []);
        setPage(1); // Reset page number
        setHasMore(true); // Reset hasMore state
    }, [initialFilteredData]);

    return (
        <>
            <section className='mb-2'>
                <div class="container-fluid" bis_skin_checked="1">
                    <div class="row" bis_skin_checked="1">
                        <div class=" col-lg-7 col-md-6 col-sm-12 p-0 pe-md-1 dflex-aligns" bis_skin_checked="1">
                            <div class="p-0 pt-3 pt-lg-0" bis_skin_checked="1">
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">East Bangalore is synonymous with Bangalore’s rise as the Silicon Valley of India. Known for its IT hubs like Whitefield and EPIP Zone, this part of the city thrives on innovation and enterprise. The area is a hotspot for professionals working with multinational corporations and tech giants.</p>
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">Beyond its workspaces, East Bangalore offers a high standard of living with premium residential communities in Whitefield, Marathahalli, and Varthur. Shopping malls like Phoenix Marketcity and VR Bengaluru add to the cosmopolitan vibe, while renowned schools and hospitals ensure a well-rounded lifestyle.</p>
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">Nature enthusiasts can find solace in green spaces like the Krishnarajapuram Lake and Kadugodi Park. East Bangalore is perfect for those who desire a fast-paced lifestyle with all the luxuries at their fingertips.</p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-12 sec-bortopbot11 pb-3 ps-0 ps-md-3 pt-3 pe-0" bis_skin_checked="1">
                            <img src="https://www.api.stanleyestates.in/uploads/EAST_d9120dfec5.png" alt="About" class="img-fluid-fill">
                            </img>
                        </div>
                    </div>
                </div>
            </section>
            {filteredData?.map((propertyitem) => (
                <Property_Luxuryvilla_view key={propertyitem.id} propertyitem={propertyitem} />
            ))}

            {/* Load More Button 
            {hasMore && (
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <button
                        onClick={fetchMoreData}
                        disabled={loading}
                        className='booknow-btn btn12 button-top align-item-center'>
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}*/}

            {/* No More Data Message */}
            {!hasMore && (
                <div style={{ textAlign: 'center', margin: '20px 0', color: '#666' }}>
                    No more properties to load.
                </div>
            )}
        </>
    );
};

export default Propertieluxuryvilla