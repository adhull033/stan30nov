import React from 'react'

import Property_Unfurnished_view from './Property_Unfurnished_view';

const Propertieunfurnished = ({ filteredData }) => {
 
    return (
        <>
            {filteredData?.map((propertyitem, index) => (
                <Property_Unfurnished_view propertyitem={propertyitem}/>
            ))}
        </>
    )
}

export default Propertieunfurnished