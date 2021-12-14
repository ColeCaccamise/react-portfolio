function Footer() {
    let dynamicYear = 2021;
    
    return (
        <>
            <div class="line"></div>
      
                <footer class='footer__content'>
                
                    <div>
                        <p class='copyright'>&copy; <span id="year">{dynamicYear}</span> <a href="/"><span class="footer-name">Cole Caccamise</span></a></p>
                    </div>
                    <div>
                        <a href="https://youtube.com/c/colecaccamise" class="footer__icon" aria-label="YouTube">
                            <i class="fab fa-youtube"></i>
                            </a>
            
                            <a href="https://twitter.com/colecaccamise" class="footer__icon" aria-label="Twitter">
                            <i class="fab fa-twitter"></i>
                            </a>

                            <a href="https://instagram.com/cole.caccamise" class="footer__icon" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                            </a>
                    </div>
                </footer>
        </>
    )
}

export default Footer
