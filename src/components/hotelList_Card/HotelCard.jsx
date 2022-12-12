import './hotelCard.css'
import React from 'react'

const HotelCard = (props) => {
        return (
                <div className='hotelCard'>

                        <div className="hotelImage">
                                <img src="https://r1imghtlak.mmtcdn.com/082f1ae6330211eb9c050242ac110004.jpg?&output-quality=75&downsize=583:388&output-format=jpg" alt="hotel img" />
                        </div>

                        <div className="hotelDiscription">
                                <h1 className="hotelName"> Hotel paradice </h1>
                                <span className='hotelDist'>500m from airport</span>
                                <p className='freeAcomodation'>free acomodation</p>
                                <h1 className='roomType'>Delux | Super Delux</h1>
                                <span>Room size</span>
                                <p>cancilation</p>
                                <span>if there is any offer</span>
                        </div>

                        <div className="hotelOverview">
                                <div className="hotelRating">
                                        <h3>Quality</h3>
                                        <p>rating</p>
                                </div>
                                <div className="hotelPrice">
                                        <h3>Rs.789</h3>
                                        <p>Included all taxes.</p>
                                        <button className='checkout'>Check details</button>
                                </div>
                        </div>

                </div>
        )
}

export default HotelCard
