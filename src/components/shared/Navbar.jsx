import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import * as uuid from 'uuid';

function Navbar() {
    const [shadow, setShadow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function hamburgerClick() {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    window.onresize = () => {
        if(window.innerWidth < 900) {
           setShowMenu(false);
        } 
    }

    // add shadow to navbar
    window.onscroll = () => {
    if (window.pageYOffset > 30) {
        setShadow(true);
    } else {
        setShadow(false);
    }
    };

    // window.addEventListener('resize', () => {
    //     if(window.innerWidth < 900) {
    //         const hamburger = document.querySelector(".hamburger");
    //         hamburger.addEventListener('click', () => {
    //             showMenu ? setShowMenu(false) : setShowMenu(true);
    //         })
    //     }
    // })

    return (
        <header>
        <nav className={`navbar ${shadow ? 'box-shadow' : ''}`}>
            <div className="container navbar__container">
                <div className="navbar__top-section">
                    <button onClick={hamburgerClick} className="hamburger"><GiHamburgerMenu /></button>
                    <div className="navbar__logo"><Link to="/">cole<span className="semibold">caccamise.</span></Link></div>
                </div> 
            
                
                <ul className={`navbar__menu ${showMenu ? 'flex' : ''}`}>
                    <li key={uuid.v4()}><Link to="/#about">About</Link></li>
                    <li key={uuid.v4()}><Link to="links">Links</Link></li>
                    <li key={uuid.v4()}><Link to="portfolio">Work</Link></li>
                    <li key={uuid.v4()}><Link to="contact" className="btn btn--primary btn-contact-navbar">Contact</Link></li>
                </ul> 
            </div>
        </nav> 
        </header>
        
    )
}

export default Navbar
