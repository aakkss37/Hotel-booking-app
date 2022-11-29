import React from 'react';
import "./navbar.css"
import logo from '../asset/logo.png'

const Navbar = () => {
        return (
                <div className='navbar'>
                         <div className="navContainer">
                                
                                <span className="logo">
                                        <img src={logo} alt="Logo" className="src" />
                                        <h1>AKS Residency</h1>
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
