import React, { useState } from 'react'
import Property_Underconstruction_view from './Property_Underconstruction_view'

const Propertieunderconstruction = ({ filteredData }) => {
    
    return (
        <>
            {filteredData?.map((propertyitem, index) => (
                <Property_Underconstruction_view propertyitem={propertyitem}/>
            ))}
        </>
    )
}

export default Propertieunderconstruction