import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import './header.css'
import DatePicker from './DatePicker';
import BookingTypeList from "./BookingTypeList";
import GuestPicker from './GuestPicker';
 
const Header = (props) => {

        const [destination, setDestination] = useState("");     //monitoring the destination of user
        const [date, setDate] = useState();                     //monitoring the date of booking
        const [guests, setGuests] = useState();                 //monitoring the no. of guest
        const navigate = useNavigate();                         //on search click.. redirect to hotel-list page


        // FORM VALID
        const [isDestinationValid, setDestinationValid] = useState(false);
        const [isDestinationTouched, setIsFormTouched] = useState(false);
        const destinationHandler = (event)=>{
                setDestinationValid(true);
                const destiny = event.target.value.toLowerCase();
                setDestination(destiny)
        
                if(destiny.trim().length === 0){
                        console.log("destination ---> invalid")
                        setDestinationValid(false);
                }
        }
        const blurHandler = ()=>{
                setIsFormTouched(true);
        }

        const guestAddHendler = (guest)=>{
                setGuests(guest);
        }

        const addDateHandler = (date)=> {
                setDate(date);
        }

        const hotelSearchHandler = (event)=>{
                event.preventDefault();
                setIsFormTouched(true);
                console.log('search Clicked')
                if (destination.trim().length !== 0){
                        //On search click.. redirect to /hotel-list page with the current state of 
                        // element passed in state option
                        navigate("/hotels-list", {state: {destination, date, guests}});
                }
                console.log('invalid form')
        }
        const formInvalid = !isDestinationValid && isDestinationTouched;


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
                                                                <FontAwesomeIcon icon={faBed} className="headerIcon" style={formInvalid ? { color: "red" } : {color: "gray"}}/>
                                                                <input
                                                                        type="text"
                                                                        placeholder={`${formInvalid ? "Please enter the destination." : "Where are you going?"}`}
                                                                        className={`${formInvalid ? "invalidInput headerSearchInput" : "headerSearchInput"}`}
                                                                        onChange={destinationHandler}
                                                                        onBlur={blurHandler}
                                                                />
                                                        </div>
                                                        <div className="headerSearchItem">
                                                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                                                <DatePicker onAddDate = {addDateHandler}/>
                                                        </div>
                                                        <div className="headerSearchItem">
                                                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                                                <GuestPicker onAddGuest = {guestAddHendler}/>
                                                        </div>
                                                        <div className="headerSearchItem">
                                                                <button className="headerBtn searchBtn" onClick={hotelSearchHandler}>
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
