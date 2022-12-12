import './listResult.css'

import React from 'react'
import HotelCard from '../../components/hotelList_Card/HotelCard'

const ListResult = () => {

  return (
          <div className="searchResult">
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
          </div>
  )

}

export default ListResult