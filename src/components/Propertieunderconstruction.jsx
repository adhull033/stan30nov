import React, { useState, useEffect } from 'react';
import Property_Underconstruction_view from './Property_Underconstruction_view';
import axios from 'axios';

const Propertieunderconstruction = ({ filteredData: initialFilteredData }) => {
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
            {filteredData?.map((propertyitem) => (
                <Property_Underconstruction_view key={propertyitem.id} propertyitem={propertyitem} />
            ))}

            {/* Load More Button */}
            {hasMore && (
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <button
                        onClick={fetchMoreData}
                        disabled={loading}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}

            {/* No More Data Message */}
            {!hasMore && (
                <div style={{ textAlign: 'center', margin: '20px 0', color: '#666' }}>
                    No more properties to load.
                </div>
            )}
        </>
    );
};

export default Propertieunderconstruction;
