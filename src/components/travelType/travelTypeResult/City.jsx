import React from 'react'
import Card from '../../../ui-component/Card'

const City = () => {
  const romanticPlaces = [
    { id: 1, place: "Dubai ", discription: "Snowboarding | Hot Spring | Downhill", imgUrl: "https://www.atlasandboots.com/wp-content/uploads/2021/10/Dubai-at-night.jpg", price: 'Package: Strat at ₹11,990' },
    { id: 2, place: "New York ", discription: "Nature | Tranquillity | Senetry", imgUrl: "https://www.atlasandboots.com/wp-content/uploads/2020/11/New-York-best-cities.jpg", price: 'Package: Strat at ₹21,990' },
    { id: 3, place: "Moscow", discription: "Scenery | Tranquillity | Nature", imgUrl: "https://www.atlasandboots.com/wp-content/uploads/2020/11/Moscow-best-city.jpg", price: 'Package: Strat at ₹8,990' },
    { id: 4, place: "Tokyo", discription: "Relaxation | Food | Senetry", imgUrl: "https://www.atlasandboots.com/wp-content/uploads/2020/11/Tokyo-is-the-fouth-brst-city-in-the-world.jpg", price: 'Package: Strat at ₹12,990' },
    { id: 5, place: "Bali", discription: "Relaxation | Food | Senetry", imgUrl: "https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg", price: 'Package: Strat at ₹9,990' },
    { id: 6, place: "France", discription: "Winter Sports | Scenery | Mountain", imgUrl: "https://www.travelandleisure.com/thmb/wwUPgdpCUuD5sAPFLQf4YasjH0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicago-illinois-CHITG0221-e448062fc5164da0bba639f9857987f6.jpg", price: 'Package: Strat at ₹17,990' },
    { id: 7, place: "Aspen Snowmass, USA", discription: "Nature | Mountain | Clean air", imgUrl: "https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/AdobeStock_229546037-1352x900.jpeg", price: 'Package: Strat at ₹16,990' },
    { id: 8, place: "Mosko", discription: "Tranquillity | Food | Senetry", imgUrl: "https://media.timeout.com/images/105211701/image.jpg", price: 'Package: Strat at ₹10,990' },
    { id: 9, place: "Mumbai", discription: "Scenery | Food | Relaxation", imgUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/c8/3a.jpg", price: 'Package: Strat at ₹11,990' },
    { id: 10, place: "Banglore", discription: "Hot Spring | Food | Scenery", imgUrl: "https://www.tripsavvy.com/thmb/QS7YoZPIIgBNklph1Cjeq3mDgUk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-536116268-5b5d74e846e0fb0050adcf3b.jpg", price: 'Package: Strat at ₹13,990' },

  ]

  const cards = romanticPlaces.map((card) => (
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

export default City