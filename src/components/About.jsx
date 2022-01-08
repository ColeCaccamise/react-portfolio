import { FaYoutube, FaInstagram, FaTwitter, FaGithub,FaDribbble } from 'react-icons/fa';
import Card from './shared/Card';

const creator = {
  'icons': [
    {'url':'https://youtube.com/c/colecaccamise', 'aria': 'YouTube', 'component': <FaYoutube/> },
    {'url':'https://twitter.com/colecaccamise', 'aria': 'Twitter', 'component': <FaTwitter/> },
    {'url':'https://instagram.com/cole.caccamise', 'aria': 'Instagram', 'component': <FaInstagram/> }
  ],
  'heading': 'Content Creator',
  'description': [
    'Most of my time is spent creating tech-related content for YouTube and Instagram.',
    'My goal with my content is to provide valuable reviews while also expressing my creativity with high production quality.',
    'Linked above are all my social platforms, and below is the gear I use to produce everything I share online.'
  ],
  'btns': [
    {
    'version': 'black',
    'children': 'My Gear & Equipment >',
    'goTo': 'https://kit.co/colecaccamise',
    'external': true
    }
  ]
}

const developer = {
  'icons': [
    {'url':'https://github.com/colecaccamise', 'aria': 'YouTube', 'component': <FaGithub/> },
  ],
  'heading': 'Front-end Web Developer',
  'description': [
    "I know how to bring my designs to life with interactive websites, while focusing on a fantastic user experience.",
    "I have a solid understanding of the basics of HTML, CSS, and JavaScript, but also am familiar with Webflow. Additionally, I use Sass and React JS to make the development process easier.",
  ],
  'btns': [
    {'version': 'black',
    'children': 'My Web Projects >',
    'goTo': '/portfolio'},
  ]
}

const designer = {
  'icons': [
    {'url':'https://dribbble.com/colecaccamise', 'aria': 'Dribbble', 'component': <FaDribbble/> },
  ],
  'heading': 'Designer',
  'description': [
    "When I'm not making videos, I love to design websites and logos. The entirety of this website and my personal branding was done by me.",
    "I'm familiar with both Sketch and Figma, but recently have been dabbling with Adobe Illustrator for use designing wallpapers and logos."
  ],
  'btns': [
    {
    'version': 'black',
    'children': 'My Design Work >',
    'goTo': '/portfolio'
    }
  ]
}

const aboutData = [creator,designer,developer];

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
