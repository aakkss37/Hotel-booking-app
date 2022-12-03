import "./featured.css"
import React from 'react'
import SlidingCardContainer from "../../ui-component/SlidingCardContainer"
const Featured = () => {

        const cardsData = [
                { id: 1, title: 'Delhi', content: '371 Properties', imgUrl: 'https://1.bp.blogspot.com/-az09PefXMpQ/UdRMg81w8QI/AAAAAAAAATg/tEFq4Pp9LRY/s575/lotus+temple.jpg' },
                { id: 2, title: 'Mumbai', content: '412 Properties', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Marine_Lines_Mumbai_2021.jpg' },
                { id: 3, title: 'Kolkata', content: '173 Properties', imgUrl: 'https://static.toiimg.com/photo/58475411.cms' },
                { id: 4, title: 'Hydrabad', content: '354 Properties', imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/11/f4/ff/11/charminar.jpg' },
                { id: 5, title: 'Banglore', content: '382 Properties', imgUrl: 'https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?b=1&s=170667a&w=0&k=20&c=qxO3Yl7LBs5jewoI5eAWsLrVtEw0QyH4RdKwyZrALCg=' },
                { id: 6, title: 'Ahmadabad', content: '117 Properties', imgUrl: 'https://www.jagranimages.com/images/30_01_2019-surat_gujarat_18902852.jpg' },
                { id: 7, title: 'Chennai', content: '221 Properties', imgUrl: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1450353.jpg&fm=jpg' },
                { id: 8, title: 'Coimbatore', content: '83 Properties', imgUrl: 'https://img.veenaworld.com/wp-content/uploads/2021/06/Adiyogi-Shiva-Statue-Coimbatore-Entry-Fee-Timings-Directions-scaled.jpg' },
                { id: 9, title: 'Patna', content: '71 Properties', imgUrl: 'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2015/11/Patna_Museum_-_General_View_9221515542.jpg' },
                { id: 10, title: 'Ranchi', content: '131 Properties', imgUrl: 'https://qph.cf2.quoracdn.net/main-qimg-a5721be4626d09635237685a36bdd228-lq' },
                { id: 11, title: 'Kerala', content: '124 Properties', imgUrl: 'https://traveldudes.com/wp-content/uploads/2020/09/Kerala_Main.jpg' },
                { id: 12, title: 'Goa', content: '307 Properties', imgUrl: 'https://images.news18.com/ibnlive/uploads/2022/01/goa-2.jpg' },
        ]

        return (
                <SlidingCardContainer cards = {cardsData}/>
        )
}

export default Featured
