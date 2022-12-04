import "./travelType.css";

import React, {useState} from 'react'
import TravelTypeOption from "./travelTypeOption/TravelTypeOption";
import Ski from "./travelTypeResult/Ski";
import Beach from "./travelTypeResult/Beach";
import Relax from "./travelTypeResult/Relax";
import Outdoor from "./travelTypeResult/Outdoor";
import Romance from "./travelTypeResult/Romance";
import City from "./travelTypeResult/City";

const TravelType = () => {
        const [travelType, setTravelType] = useState('ski');
        const onOptionChooseHandler = (chosedOption)=>{
                console.log("choseOption ----->>>>> ",chosedOption)
                setTravelType(chosedOption);
                console.log("travelType ------>>>>>", travelType)
        }
        return (
                <div className="travelType">

                        <div className="travelTypeText">
                                <h1>Travel around Asia.</h1>
                                <p>Explore more places we think you'll love.</p>
                                <p>The greatest reward and luxury of travel is to be able to experience everyday things as if for the first time,<br />to be in a position in which almost nothing is so familiar it is taken for granted.</p>
                        </div>

                        <div className="travelTypeContainer">
                                <div className="travelTypeOption">
                                        <TravelTypeOption onOptionChoose={onOptionChooseHandler}/>
                                </div> 
                                <div className="travelTypeResult">
                                        {travelType === "ski" && <Ski />}     
                                        {travelType === "beach" && <Beach/>}     
                                        {travelType === "relax" && <Relax/>}     
                                        {travelType === "outdoor" && <Outdoor/>}     
                                        {travelType === "romance" && <Romance/>}     
                                        {travelType === "city" && <City/>}     
                                </div>
                        </div>

                </div>
        )
}

export default TravelType
