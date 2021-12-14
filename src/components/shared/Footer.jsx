function Footer() {
    let dynamicYear = 2021;
    
    return (
        <>
            <div className="line"></div>
      
                <footer className='footer__content'>
                
                    <div>
                        <p className='copyright'>&copy; <span id="year">{dynamicYear}</span> <a href="/"><span className="footer-name">Cole Caccamise</span></a></p>
                    </div>
                    <div>
                        <a href="https://youtube.com/c/colecaccamise" className="footer__icon" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                            </a>
            
                            <a href="https://twitter.com/colecaccamise" className="footer__icon" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                            </a>

                            <a href="https://instagram.com/cole.caccamise" className="footer__icon" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                            </a>
                    </div>
                </footer>
        </>
    )
}

export default Footer;
