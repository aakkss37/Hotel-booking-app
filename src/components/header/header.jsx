// import React,{ useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import DatePicker from './DatePicker';
import BookingTypeList from "./BookingTypeList";
import GuestPicker from './GuestPicker';
 
const Header = (props) => {


        return (

                <div className='header'>
                        <div className="headerContainer">
                               
                                <div className="headerList">
                                        <BookingTypeList/>
                                </div>
                                {
                                        props.randeringFor !== "hotelList" 

                                        &&

                                        <>
                                                <div className="headerText">
                                                        <h1 className="headerTitle">A lifetime of discount? It's Genius! Isn't it.</h1>
                                                        <p className="headerDiscount">Get rewarded for your travels - unlock instabt saving of 20% or more with a free aksbookings.com account.</p>
                                                        <button className="headerBtn">Sign in / Regester</button>
                                                </div>

                                                <div className="headerSearch">
                                                        <div className="headerSearchItem">
                                                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                                                <input
                                                                        type="text"
                                                                        placeholder="Where are you going?"
                                                                        className="headerSearchInput"
                                                                />
                                                        </div>
                                                        <div className="headerSearchItem">
                                                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                                                <DatePicker />
                                                        </div>
                                                        <div className="headerSearchItem">
                                                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                                                <GuestPicker />
                                                        </div>
                                                        <div className="headerSearchItem">
                                                                <button className="headerBtn searchBtn">
                                                                        <FontAwesomeIcon icon={faSearch} className="headerIcon" />
                                                                        <span> Search</span>
                                                                </button>
                                                        </div>
                                                </div>
                                        </>
                                }
                        </div>
                </div>
        );
}

export default Header;
