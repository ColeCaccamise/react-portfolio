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
    'You can find me most often creating tech videos on YouTube, but also sharing product shots on Instagram.',
    'My goal with content is to express my creativity as a filmmaker/photographer while also providing informative reviews that hopefully give you a few laughs.',
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
    "I know how to turn my designs to life and built websites.",
    "I know HTML/CSS/JS, but also ReactJS, which this website is built with."
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
    "I design interfaces for both mobile and web apps using Sketch and Figma.",
    'I also use Adobe Illustrator to design wallpaper and logos.'
  ],
  'btns': [
    {
    'version': 'black',
    'children': 'My Design Work >',
    'goTo': '/portfolio'
    }
  ]
}

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

            <Card cardInfo={creator} />
            <Card cardInfo={designer} />
            <Card cardInfo={developer} />

          </div>
        </div>
        </section>
        </>
    )
}

export default About
