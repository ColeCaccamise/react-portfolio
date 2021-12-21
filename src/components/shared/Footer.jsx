import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    let dynamicYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
        <div className="container footer__container">
        <div className="line"></div>
      
        <div className='footer__content'>
        
            <div>
                <p className='copyright'>&copy; <span id="year">{dynamicYear}</span> <Link to="/"><span className="footer-name">Cole Caccamise</span></Link></p>
            </div>
            <div>
                <a href="https://youtube.com/c/colecaccamise" className="footer__icon" aria-label="YouTube">
                    <FaYoutube />
                    </a>
    
                    <a href="https://twitter.com/colecaccamise" className="footer__icon" aria-label="Twitter">
                    <FaTwitter />
                    </a>

                    <a href="https://instagram.com/cole.caccamise" className="footer__icon" aria-label="Instagram">
                    <FaInstagram />
                    </a>


            </div>
        </div>
        </div>
      </footer>
    )
}

export default Footer;
