import React from 'react';
import "./Navbar.css"
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOptions = <>
                        <li className='primaryFont font-bold focus:outline-none focus:ring-transparent'><Link to="">Home</Link></li>
                        <li className='primaryFont font-bold focus:outline-none'><Link>Contact Us</Link></li>
                        <li className='primaryFont font-bold focus:outline-none'><Link>Dashboard</Link></li>
                        <li className='primaryFont font-bold focus:outline-none'><Link to="/menu">Our Menu</Link></li>
                        <li className='primaryFont font-bold focus:outline-none'><Link>Our Shop</Link></li>
                    </>
    return (
        <div id='navbar-part' className='fixed z-10 text-white'>
            <Container>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                    </div>
                    <a className="lg:text-2xl md:text-1xl sm:text-1xl uppercase font-bold text-[#EEFF25]">Twin Rooftop</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}

                    </ul>
                </div>
                </div>
            </Container>
            
        </div>
    );
};

export default Navbar;