import "./travelType.css";

import React from 'react'
import TravelTypeOption from "./travelTypeOption/TravelTypeOption";

const TravelType = () => {
        return (
                <div className="travelType">
                        <div className="travelTypeText">
                                <h2>Travel around Asia..</h2>
                                <p>Explore more places we think you'll love</p>
                                <p>The greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.</p>
                        </div>
                        <div className="travelTypeContainer">
                                <div className="travelTypeOption">
                                        <TravelTypeOption/>
                                </div>
                                <div className="travelTypeResult">
                                        result
                                </div>
                        </div>

                </div>
        )
}

export default TravelType
