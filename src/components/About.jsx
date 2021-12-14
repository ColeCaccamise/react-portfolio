import { FaYoutube, FaInstagram, FaTwitter, FaGithub,FaLaptopCode,FaDribbble } from 'react-icons/fa'

function About() {
    return (
        <>
        <section id="about">
          <div class="container about__container">
          <div class="about__summary">
            <h2 class="about__heading">About Me.</h2>
            <h3 class="about__subheading">What I can do</h3>
        </div>

        <div class="about__text"></div>
          
          <div class="cards">

            <div class="card">
              <div class="card__icons">
                <a href="https://youtube.com/c/colecaccamise" class="card__icon" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="https://twitter.com/colecaccamise" class="card__icon" aria-label="Twitter">
               <FaTwitter />
              </a>
                <a href="https://instagram.com/cole.caccamise" class="card__icon" aria-label="Instagram">
                 <FaInstagram />
                </a>

              </div>

              <h3>Content Creator</h3>
              <p class="card__description">
                You can find me most often creating tech videos on YouTube, but also sharing product shots on Instagram.</p>

              <p class="card__description">
                My goal with content is to express my creativity as a filmmaker/photographer while also providing informative reviews that hopefully give you a few laughs.
              </p>

              <p class='card__description'>Linked above are all my social platforms, and below is the gear I use to produce everything I share online.</p>
              
              <a href="http://kit.co/colecaccamise" class="card__cta btn btn--black">{'My Gear & Equipment >'}</a>
            </div>
            
            <div class="card">
              <div class="card__icons">
                <a href="https://github.com/colecaccamise" class="card__icon" aria-label='GitHub'>
                  <FaGithub />
                  </a>
                  <a href="portfolio" class="card__icon" aria-label="Portfolio">              
                   <FaLaptopCode />
                    </a>
              </div>


              <h3>Web Developer</h3>
                <p class="card__description">
                  I'm currently a Computer Science student and front-end developer. I most enjoy building websites like this one.
                </p>

                <p class="card__description">
                  While coding is mostly a hobby, it allows me to provide a unique perspective when I'm trying out new gadgets.
                </p>

                <a href="work" class="card__cta btn btn--black">{'See my projects >'}</a>
            </div>

            <div class="card">
              <div class="card__icons">
                <a href="https://dribbble.com/colecaccamise" class="card__icon" aria-label="Dribbble">
                  <FaDribbble />
                </a>

              </div>

              <h3>Designer</h3>
              <p class="card__description">
                I like to design clean interfaces for web and mobile sites, personal branding material, and wallpapers.
              </p>

              <p class="card__description">
                I like to include my design work within my content, as you may have seen my wallpapers that pop up when talking about tech gadgets. 
              </p>

              <p class="card__description">
                If you want them for yourself, they're available for download <a class="underline " href="/wallpapers">here</a>.
              </p>

              <a href="portfolio" class="card__cta btn btn--black">{'See my work >'}</a>
            </div>


          </div>
        </div>
        </section>
        </>
    )
}

export default About
