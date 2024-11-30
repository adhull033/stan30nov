import React from 'react'

import Property_Readytomove_View from './Property_Readytomove_View';


const Propertiereadytomove = ({ filteredData }) => {
 
    return (
        <>
            {filteredData?.map((propertyitem, index) => (
                <Property_Readytomove_View propertyitem={propertyitem}/>

            ))}
        </>
    )
}

export default Propertiereadytomove