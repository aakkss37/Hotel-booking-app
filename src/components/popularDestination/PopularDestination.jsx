import React, {useState} from 'react'
import Cities from './destinationType/Cities'
import MostPopuler from './destinationType/MostPopuler'
import Reagions from './destinationType/Reagions'
import './popularDestination.css'
const PopularDestination = () => {
        const [destinationType, setDtestinationType] = useState('region');

        const destinationListHandler = (destination)=>{
                setDtestinationType(destination);
        }
        return (
                <div className='popularDestinationContainer'>

                        <h1 className='popularDestinationContainerTitle'>Destination you love.</h1>
                        <div className="destinationType">
                                <button className={destinationType ==='region' && 'region action'}  onClick={()=>{destinationListHandler('region')}}>Regions</button>
                                <button className={destinationType === 'city' && 'city action'} onClick={()=>{destinationListHandler('city')}}>Cities</button>
                                <button className={destinationType === 'mostPopuler' && 'mostPopuler action'} onClick={()=>{destinationListHandler('mostPopuler')}}>Most Popular</button>
                        </div>


                        <div className="destinations">
                                {destinationType === 'region' && <Reagions/>}
                                {destinationType === 'city' && <Cities />}
                                {destinationType === 'mostPopuler' && <MostPopuler />}
                        </div>
                </div>
        )
}

export default PopularDestination
