import './travelTypeOption.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSmile,  } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood, faCity, faPersonBiking, faPersonSkiing, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'


const TravelTypeOption = (props) => {
        const [activeOption, setActiveOption] = useState('');
        const onClickHandler = (clickedOption)=>{
                setActiveOption(clickedOption);
                props.onOptionChoose(clickedOption);
        }        

        return (
                <div className='travelTypeOptionContainer'>
                       
                        <div className={`travelTypeIcon ${activeOption === 'ski' && " active"}`} onClick={() => { onClickHandler('ski') }}>
                                <FontAwesomeIcon icon={faPersonSkiing} />
                                <span> Ski</span>
                        </div>
                        <div className={`travelTypeIcon ${activeOption === 'beach' && " active"}`} onClick={() => { onClickHandler('beach') }}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} />
                                <span> Beach</span>
                        </div>
                        <div className={`travelTypeIcon ${activeOption === 'relax' && " active"}`} onClick={() => { onClickHandler('relax') }}>
                                <FontAwesomeIcon icon={faSmile} />
                                <span> Relax</span>
                        </div>
                        <div className={`travelTypeIcon ${activeOption === 'outdoor' && " active"}`} onClick={() => { onClickHandler('outdoor') }}>
                                <FontAwesomeIcon icon={faPersonBiking} />
                                <span> Outdoor</span>
                        </div>
                        <div className={`travelTypeIcon ${activeOption === 'romance' && " active"}`} onClick={() => { onClickHandler('romance') }}>
                                <FontAwesomeIcon icon={faHeart} />
                                <span> Romance</span>
                        </div >
                        <div className={`travelTypeIcon ${activeOption === 'city' && " active"}`} onClick={() => { onClickHandler('city') }}>
                                <FontAwesomeIcon icon={faCity} />
                                <span> City</span>
                        </div>
                        <div className={`travelTypeIcon ${activeOption === 'food' && " active"}`} onClick={() => { onClickHandler('food') }}>
                                <FontAwesomeIcon icon={faBowlFood} />
                                <span> Food</span>
                        </div>
                </div>
        )
}

export default TravelTypeOption