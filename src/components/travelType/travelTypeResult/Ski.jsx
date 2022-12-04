import React from 'react'
import Card from '../../../ui-component/Card'
import './travelTypeResult.css'

const Ski = () => {
        const skiingPlaces = [
                {id: 1, place: " Whistler Blackcomb, Canada", discription: "Relaxation | Food | Senetry", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-canada-british-columbia-whistler-blackcomb.jpg", price: 'Package: Strat at ₹9,990'},
                { id: 2, place: "Courchevel, France", discription: "Snowboarding | Hot Spring | Downhill", imgUrl: "https://www.planetware.com/wpimages/2019/11/world-top-ski-resorts-2019-2020-courchevel.jpg", price: 'Package: Strat at ₹11,990' },
                { id: 3, place: "Zermatt, Switzerland", discription: "Winter Sports | Scenery | Mountain", imgUrl: "https://www.planetware.com/wpimages/2019/11/world-top-ski-resorts-2019-2020-zermatt.jpg", price: 'Package: Strat at ₹17,990' },
                { id: 4, place: "Vail Mountain, USE", discription: "Scenery | Tranquillity | Nature", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-united-states-colorado-vail-mountain-resort.jpg", price: 'Package: Strat at ₹8,990' },
                { id: 5, place: "Aspen Snowmass, USA", discription: "Nature | Mountain | Clean air", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-united-states-colorado-aspen-snowmass.jpg", price: 'Package: Strat at ₹16,990' },
                { id: 6, place: " Val d'Isere, France", discription: "Hot Spring | Food | Scenery", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-france-savoie-val-disere.jpg", price: 'Package: Strat at ₹13,990' },
                { id: 7, place: "Cortina D'Ampezzo, Italy", discription: "Relaxation | Food | Senetry", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-italy-veneto-cortina-dampezzo.jpg", price: 'Package: Strat at ₹12,990' },
                { id: 8, place: "Niseko, Japan", discription: "Scenery | Food | Relaxation", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-japan-hokkaido-niseko.jpg", price: 'Package: Strat at ₹11,990' },
                { id: 9, place: "Chamonix, France", discription: "Tranquillity | Food | Senetry", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-france-haute-savoie-chamonix.jpg", price: 'Package: Strat at ₹10,990' },
                { id: 10, place: "St. Anton, Austria", discription: "Nature | Tranquillity | Senetry", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-austria-arlberg-st-anton.jpg", price: 'Package: Strat at ₹21,990' },

        ]

        const cards = skiingPlaces.map((card) => (
                <Card
                        imgUrl={card.imgUrl}
                        title={card.place}
                        content={card.discription}
                        price={card.price}
                />
        ))

        return (
                <div className='travelTypeCardContainer'>
                        {cards}
                </div>
        )
}

export default Ski
