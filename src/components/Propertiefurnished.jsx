import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Property_Furnished_view from './Property_Furnished_view'


const Propertiefurnished = ({ filteredData: initialFilteredData }) => {
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
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">South Bangalore stands as the cultural heart of the city, steeped in tradition while embracing the pulse of contemporary life. Areas like Jayanagar, Basavanagudi, and Banashankari are known for their old-world charm, tree-lined streets, and a tight-knit community vibe.</p>
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">Educational institutions such as Christ University and Indian Institute of Management (IIM) Bangalore elevate the academic profile of this region. South Bangalore is also a foodie’s paradise, with iconic spots like Vidyarthi Bhavan and Brahmin’s Coffee Bar offering unforgettable culinary experience.</p>
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">The area has witnessed a rise in modern housing projects in Kanakapura Road and Bannerghatta Road, making it an attractive destination for families and investors alike. For those seeking a mix of culture, convenience, and calm, South Bangalore stands unparalleled.</p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-12 sec-bortopbot11 pb-3 ps-0 ps-md-3 pt-3 pe-0" bis_skin_checked="1">
                            <img src="https://www.api.stanleyestates.in/uploads/SOUTH_405bc2306a.png" alt="About" class="img-fluid-fill">
                            </img>
                        </div>
                    </div>
                </div>
            </section>
            {filteredData?.map((propertyitem) => (
                <Property_Furnished_view key={propertyitem.id} propertyitem={propertyitem} />
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

export default Propertiefurnished