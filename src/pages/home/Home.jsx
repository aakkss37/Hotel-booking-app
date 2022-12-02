import React from 'react'
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/Navbar'
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <section className='homeSection'>
        <div className="homeContainer">
          <Featured/>
        </div>
      </section>
    </div>
  )
}

export default Home;