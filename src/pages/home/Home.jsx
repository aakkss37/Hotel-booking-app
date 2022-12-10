import React from 'react'
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/Navbar'
import PopularDestination from '../../components/popularDestination/PopularDestination';
import PropertyType from '../../components/propertyType/PropertyType';
import Subscribe from '../../components/subscribe/Subscribe';
import TravelType from '../../components/travelType/TravelType';
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />


      <Header />


      <section className='homeSection'>
        <div className="homeContainer">
          <Featured />
          <div className="browswPropertyType">
            <div className="browswPropertyType__text">
              <h1 className='homeTitle'>Browse by property type.</h1>
              <span className='quote'>
                The world’s top places to celebrate life. Let your imagination run wild in these top spooky places to celebrate Halloween.
              </span>
            </div>
            <PropertyType />
          </div>
        </div>
      </section>


      <section className='travelAroundAsia'>
        <div className="travelAroundAsiaContainer">
          <TravelType />
        </div>
      </section>



      <section className='popularDestination'>
        <PopularDestination />
      </section>


      <section className='subscribe'>
        <Subscribe />
      </section>


      <section className='footer'>
        <Footer />
      </section>


      <section className='lastLine'>
        <p className='lastLine'>Copyright © 2022 – 2024 aksbookings.com™. All rights reserved. Amar kumar</p>
      </section>
    </div>
  )
}

export default Home;