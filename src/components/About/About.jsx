import React from 'react';

export default function About() {
    return (
        <section id='about'>
            <div className="flex">
                <div className="w-screen h-auto">
                    <div className="w-3/6 m-auto">
                        <h1 className='text-white text-center text-4xl'>Welcome!</h1>
                        <p className='text-white text-center mt-5'>
                            My name is Mackenzie and I am a full-stack web developer and recent graduate of the University of Richmond's Full-Stack Web Developer bootcamp.<br></br>
                            The majority of my experience is in front-end web development and database management.<br></br>
                            See my work and experience below!
                        </p>
                    </div>
                </div>
            </div>
            {/* Cards*/}
            <div className="grid-cols-1 lg:grid-cols-4">
                <div className="block justify-around space-y-10 space-x-0 mt-32 lg:flex lg:space-x-10 lg:mr-4 lg:ml-4 lg:space-y-0">
                    <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-js"></i>
                        </h1>
                        <p className='p-5 text-white'>Javascript</p>
                    </div>
                    <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-python"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            Python
                        </p>
                    </div>
                    <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-html5"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            HTML/CSS
                        </p>
                    </div>
                    <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-react"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            React
                        </p>
                    </div>
                    <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa fa-github"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            Github
                        </p>
                    </div>
                </div>
            </div>
            </section>
    )
};
