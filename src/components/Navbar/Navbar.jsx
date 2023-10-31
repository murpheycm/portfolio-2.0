import React, { useState } from 'react';

export default function Navbar() {
    // const [menuVisible, setMenuVisible] = useState(false);

    // const toggleMenu = () => {
    //     setMenuVisible(!menuVisible);
    // };
    
    return (
      <>
        <div className="bg-purple text-white">
            <div className="container flex items-center justify-between">
              {/* Logo */}
              <a className='logo text-white' href='#home'>Mackenzie Murphey</a>
              {/* Navbar */}
              <nav className='navbar block justify-between'>
{/*              <button onClick={toggleMenu} className='visible lg:invisible mb-2 me-2'><i class="fa-solid fa-bars text-2xl"></i></button> */}
                <div id='navbar' className={`block items-center text-sm`}>
                    <a href="#home" className='block text-white text-xs hover:text-blue-400 transition duration-500'>Home</a>
                    <a href="#about" className='block text-white text-xs hover:text-blue-400 transition duration-500'>About</a>
                    <a href="#projects" className='block text-white text-xs hover:text-blue-400 transition duration-500'>Projects</a>
                    <a href="#contact" className='block text-white text-xs hover:text-blue-400 transition duration-500'>Contact</a>
                </div>
                {/* Social Media*/}
                <div className={`block items-center`}>
                  <a href="" target='_blank' rel="" className='text-white text-xs hover:text-blue-400 transition duration-500'><i class="fa-brands fa-github-alt"></i></a>
                  <a href="" target='_blank' rel="" className='text-white text-xs hover:text-blue-400 transition duration-500'><i class="fa-brands fa-instagram"></i></a>
                  <a href="" target='_blank' rel="" className='text-white text-xs hover:text-blue-400 transition duration-500'><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </nav>
            </div>
        </div>
      </>
    )
};
