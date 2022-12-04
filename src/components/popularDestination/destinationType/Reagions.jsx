import React from 'react'
import './destinationContainer.css'
const Reagions = () => {

        const regionsData = [
                { id: 1, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 2, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 3, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 4, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 5, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 7, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 8, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 9, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 10, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 11, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 12, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 13, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 14, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 15, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 16, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 17, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 18, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 19, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 20, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 21, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 22, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 23, head: "Regions", discription: "13513 Properties", price: "Start at ₹990" },
                
        ]

        const destinationProperties = regionsData.map((item) => (
                <div className="destinationProperties" >
                        <h4> <u>{item.head} </u></h4>
                        <p className='discription'>{item.discription}</p>
                        <p className='price'>{item.price}</p>
                </div >
        ))

        return (
                <div className='destinationContainer'>
                        {destinationProperties}
                </div>
        )
}

export default Reagions