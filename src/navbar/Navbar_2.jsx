import React from 'react'

function Navbar_2() {

    function scrollToSection(id) {
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
    <div className="navbar bg-base-100 drop-shadow-xl z-50 mb-4">
        <div className="flex-1">
            <a className="normal-case text-xl w-32"><img src={require("../images/meetjaphokee/Mee Tjap Hokee logo.png")} className="w-full"></img></a>
        </div>
        
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a onClick={() => scrollToSection('services')}>Our Services</a></li>
            <li><a onClick={() => scrollToSection('contact')} className='font-bold'>Contact Us</a></li>
            {/* <li>
                <details>
                <summary>
                    Parent
                </summary>
                <ul className="p-2 bg-base-100">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar_2