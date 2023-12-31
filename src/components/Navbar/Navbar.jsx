import React, { useState } from 'react';

export default function Navbar() {
    return (
        <div className="bg-purple text-white">
            <div className="container flex items-center justify-between">
              {/* Logo */}
              <a className='logo text-white text-3xl' href='#home'>Mackenzie Murphey</a>
              {/* Navbar */}
              <nav className='navbar flex justify-between items-center'>
                <div id='navbar' className={`flex items-center text-sm`}>
                    <a href="#home" className='flex p-5 text-white text-xl hover:text-blue-400 transition duration-500'>Home</a>
                    <a href="#about" className='flex p-5 text-white text-xl hover:text-blue-400 transition duration-500'>About</a>
                    <a href="#projects" className='flex p-5 text-white text-xl hover:text-blue-400 transition duration-500'>Projects</a>
                    <a href="#contact" className='flex p-5 text-white text-xl hover:text-blue-400 transition duration-500'>Contact</a>
                </div>
                {/* Social Media*/}
                <div className={`flex items-center`}>
                  <a href="https://github.com/murpheycm" target='_blank' rel="" className='p-5 text-white text-xl hover:text-blue-400 transition duration-500'><i className="fa-brands fa-github-alt"></i></a>
                  <a href="https://www.linkedin.com/in/mackenzie-murphey-mph-15554829/" target='_blank' rel="" className='p-5 text-white text-xl hover:text-blue-400 transition duration-500'><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </nav>
            </div>
        </div>
    )
};
