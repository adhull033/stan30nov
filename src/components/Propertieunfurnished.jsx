import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Property_Unfurnished_view from './Property_Unfurnished_view';

const Propertieunfurnished = ({ filteredData: initialFilteredData }) => {
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
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">North Bangalore is the city’s booming hub of progress, striking a perfect balance between urban development and natural tranquility. Home to tech parks like Manyata Tech Park and Kirloskar Business Park, this area is ideal for professionals looking to stay close to their workplaces. With the presence of Kempegowda International Airport, North Bangalore has become a gateway to global connectivity.</p>
                                <p class="col-lg-12 about-para mt-lg-2 text-justify">Residential options here cater to a variety of preferences, from luxury villas in areas like Yelahanka and Hebbal to modern apartments in Jakkur. The region boasts excellent infrastructure with well-planned roadways, reputed educational institutions, such as Canadian International School and Stonehill International, and lush green spaces like Lumbini Gardens and Nandi Hills for weekend getaways.
                                    Whether you’re a young professional or a family looking for convenience and lifestyle, North Bangalore is the perfect mix of potential and peace.</p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-12 sec-bortopbot11 pb-3 ps-0 ps-md-3 pt-3 pe-0" bis_skin_checked="1">
                            <img src="https://www.api.stanleyestates.in/uploads/six_places_to_shop_in_bengalore_a2a360f002.jpg" alt="About" class="img-fluid-fill">
                            </img>
                        </div>
                    </div>
                </div>
            </section>
            {filteredData?.map((propertyitem) => (
                <Property_Unfurnished_view key={propertyitem.id} propertyitem={propertyitem} />
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


export default Propertieunfurnished