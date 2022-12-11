import React, { useState } from 'react'
import "./guestPicker.css"
export default function GuestPicker(props) {

        const [showOption, setShowOption] = useState(false);

        const [guest, setGuest] = useState({
                adult: 2,
                children: 0,
                room: 1
        });

        props.onAddGuest(guest); //sending guest detail to upper classe header.jsx

        const substractGuestEventHandler = (person) => {
                if (person === "adult" && guest.adult > 1) {
                        setGuest((previousState) => {
                                return {
                                        adult: previousState.adult - 1,
                                        children: previousState.children,
                                        room: previousState.room
                                }
                        })
                }
                else if (person === "child" && guest.children >= 1) {
                        setGuest((previousState) => {
                                return {
                                        adult: previousState.adult,
                                        children: previousState.children - 1,
                                        room: previousState.room
                                }
                        })
                }
                else if (person === "room" && guest.room > 1) {
                        setGuest((previousState) => {
                                return {
                                        adult: previousState.adult,
                                        children: previousState.children,
                                        room: previousState.room -1
                                }
                        })
                }
        }


        
        const addGuestEventHander = (person) => {
                
                if (person === "adult" && guest.adult < 9)  {
                        setGuest((previousState) => {
                                return {
                                        adult: previousState.adult + 1,
                                        children: previousState.children,
                                        room: previousState.room
                                }
                        })
                }
                else if (person === "child" && guest.children < 9) {
                        setGuest((previousState) => {
                                return {
                                        adult: previousState.adult,
                                        children: previousState.children + 1,
                                        room: previousState.room
                                }
                        })
                }
                else if (person === "room" && guest.room < 9) {
                        setGuest((previousState) => {
                                return {
                                        adult: previousState.adult,
                                        children: previousState.children,
                                        room: previousState.room + 1
                                }
                        })
                }
        }

        const addGuest = () => {
                setShowOption(false);
        }
        
        return (

                <>
                        <span className="headerSearchText" onClick={() => { setShowOption(!showOption) }}>
                                {`${guest.adult} Adult | ${guest.children} Children | ${guest.room} Room`}
                        </span>
                        {
                                showOption
                                &&
                                <div className="options">
                                        <div className="optionItem">
                                                <span className="optionText">Adult</span>
                                                <div className="optionInput">
                                                                <button className="decreaseCount" onClick={() => { substractGuestEventHandler("adult") }}>-</button>
                                                        <input className='guestInput' type="text" value={guest.adult} disabled />
                                                        <button className="increaseCount" onClick={() => { addGuestEventHander("adult") }}>+</button>
                                                </div>
                                        </div>
                                        <div className="optionItem">
                                                <span className="optionText">Children</span>
                                                <div className="optionInput">
                                                                <button className="decreaseCount" onClick={() => { substractGuestEventHandler("child") }}>-</button>
                                                        <input className='guestInput' type="text" value={guest.children} disabled />
                                                        <button className="increaseCount" onClick={() => { addGuestEventHander("child") }}>+</button>
                                                </div>
                                        </div>
                                        <div className="optionItem">
                                                <span className="optionText">Room</span>
                                                <div className="optionInput">
                                                                <button className="decreaseCount" onClick={() => { substractGuestEventHandler("room") }}>-</button>
                                                        <input className='guestInput' type="text" value={guest.room} disabled />
                                                        <button className="increaseCount" onClick={() => { addGuestEventHander("room") }}>+</button>
                                                </div>
                                        </div>
                                        <button className="add" onClick={addGuest}>Add</button>
                                </div>
                        }
                </>
        )
}
