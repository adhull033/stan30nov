import React from 'react'
import Properties_listings from './Properties_listings'
import Index from './components/index';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';

function Property() {
    return (
        <div className='Property'>
            <Routes>
                <Header />
                <Route path='/' element={<Index />} />
                <Route path='/ourstory' element={<Properties_listings />} />
            </Routes>
        </div>
    )
}

export default Property;