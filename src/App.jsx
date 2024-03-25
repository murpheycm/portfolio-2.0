import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from 'react';

function App() {

  // const [showScroll, setShowScroll] = useState(false);

  // const checkScrollTop = () => {
  //   if (!showScroll && window.pageYOffset > 400) {
  //     setShowScroll(true);
  //   } else if (showScroll && window.pageYOffset <= 400) {
  //     setShowScroll(false);
  //   }
  // };

  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setShowScroll(true);
  //     } else {
  //       setShowScroll(false);
  //     }
  //   };

  //   window.addEventListener('scroll', checkScrollTop);
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', checkScrollTop);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
      <section id='home'>
        <div className='w-100 h-100 bg-gradient-to-br from-slate-900 to-rose-900'>
          <div>
            <Navbar />
          </div>
          <div>
            <Header />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
    
          {showScroll && (
            <div className="scrollTop" onClick={scrollTop}>
              <i class="fa-solid fa-caret-up"></i>
            </div>
          )}
        </div>
      </section>
  );
}

export default App;
