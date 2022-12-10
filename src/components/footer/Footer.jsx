import './footer.css'
import React from 'react'
import image from '../../asset/logo.png'

const Footer = () => {
        return (
                <div className='footerContainer'>
                        <h3><u>Importent Links</u></h3>
                        <div className="importentLinks">
                                <div className="links">
                                        <a href="/link">Countries</a>
                                        <a href="/link">Regions</a>
                                        <a href='/link'>Cities</a>
                                        <a href='/link'>Districts</a>
                                        <a href='/link'>Airports</a>
                                        <a href='/link'>Hotels</a>
                                        <a href='/link'>Places of interest</a>
                                </div>
                                <div className="links">
                                        <a href='/link'>Homes</a>
                                        <a href='/link'>Apartments</a>
                                        <a href='/link'>Resorts</a>
                                        <a href='/link'>Villas</a>
                                        <a href='/link'>Hostels</a>
                                        <a href='/link'>B&Bs</a>
                                        <a href='/link'>Guest houses</a>
                                        <a href='/link'>Unique places to stay</a>
                                        <a href='/link'>All destinations</a>
                                        <a href='/link'>Discover</a>
                                        <a href='/link'>Reviews</a>
                                </div>
                                <div className="links">
                                        <a href='/link'>Unpacked: Travel articles</a>
                                        <a href='/link'>Travel communities</a>
                                        <a href='/link'>Seasonal and holiday deals</a>
                                        <a href='/link'>Car rental</a>
                                        <a href='/link'>Flight finder</a>
                                        <a href='/link'>Restaurant reservations</a>
                                        <a href='/link'>Booking.com for Travel Agents</a>
                                        <a href='/link'>Coronavirus (COVID-19) FAQs</a>
                                        <a href='/link'>About Booking.com</a>
                                        <a href='/link'>Customer Service Help</a>
                                </div>
                                <div className="links">
                                        <a href='/link'>Partner help</a>
                                        <a href='/link'>Careers</a>
                                        <a href='/link'>Sustainability</a>
                                        <a href='/link'>Press center</a>
                                        <a href='/link'>Safety Resource Center</a>
                                        <a href='/link'>Investor relations</a>
                                        <a href='/link'>Terms & conditions</a>
                                        <a href='/link'>Partner dispute</a>
                                        <a href='/link'>How We Work</a>
                                        <a href='/link'>Privacy & cookie statement</a>
                                        <a href='/link'>MSA statement</a>
                                        <a href='/link'>Corporate contact</a>
                                </div>
                        </div>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="foot">
                                <div className="footerImage">
                                        <img src={image} alt="Logo" />
                                        <h4>Made by <span className='name'>Amar Kumar</span></h4>
                                </div>
                                <div className="aksBookings exploreMore">
                                        <h3>AKS BOOKINGS</h3>
                                        <a href='/link'>About Us</a>

                                        <a href='/link'>Privacy Policy</a>

                                        <a href='/link'>Terms & Condition</a>

                                        <a href='/link'>Pricing & Refund Policy</a>

                                        <a href='/link'>Bug Bounty</a>

                                        <a href='/link'>Press Release</a>
                                </div>
                                <div className="service exploreMore">
                                        <h3>SERVICES</h3>
                                        <a href='/link'>Hotel Booking</a>

                                        <a href='/link'>Package Traveling</a>

                                        <a href='/link'>Hanymoon package</a>

                                        <a href='/link'>Solo Trip</a>

                                        <a href='/link'>Advanture</a>
                                </div>
                                <div className="getInTouch exploreMore">
                                        <div className="followMe">
                                                <h1>FOLLOW ME ON </h1>
                                                <div className="socialMedia">
                                                        <a href="/link"> <img src="https://img.icons8.com/ios/50/null/instagram-new--v1.png" alt='insta' /></a>
                                                        <a href="/link"> <img src="https://img.icons8.com/ios/50/null/linkedin-circled--v1.png" alt='linkedin'/></a>
                                                        <a href="/link"> <img src="https://img.icons8.com/ios/50/null/facebook-new.png" alt='facebook'/></a>
                                                        <a href="/link"><img src="https://img.icons8.com/ios/50/null/telegram-app.png" alt='telegram'/></a>
                                                        <a href="/link"> <img src="https://img.icons8.com/ios/50/null/twitter--v1.png" alt='twiter'/></a>
                                                </div>
                                                <div className="contect">
                                                        <p>Phone: <span className='phone'>7992442711</span> </p>
                                                        <p>Email: <span className='email'>amarkumar.sharma.124@gmail.com</span></p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Footer
