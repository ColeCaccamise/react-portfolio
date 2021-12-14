import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    let dynamicYear = new Date().getFullYear();
    
    return (
        <footer class="footer">
        <div class="container footer__container">
        <div class="line"></div>
      
        <div class='footer__content'>
        
            <div>
                <p class='copyright'>&copy; <span id="year">{dynamicYear}</span> <a href="/"><span class="footer-name">Cole Caccamise</span></a></p>
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
