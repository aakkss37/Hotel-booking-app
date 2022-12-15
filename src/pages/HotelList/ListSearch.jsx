import './listSearch.css'

import React, {useState} from 'react'
import { useLocation } from 'react-router-dom' // it will recieve the data from useNaigation hook which is present from where this page(where this component is present) is redirected
import { format } from 'date-fns' // --> To transform the date into a readable String
import { DateRange } from 'react-date-range'// for Date Picker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const ListSearch = () => {
        //carring the location of current page and state of the elements which is passed 
        // in the useNavigate hook.
        const location = useLocation();
        const destination = location.state.destination; 
        const [date, setDate] = useState(location.state.date);                    
        const [guests, setGuests] = useState(location.state.guests);
        const [showDatePicker, setShowDatePicker] = useState(false) 

        const guestUpdateHendler = (changedItem, changedValue)=>{
                if (changedItem === 'ADULT'){
                        setGuests({
                                adult: changedValue ,
                                children: guests.children,
                                room: guests.room
                        })
                }
                if (changedItem === 'CHILDREN') {
                        setGuests({
                                adult: guests.adult,
                                children: changedValue,
                                room: guests.room
                        })
                }
                if (changedItem === 'ROOM') {
                        setGuests({
                                adult: guests.adult,
                                children: guests.children,
                                room: changedValue
                        })
                }
        }



        return (
                <div className='searchSection'>
                        <div className="searchItem">
                                <h2>{destination}</h2>
                        </div>
                        <div className="searchItem">
                                <lable>Check-in Date: </lable>
                                <span onClick={() => { setShowDatePicker(!showDatePicker) }} id='searchItemDate'> 
                                        {`${format(date[0].startDate, "dd/MM/yyyy")} TO ${format(date[0].endDate, "dd/MM/yyyy")}`} 
                                </span>
                                {
                                        showDatePicker
                                        &&
                                        <DateRange
                                                onChange={(item)=>{setDate([item.selection])}}
                                                ranges={date}
                                        />
                                }
                        </div>
                        <div className="searchItem">
                                <lable>Option</lable>
                                <div className="searchOptions">
                                        <div className="searchOptionItem">
                                                <span className="searchOptionText">Min price <small>per night </small></span>
                                                <input type='number' className='searchOptionItemInput'/>
                                        </div>
                                        <div className="searchOptionItem">
                                                <span className="searchOptionText">Max price <small>per night </small></span>
                                                <input type='number' className='searchOptionItemInput'/>
                                        </div>
                                        <div className="searchOptionItem">
                                                <span className="searchOptionText">Adult </span>
                                                <input type='number' className='searchOptionItemInput' value={guests.adult} min={1} max={10} onChange={(event) => { guestUpdateHendler('ADULT', event.target.value)}} />
                                        </div>
                                        <div className="searchOptionItem">
                                                <span className="searchOptionText">Children </span>
                                                <input type='number' className='searchOptionItemInput' value={guests.children} min={0} max={20} onChange={(event) => { guestUpdateHendler('CHILDREN', event.target.value) }} />
                                        </div>
                                        <div className="searchOptionItem">
                                                <span className="searchOptionText">Room </span>
                                                <input type='number' className='searchOptionItemInput' value={guests.room} min={1} max={10} onChange={(event) => { guestUpdateHendler('ROOM', event.target.value) }} />
                                        </div>
                                </div>   
                        </div>
                        <button>Search</button>
                </div>
        )
}

export default ListSearch