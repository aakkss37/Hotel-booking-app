import './card.css';

import React from 'react';

const Card = (props) => {
        return (
                <div className="card">
                        <img src={props.imgUrl}
                                alt={props.alt || 'Image'} />
                        <div className="card-content">
                                <h2>{props.title}</h2>
                                <p>{props.content}</p>
                                {props.price && <h4>Rs.`${props.price}`</h4>}
                        </div>
                </div>


        );
}

export default Card;
