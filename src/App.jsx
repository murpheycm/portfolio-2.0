import './App.css';
import './index.css';
import Navbar from '../components/Navbar.jsx';
import Header from '';
import About from '';
import Projects from '';
import Contact from '';
import Footer from '';
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
    <>
      <section id='home'>
        <div className='w-100 h-100 bg-gradient-to-b from-indigo-950 to-violet-700'>
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
    
{/*           {showScroll && (
            <div className="scrollTop" onClick={scrollTop}>
              <i class="fa-solid fa-caret-up"></i>
            </div>
          )} */}
        </div>
      </section>
    </>
  );
}

export default App;
