import React from 'react';

export default function Navbar() {
    return (
        <div className="bg-rose-700 text-white p-2 mt-0 fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between ">
              {/* Logo */}
              <a className='logo mt-0 ml-0 w-25 h-25' href='#home'><img src="./images/nav_logo.png"></img></a>

              {/* Navbar */}
              <nav className='navbar flex justify-between items-center'>
                <div id='navbar' className={`flex items-center text-white text-xl transition duration-500`}>
                    <a href="#home" className='flex p-5 hover:underline'>Home</a>
                    <a href="#about" className='flex p-5 hover:underline'>About</a>
                    <a href="#projects" className='flex p-5 hover:underline'>Projects</a>
                    <a href="#contact" className='flex p-5 hover:underline'>Contact</a>
                </div>
                {/* Social Media*/}
                <div className={`flex items-center`}>
                  <a href="https://github.com/murpheycm" target='_blank' rel="" className='p-5 text-white text-xl hover:text-violet-950 transition duration-500'><i className="fa-brands fa-github-alt"></i></a>
                  <a href="https://www.linkedin.com/in/mackenzie-murphey-mph-15554829/" target='_blank' rel="" className='p-5 text-white text-xl hover:text-violet-950 transition duration-500'><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </nav>
            </div>
        </div>
    )
};
