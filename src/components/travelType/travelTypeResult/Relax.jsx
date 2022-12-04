import React from 'react'
import Card from '../../../ui-component/Card'

const Relax = () => {
  const relaxingPlaces = [
    { id: 1, place: "Spiti Valley, India", discription: "Nature | Tranquillity | Senetry", imgUrl: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/04/Things-to-do-in-Spiti-Valley-Himachal-Pradesh.jpg?w=926&ssl=1", price: 'Package: Strat at ₹21,990' },
    { id: 2, place: "Prince Edward Island ", discription: "Snowboarding | Hot Spring | Downhill", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/AdobeStock_69967440-1363x900.jpeg", price: 'Package: Strat at ₹11,990' },
    { id: 3, place: "Vienna, Austria", discription: "Winter Sports | Scenery | Mountain", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/AdobeStock_88283237-1440x824.jpeg", price: 'Package: Strat at ₹17,990' },
    { id: 4, place: "Takayama, Japan", discription: "Scenery | Tranquillity | Nature", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/AdobeStock_231308552-1200x900.jpeg", price: 'Package: Strat at ₹8,990' },
    { id: 5, place: "Aspen Snowmass, USA", discription: "Nature | Mountain | Clean air", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/AdobeStock_229546037-1352x900.jpeg", price: 'Package: Strat at ₹16,990' },
    { id: 6, place: "Montecatini Terme, Tuscany, Italy ", discription: "Hot Spring | Food | Scenery", imgUrl: "https://www.planetware.com/wpimages/2018/10/top-ski-resorts-world-france-savoie-val-disere.jpg", price: 'Package: Strat at ₹13,990' },
    { id: 7, place: "Malta", discription: "Relaxation | Food | Senetry", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/micaela-parente-Jd2XVXLQ0U-unsplash-1350x900.jpg", price: 'Package: Strat at ₹12,990' },
    { id: 8, place: "Glacier National Park, Montana", discription: "Scenery | Food | Relaxation", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/justin-pritchard-d8D9F5MVngk-unsplash-1402x900.jpg", price: 'Package: Strat at ₹11,990' },
    { id: 9, place: "The Maldives", discription: "Tranquillity | Food | Senetry", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/ishan-seefromthesky-Fj_39H4NeOo-unsplash-1440x809.jpg", price: 'Package: Strat at ₹10,990' },
    { id: 10, place: "Bali", discription: "Relaxation | Food | Senetry", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/guillaume-marques-bnMPFPuSCI0-unsplash-1125x900.jpg", price: 'Package: Strat at ₹9,990' },

  ]

  const cards = relaxingPlaces.map((card) => (
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

export default Relax