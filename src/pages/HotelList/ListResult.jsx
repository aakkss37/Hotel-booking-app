import './listResult.css'

import React from 'react'
import HotelCard from '../../components/hotelList_Card/HotelCard'
import { List } from './List'

const ListResult = () => {


  const resultingHotel = List.map((hotel)=>(
    <HotelCard
      id = {hotel.id}
      city = {hotel.city}
      img = {hotel.img} 
      hotelName = {hotel.hotelName}
      distance = {hotel.distance}
      free = {hotel.free}
      roomType = {hotel.roomType}
      roomDetail = {hotel.roomDetail}
      couple = {hotel.couple}
      rating = {hotel.rating}
      price = {hotel.price}
    />
  ))

  return (
          <div className="searchResult">
                {resultingHotel}
          </div>
  )

}

export default ListResult