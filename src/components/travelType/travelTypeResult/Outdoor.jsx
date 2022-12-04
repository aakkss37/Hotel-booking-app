import React from 'react'
import Card from '../../../ui-component/Card'

const Outdoor = () => {
  const outingPlaces = [
    { id: 1, place: "Bir-Billing", discription: "Nature | Tranquillity | Senetry", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-29.jpg", price: 'Package: Strat at ₹21,990' },
    { id: 2, place: "Rajsthan", discription: "Snowboarding | Hot Spring | Downhill", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-1-18.jpg", price: 'Package: Strat at ₹11,990' },
    { id: 3, place: "Rishikesh", discription: "Winter Sports | Scenery | Mountain", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/03/Webp.net-compress-image-7-6.jpg", price: 'Package: Strat at ₹17,990' },
    { id: 4, place: "Ladakh", discription: "Scenery | Tranquillity | Nature", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/06/Trekkers-passing-through-the-Zanskar-Lake.jpg", price: 'Package: Strat at ₹8,990' },
    { id: 5, place: "Manali", discription: "Nature | Mountain | Clean air", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-3-22.jpg", price: 'Package: Strat at ₹16,990' },
    { id: 6, place: "Gulmarg", discription: "Hot Spring | Food | Scenery", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-4-20.jpg", price: 'Package: Strat at ₹13,990' },
    { id: 7, place: "Dandeli", discription: "Relaxation | Food | Senetry", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/07/Dandeli.jpg", price: 'Package: Strat at ₹12,990' },
    { id: 8, place: "Kerala", discription: "Scenery | Food | Relaxation", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-6-14.jpg", price: 'Package: Strat at ₹11,990' },
    { id: 9, place: "The Maldives", discription: "Tranquillity | Food | Senetry", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-7-12.jpg", price: 'Package: Strat at ₹10,990' },
    { id: 10, place: "Goa", discription: "Relaxation | Food | Senetry", imgUrl: "https://static-blog.treebo.com/wp-content/uploads/2018/06/See-Goa-in-a-whole-new-way-with-paragliding.jpg", price: 'Package: Strat at ₹9,990' },

  ]

  const cards = outingPlaces.map((card) => (
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

export default Outdoor
