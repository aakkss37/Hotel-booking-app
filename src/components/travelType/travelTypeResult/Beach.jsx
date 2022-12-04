import React from 'react'
import Card from '../../../ui-component/Card'

const Beach = () => {
  const beachPlaces = [
    { id: 1, place: "Calangute Beach, Goa", discription: "Nature | Tranquillity | Senetry", imgUrl: "https://www.planetware.com/wpimages/2020/06/india-goa-best-beaches-calangute-beach.jpg", price: 'Package: Strat at ₹21,990' },
    { id: 2, place: " Dune du Pyla, France", discription: "Relaxation | Food | Senetry", imgUrl: "https://i.guim.co.uk/img/media/e257becfec477105123f06f96db4529966b4035c/0_391_6048_3628/master/6048.jpg?width=1300&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹9,990' },
    { id: 3, place: "Shoal Bay, Antigua", discription: "Snowboarding | Hot Spring | Downhill", imgUrl: "https://i.guim.co.uk/img/media/c97abb399e03210da521d62b3c1aa53d971239d2/0_0_640_384/master/640.jpg?width=620&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹11,990' },
    { id: 4, place: "Palolem Beach, Goa", discription: "Tranquillity | Food | Senetry", imgUrl: "https://www.planetware.com/wpimages/2020/06/india-goa-best-beaches-palolem-beach.jpg", price: 'Package: Strat at ₹10,990' },
    { id: 5, place: "Cala Saona, Formentera", discription: "Winter Sports | Scenery | Mountain", imgUrl: "https://i.guim.co.uk/img/media/39a0319ad39b40f3f112c5a43ee2f0ea885539fd/0_35_640_384/master/640.jpg?width=620&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹17,990' },
    { id: 4, place: "Fakistra, Greece", discription: "Scenery | Tranquillity | Nature", imgUrl: "https://i.guim.co.uk/img/media/1e49369a9b9e5af66fc30d55eba7017ef70c0270/0_0_5136_3083/master/5136.jpg?width=880&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹8,990' },
    { id: 6, place: "Flamenco Beach, Puerto Rico", discription: "Nature | Mountain | Clean air", imgUrl: "https://i.guim.co.uk/img/media/a2edc8ada375122922d71a919834ae0ea8814e9d/0_245_5132_3080/master/5132.jpg?width=620&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹16,990' },
    { id: 7, place: "Playa del Amor (Hidden Beach), Mexico", discription: "Hot Spring | Food | Scenery", imgUrl: "https://i.guim.co.uk/img/media/7beaf09bc20c433c80e54aeb90df80427c3e32f4/0_208_4759_2857/master/4759.jpg?width=880&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹13,990' },
    { id: 8, place: "Bora Bora, French Polynesia", discription: "Relaxation | Food | Senetry", imgUrl: "https://i.guim.co.uk/img/media/f7aa35086e26c6eb6f9f19c9e93bc5d6ef01d2ed/0_286_5120_3072/master/5120.jpg?width=880&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹12,990' },
    { id: 9, place: "St George Beach, Naxos, Greece", discription: "Scenery | Food | Relaxation", imgUrl: "https://i.guim.co.uk/img/media/fe9c428025c142886040c3dcda4625384b9fb4c5/175_0_667_400/master/667.jpg?width=620&quality=85&dpr=1&s=none", price: 'Package: Strat at ₹11,990' },
  ]

  const cards = beachPlaces.map((card) => (
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

export default Beach
