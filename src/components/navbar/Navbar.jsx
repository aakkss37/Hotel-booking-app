import React from 'react';
import "./navbar.css"
import logo from '../../asset/logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

        const navigate = useNavigate()                          //on search click.. redirect to hotel-list page
        const logoClickHandler = ()=>{
                navigate('/')
        }

        return (
                <div className='navbar'>
                         <div className="navContainer">
                                
                                <span className="logo" onClick={logoClickHandler}>
                                        <img src={logo} alt="logo" className="logo" />
                                        <h1>AKS Booking</h1>
                                </span>
                                
                                <div className="navItems">
                                        <button className="navButton regester">Regester</button>
                                        <button className="navButton login">Login</button>
                                </div>
                         </div>
                </div>
        );
}

export default Navbar;
