import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainCity, faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import "./bookingTypeList.css"

const BookingTypeList = () => {
        return (
                <>
                        <div className="headerListItem active">
                                <FontAwesomeIcon icon={faBed} />
                                <span>Stays</span>
                        </div>
                        <div className="headerListItem">
                                <FontAwesomeIcon icon={faPlane} />
                                <span>Flights</span>
                        </div>
                        <div className="headerListItem">
                                <FontAwesomeIcon icon={faCar} />
                                <span>Car rentals</span>
                        </div>
                        <div className="headerListItem">
                                <FontAwesomeIcon icon={faMountainCity} />
                                <span>Attractions</span>
                        </div>
                        <div className="headerListItem">
                                <FontAwesomeIcon icon={faTaxi} />
                                <span>Airport taxis</span>
                        </div>
                </>
        );
}

export default BookingTypeList;
