import profileImage from '../assets/profile.JPG';
import Button from './shared/Button';

function Hero() {
    return (
          <section id="hero">
              <div className="container hero__container">

                <div className="hero__text-wrapper">
                  <div className="hero__heading">
                    <p className='hero__intro'>Hey! I'm Cole,</p>
                    <h1>a Creative <span className="break">&
                     Designer</span></h1> 
                    <p className='hero__intro'>from <span className='bold'>Buffalo, NY</span>.</p>
                    
                  </div>
                    <div className="hero__copy">
                    <p>I produce high-quality tech content and design interfaces that provide fantastic user experience.</p>
                   
                  </div>
                  
                    <div className="hero__cta-buttons">
                        <Button children={`Reach out >`} version='primary' goTo='contact' />
                       <Button children={'Learn more'} version='secondary' goTo='#about' />
                    </div>
                </div>
              
                <div className="hero__img-wrapper">
                    <img className="hero__img img--round" src={profileImage}
                    loading="lazy"
                    alt="Cole Caccamise"></img>
                </div>
                
              </div>
            
          </section>
    )
}

export default Hero;
