import './hotelCard.css'
import React from 'react'

const HotelCard = (props) => {
        return (
                <div className='hotelCard'>

                        <div className="hotelImage">
                                <img src={props.img} alt="hotel img" />
                        </div>

                        <div className="hotelDiscription">
                                <h1 className="hotelName"> {props.hotelName} </h1>
                                <span className='hotelDist'>{props.distance}</span>
                                <p className='freeAccommodation'>{props.free}</p>
                                <h1 className='roomType'>{props.roomType}</h1>
                                <span className='roomDetail'>{props.roomDetail}</span>
                                <p className='couple'>{props.couple}</p>
                                <p className='cancellationPolicy'>Free cancellation</p>

                                <span className='lockOffer'>You can cancel it later, so let's lock the room at this grate price today!</span>
                        </div>

                        <div className="hotelOverview">
                                <div className="hotelRating">
                                        <p>{props.rating}</p>
                                </div>
                                <div className="hotelPrice">
                                        <h2>Rs.{props.price}</h2>
                                        <p>Included all taxes.</p>
                                        <button className='checkout'>Check details</button>
                                </div>
                        </div>

                </div>
        )
}

export default HotelCard
