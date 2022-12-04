import React from 'react'

const MostPopuler = () => {
        const mostPopulerData = [
                { id: 1, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 2, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 3, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 4, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 5, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 7, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 8, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 9, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 10, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 11, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 12, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 13, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 14, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 15, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 16, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 17, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 18, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 19, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 20, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 21, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 22, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 23, head: "Most Populer", discription: "13513 Properties", price: "Start at ₹990" },

        ]

        const destinationProperties = mostPopulerData.map((item) => (
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

export default MostPopuler