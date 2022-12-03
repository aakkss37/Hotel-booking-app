import './slidingCardContainer.css';
import React from 'react';
import Card from './Card';


const SlidingCardContainer = (props) => {
        return (
                <div className="container">
                        <div className="cards-container">
                                {
                                        props.cards.map((card) => (
                                                <Card   title={card.title}
                                                        content={card.content}
                                                        imgUrl={card.imgUrl} 
                                                />
                                        ))
                                }
                        </div>
                </div>
        );
}

export default SlidingCardContainer;
