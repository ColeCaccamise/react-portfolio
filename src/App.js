import Navbar from './components/shared/Navbar.jsx';
import Footer from './components/shared/Footer.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main className='hero__main'>
      <Hero />
      <Footer />
      </main>
    </>
  );
};

export default App;
