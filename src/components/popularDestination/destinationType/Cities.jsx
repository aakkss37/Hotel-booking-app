import React from 'react'

const Cities = () => {
        const cityData = [
                { id: 1, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 2, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 3, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 4, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 5, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 7, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 8, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 9, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 10, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 11, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 12, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 13, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 14, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 15, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 16, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 17, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 18, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 19, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 20, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 21, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 22, head: "City", discription: "13513 Properties", price: "Start at ₹990" },
                { id: 23, head: "City", discription: "13513 Properties", price: "Start at ₹990" },

        ]

        const destinationProperties = cityData.map((item) => (
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

export default Cities