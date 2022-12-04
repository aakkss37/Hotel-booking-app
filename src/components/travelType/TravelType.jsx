import "./travelType.css";

import React from 'react'
import TravelTypeOption from "./travelTypeOption/TravelTypeOption";
import Ski from "./travelTypeResult/Ski";

const TravelType = () => {
        return (
                <div className="travelType">
                        <div className="travelTypeText">
                                <h1>Travel around Asia.</h1>
                                <p>Explore more places we think you'll love.</p>
                                <p>The greatest reward and luxury of travel is to be able to experience everyday things as if for the first time,<br />to be in a position in which almost nothing is so familiar it is taken for granted.</p>
                        </div>
                        <div className="travelTypeContainer">
                                <div className="travelTypeOption">
                                        <TravelTypeOption/>
                                </div>
                                <div className="travelTypeResult">
                                        <Ski/>     
                                </div>
                        </div>

                </div>
        )
}

export default TravelType
