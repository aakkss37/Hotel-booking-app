import './travelTypeOption.css'
import 'font-awesome/css/font-awesome.min.css';

import React from 'react'

const TravelTypeOption = ()=> {
        return (
                <div className='travelTypeOptionContainer'>

                        <div className="travelTypeOptionContainer__icon">
                                <i class="fa-regular fa-person-skiing-nordic"></i>                        </div>
                        <div className="travelTypeOptionContainer__icon">
                                <i className="fa fa-spinner fa-spin"/>
                        </div>
                        <div className="travelTypeOptionContainer__icon">
                                <i class="fa-light fa-umbrella-beach"></i>                        </div>
                        <div className="travelTypeOptionContainer__icon">
                                <i class="fa-light fa-face-smile-relaxed"></i>                        </div>
                        <div className="travelTypeOptionContainer__icon">
                                <i className="fa fa-spinner fa-spin"/>
                        </div>
                        <div className="travelTypeOptionContainer__icon">
                                <i className="fa fa-spinner fa-spin"/>
                        </div>
                        <div className="travelTypeOptionContainer__icon">
                                <i className="fa fa-spinner fa-spin"/>
                        </div>
                        <div className="travelTypeOptionContainer__icon">
                                <i className="fa fa-spinner fa-spin"/>
                        </div>
                        

                </div>
        )
}

export default TravelTypeOption