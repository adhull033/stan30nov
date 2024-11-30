import React from 'react'
import Property_Furnished_view from './Property_Furnished_view'


const Propertiefurnished = ({ filteredData }) => {
  
    return (
        <>
            {filteredData?.map((propertyitem, index) => (
                <Property_Furnished_view propertyitem={propertyitem}/>
            ))}
        </>
    )
}

export default Propertiefurnished