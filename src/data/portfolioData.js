import { FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';
import portfolioSite from '../assets/portfolio-site.png';
import guessingGame from '../assets/guessing-game.png';
import readingList from '../assets/reading-list.png';

const portfolioData = [{
  'img': {
    'src': portfolioSite,
    'alt': 'Portfolio site'
  },
  'tag' : 'Web Development',
  'heading': 'Portfolio site',
  'description': [
    "The website you're looking at right now. Showcases my skills and what I'm up to."
  ],
  'subheading': {
    'heading': 'Tech Stack',
    'list': ['HTML', 'Sass/SCSS', "JavaSript", "React JS"]
  },
  'btns': [
    { 'version': 'black margin-right',
    'children': 'View live site',
    'goTo': '/',
    'external': true},
    {'version': 'black',
    'children': <FaGithub />,
    'goTo': 'https://github.com/ColeCaccamise/react-portfolio',
    'external': true}
  ]
},
{
  'img': {
    'src': guessingGame,
    'alt': 'Guessing Game!'
  },
  'tag' : 'Web Development',
  'heading': 'Guessing Game!',
  'description': [
    "Generates a random number, then tells you if your guess is too high or low"
  ],
  'subheading': {
    'heading': 'Tech Stack',
    'list': ['HTML', 'Sass/SCSS', "JavaSript"]
  },
  'btns': [
    { 'version': 'black margin-right',
    'children': 'View live site',
    'goTo': 'https://colesguessinggame.netlify.app/',
    'external': true},
    {'version': 'black',
    'children': <FaGithub />,
    'goTo': 'https:/github.com/ColeCaccamise/guessinggame',
    'external': true}
  ]},
  {
  'img': {
    'src': readingList,
    'alt': 'Reading List App'
  },
  'tag' : 'UI Design',
  'heading': 'Reading List App',
  'description': [
    "A UI I designed for a concept iOS app. Allows you to keep track of books you're reading and find new ones."
  ],
  'subheading': {
    'heading': 'Tools used',
    'list': ['Mockup (wireframing)', 'Sketch']
  },
  'btns': [
    { 'version': 'black margin-right',
    'children': <FaInstagram />,
    'goTo': 'https://www.instagram.com/p/CO5HS7IAEox/',
    'external': true},
    {'version': 'black',
    'children': <FaDribbble />,
    'goTo': 'https://dribbble.com/shots/15660204-Book-Reading-List-Mobile-App',
    'external': true}
  ]
  
},
];

export default portfolioData;