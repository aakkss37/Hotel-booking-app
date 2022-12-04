import React from 'react'
import './subscribe.css'

const Subscribe = () => {
        return (
                <div className='subsribeContainer'>
                        <div className="subscribeContainerText">
                                <h1>Save time, Save money!</h1>
                                <p>Sign up and we'll send the best deals to you.</p>

                        </div>
                        <form action="#" method='POST' >
                                <input type="email" placeholder='Youe email' />
                                <button type='submit'>Subscribe</button>
                        </form>
                </div>
        )
}

export default Subscribe