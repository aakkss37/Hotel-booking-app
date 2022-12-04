import './travelTypeOption.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSmile,  } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood, faCity, faPersonBiking, faPersonSkiing, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'


const TravelTypeOption = () => {
        const [activeIcon, setActiveIcon] = useState('');
        
        return (
                <div className='travelTypeOptionContainer'>
                       
                        <div className={`travelTypeIcon ${activeIcon === 'ski' && " active"}`} onClick={() => { setActiveIcon('ski') }}>
                                <FontAwesomeIcon icon={faPersonSkiing} />
                                <span> Ski</span>
                        </div>
                        <div className={`travelTypeIcon ${activeIcon === 'beach' && " active"}`} onClick={() => { setActiveIcon('beach') }}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} />
                                <span> Beach</span>
                        </div>
                        <div className={`travelTypeIcon ${activeIcon === 'relax' && " active"}`} onClick={() => { setActiveIcon('relax') }}>
                                <FontAwesomeIcon icon={faSmile} />
                                <span> Relax</span>
                        </div>
                        <div className={`travelTypeIcon ${activeIcon === 'outdoor' && " active"}`} onClick={() => { setActiveIcon('outdoor') }}>
                                <FontAwesomeIcon icon={faPersonBiking} />
                                <span> Outdoor</span>
                        </div>
                        <div className={`travelTypeIcon ${activeIcon === 'romance' && " active"}`} onClick={() => { setActiveIcon('romance') }}>
                                <FontAwesomeIcon icon={faHeart} />
                                <span> Romance</span>
                        </div >
                        <div className={`travelTypeIcon ${activeIcon === 'city' && " action"}`} onClick={() => { setActiveIcon('city') }}>
                                <FontAwesomeIcon icon={faCity} />
                                <span> City</span>
                        </div>
                        <div className={`travelTypeIcon ${activeIcon === 'food' && " active"}`} onClick={() => { setActiveIcon('food') }}>
                                <FontAwesomeIcon icon={faBowlFood} />
                                <span> Food</span>
                        </div>
                </div>
        )
}

export default TravelTypeOption