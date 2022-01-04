import portfolioSite from '../assets/portfolio-site.png';
import guessingGame from '../assets/guessing-game.png';
import readingList from '../assets/reading-list.png';
import Button from '../components/shared/Button';
import { FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';

function PortfolioPage() {
    return (
        <main>
            <section className="portfolio" id="portfolio">
                <div className="container portfolio__container">
                <h1>Portfolio.</h1>
                <p>Check out what I've worked on in the past</p>

                <div className="cards">
                    <div className="card">
                      <div className="card__img">
                      <img src={portfolioSite} alt="Portfolio Site"></img>
                      </div>
                        <div className="card__info">
                            <h3>Portfolio site</h3>
                            <p className="tag ">Web Development</p>     
                        </div>            
                        <p className="card__description">The website you're looking at right now. Showcases my skills and what I'm up to.</p>
                        <h4 className='card__subheading'>Tech stack</h4>
                        <ul className="card__list">
                            <li>HTML</li>
                            <li>Sass / SCSS</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                          </ul>
                        <div className="card__buttons">
                          <Button version='black margin-right' children='View live site' goTo='/' />
                        <Button version='black' children={<FaGithub size='16' />} goTo='https://github.com/ColeCaccamise/colecaccamise'></Button>
                        </div>
                        
                    </div>

                <div className="card">
                  <div className="card__img">
                    <img src={guessingGame} alt=""></img>
                  </div>
                    <div className="card__info">
                        <h3>Guessing Game!</h3>
                        <p className="tag">Web Development</p>     
                    </div>   
                    <p className="card__description">Generates a random number, then tells you if your guess is too high or low</p>
                    <h4 className='card__subheading'>Tech stack</h4>
                    <ul className="card__list">
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                      </ul>

                      <div className="card__buttons">
                          <Button version='black margin-right' children='View live site' goTo='https://colesguessinggame.netlify.com' external={true} />
                          <Button version='black' children={<FaGithub size='16' />} goTo='https://github.com/ColeCaccamise/guessinggame' external={true}></Button>

                    </div>
                </div>
                
                <div className="card">
                  <div className="card__img">
                    <img className="img-ui" src={readingList} alt=""></img>
                  </div>
                    <div className="card__info">
                        <h3>Reading List App</h3>
                        <p className="tag">UI Design</p>     
                    </div>   
                    <p className="card__description">A UI I designed for a concept iOS app. Allows you to keep track of books you're reading and find new ones.</p>
                    <h4 className='card__subheading'>Tools used</h4>
                    <ul className="card__list">
                        <li>Mockup (wireframing)</li>
                        <li>Sketch</li>
                      </ul>

                      <div className="card__buttons">
                        <Button version='black margin-right' children={<FaInstagram size='16' />} goTo='https://github.com/ColeCaccamise/colecaccamise'></Button>
                        <Button version='black' children={<FaDribbble size='16' />} goTo='https://github.com/ColeCaccamise/colecaccamise'></Button>
                    </div>
                </div>

            </div>

                </div>
            </section>
        </main>
    )
}

export default PortfolioPage
