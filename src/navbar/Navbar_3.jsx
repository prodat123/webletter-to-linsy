import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar_3() {
    const navigate = useNavigate();
    function scrollToSection(id, nextPageUrl) {
        
        // Change the page URL
        navigate(nextPageUrl);
    
        // Wait for a short time to ensure the page navigation has started
        
        const section = document.getElementById(id);
        const offset = 150;

        if (section) {
            const topPos = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topPos - offset,
                behavior: "smooth",
            });
        }
        
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={() => scrollToSection('home', '/')}>Home</a></li>
                    <li><a onClick={() => scrollToSection('services', '/')}>Services</a></li>
                    <li><a onClick={() => scrollToSection('about', '/')}>About Us</a></li>
                    <li><Link to={'/prices'}>Prices</Link></li>
                </ul>
                </div>
                <a onClick={() => scrollToSection('home', '/')}><img src={require('../images/soulfit/Soulfit-Logo.png')} width='100' height='60'></img></a>
            </div>
            
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><a onClick={() => scrollToSection('about', '/')}>About Us</a></li>
                        <li><a onClick={() => scrollToSection('services', '/')}>Services</a></li>
                        <li><Link to={'/prices'}>Prices</Link></li>
                        
                        {/* <li><a href="#object3">Object 3</a></li> */}
                    </ul>
                </div>
                <a className="bg-primary text-white w-36 h-full px-4 py-2 rounded text-center font-bold cursor-pointer" onClick={() => scrollToSection('contact', '/')}>Contact Us</a>
            </div>
        </div>
    )
}

export default Navbar_3