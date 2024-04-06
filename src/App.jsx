import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import React from 'react';

function App() {
  return (
      <section id='home'>
        <div className='w-100 h-100 bg-gradient-to-b from-rose-700 to-rose-900'>
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
        </div>
      </section>
  );
}

export default App;
