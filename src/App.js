import Navbar from './components/shared/Navbar.jsx';
import Footer from './components/shared/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <main className='hero__main'>
      <Hero />
      <About />
      <Footer />
      </main>
    </>
  );
};

export default App;
