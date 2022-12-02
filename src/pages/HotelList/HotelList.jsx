import React from 'react';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/Navbar';

const HotelList = () => {
        return (
                <div>
                        <Navbar />
                        <Header randeringFor = "hotelList"/>
                </div>
        );
}

export default HotelList;
