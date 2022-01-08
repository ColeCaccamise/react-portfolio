import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import * as uuid from 'uuid';
import logo from '../../assets/logo.svg';

function Navbar() {
    const [shadow, setShadow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function hamburgerClick() {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    function closeHamburger() {
        setShowMenu(false);
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

    return (
        <header>
        <nav className={`navbar ${shadow ? 'box-shadow' : ''}`}>
            <div className="container navbar__container">
                <div className="navbar__top-section">
                    <button onClick={hamburgerClick} className="hamburger"><GiHamburgerMenu /></button>
                    <div className="navbar__logo"><Link onClick={closeHamburger}  to="/"><img src={logo} width='250rem' alt='colecaccamise logo' /></Link></div>
                </div> 
            
                
                <ul className={`navbar__menu ${showMenu ? 'flex' : ''}`}>
                    <li key={uuid.v4()}><a onClick={closeHamburger} href="/#about">About</a></li>
                    <li key={uuid.v4()}><Link onClick={closeHamburger}  to="links">Links</Link></li>
                    <li key={uuid.v4()}><Link onClick={closeHamburger}  to="portfolio">Portfolio</Link></li>
                    <li key={uuid.v4()}><Link onClick={closeHamburger}  to="contact" className="btn btn--primary btn-contact-navbar">Contact</Link></li>
                </ul> 
            </div>
        </nav> 
        </header>
        
    )
}

export default Navbar
