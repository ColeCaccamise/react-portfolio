import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar__container">
                <div className="navbar__top-section">
                    <button className="hamburger"><GiHamburgerMenu /></button>
                    <div className="navbar__logo"><a href="/">cole<span className="semibold">caccamise.</span></a></div>
                </div> 
            
                <ul className="navbar__menu">
                    <li><a href="/#about">About</a></li>
                    <li><a href="links">Links</a></li>
                    <li><a href="portfolio">Portfolio</a></li>
                    <li><a href="contact" className="btn btn--primary btn-contact-navbar">Contact</a></li>
                </ul> 
            </div>
        </nav> 
        
    )
}

export default Navbar
