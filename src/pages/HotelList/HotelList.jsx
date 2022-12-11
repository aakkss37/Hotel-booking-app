import React from 'react';
import './hotelList.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/header';
import ListResult from './ListResult';
import ListSearch from './ListSearch';
import Footer from '../../components/footer/Footer';

const HotelList = () => {
        return (
                <div>

                        {/* HEAD */}
                        <Navbar />
                        <Header randeringFor = "hotelList"/>
                        


                        {/* BODY */}
                        <div className="hotelList">
                                <div className="listContainer">

                                        <ListSearch/>

                                        <ListResult/>

                                </div>
                        </div>



                        {/* FOOT */}
                        <section className='footer'>
                                <Footer />
                        </section>


                        <section className='lastLine'>
                                <p className='lastLine'>Copyright © 2022 – 2024 aksbookings.com™. All rights reserved. Amar kumar</p>
                        </section>
                </div>
        );
}

export default HotelList;
