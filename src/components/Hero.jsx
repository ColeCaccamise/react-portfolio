import profileImage from '../assets/profile.webp';
import Button from './shared/Button';

function Hero() {
    return (
          <section id="hero">
              <div class="container hero__container">

                <div class="hero__text-wrapper">
                  <div class="hero__heading">
                    <p class='hero__intro'>Hey! I'm Cole,</p>
                    <h1>I make videos <span class="break">and take photos</span></h1> 
                    <p class='hero__intro'>in <span class='bold'>Buffalo, NY</span>.</p>
                    
                  </div>
                    <div class="hero__copy">
                    <p>Producing high-quality content about the tech I'm most passionate about.</p>
                   
                  </div>
                  
                    <div class="hero__cta-buttons">
                        <Button children={`Get in touch >`} version='primary' goTo='contact' />
                       <Button children={'Learn more'} version='secondary' goTo='#about' />
                    </div>
                </div>
              
                <div class="hero__img-wrapper">
                    <img class="hero__img img--round" src={profileImage}
                    loading="lazy"
                    alt="Cole Caccamise"></img>
                </div>
                
              </div>
            
          </section>
    )
}

export default Hero;
