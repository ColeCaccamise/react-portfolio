import Card from './shared/Card';
import aboutData from '../data/aboutData';

function About() {
    return (
        <>
        <section id="about">
          <div className="container about__container">
          <div className="about__summary">
            <h2 className="about__heading">About Me.</h2>
            <h3 className="about__subheading">What I can do</h3>
        </div>

        <div className="about__text"></div>
          
          <div className="cards">

          {aboutData.map(data => {
                  return (<Card cardInfo={data} />) 
                })}

          </div>
        </div>
        </section>
        </>
    )
}

export default About
