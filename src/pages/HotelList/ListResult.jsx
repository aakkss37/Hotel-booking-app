import './listResult.css'

import React from 'react'
import HotelCard from '../../components/hotelList_Card/HotelCard'
import { List } from './List'
import { useLocation } from 'react-router-dom' // it will recieve the data from useNaigation hook which is present from where this page(where this component is present) is redirected


const ListResult = () => {

  //carring the location of current page and state of the elements which is passed 
  // in the useNavigate hook.
  const location = useLocation();
  const destination = location.state.destination; 

  
  const hotelList = []
  List.forEach((hotel) => {
    if (hotel.city === destination) {
      hotelList.push(hotel);
    }
  })
  console.log(hotelList)
  const resultingHotel = hotelList.map((hotel) => (
    
       <HotelCard
        id={hotel.id}
        city={hotel.city}
        img={hotel.img[0]}
        hotelName={hotel.hotelName}
        address={hotel.address}
        distance={hotel.distance}
        free={hotel.free}
        roomType={hotel.roomType}
        roomDetail={hotel.roomDetail}
        couple={hotel.couple}
        rating={hotel.rating}
        price={hotel.price}
      />
    
  ))




  return (
    <div className="searchResult">
      {resultingHotel}
    </div>
  )

}

export default ListResult