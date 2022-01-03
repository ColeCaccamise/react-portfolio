import Navbar from './components/shared/Navbar.jsx';
import Footer from './components/shared/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About';
import LinksPage from './pages/LinksPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import WallpapersPage from './pages/WallpapersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
          
          <main className='hero__main'>
          <Hero />
          <About />
          </main>
          </>
        } />

        <Route path='/links' element={<LinksPage />} />

        <Route path='/portfolio' element={<PortfolioPage />} />

        <Route path='/contact' element={<ContactPage />} />

        <Route path='/wallpapers' element={<WallpapersPage />} />

        <Route path='*' element={
         <NotFoundPage />
        } />
      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
