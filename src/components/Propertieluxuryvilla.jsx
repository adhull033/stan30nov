import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';
import location from "../assets/location.svg";
import { MdOutlineCancel } from "react-icons/md";
import Property_Luxuryvilla_view from './Property_Luxuryvilla_view';

const Propertieluxuryvilla = ({ filteredData }) => {

    console.log("filteredDataLuxury",filteredData );
    // 
    const DetailsApi = (id) => {
        console.log(id);
    }
    return (
        <>
            {filteredData?.map((propertyitem, index) => (
                <Property_Luxuryvilla_view propertyitem={propertyitem} />
            ))}
        </>
    )
}

export default Propertieluxuryvilla