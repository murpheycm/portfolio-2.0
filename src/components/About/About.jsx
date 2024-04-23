import React from 'react';

export default function About() {
    return (
        <section class="mt-60" id='about' >
            <div className="flex">
                <div className="flex flex-row mb-4 w-screen h-auto">
                    <div className="items-center my-auto mx-auto">
                        <img 
                            src="./images/mm_retro.png"
                            id='about_image'
                            className="rounded-full" 
                            alt="" ></img>
                    </div>
                    <div className="items-center m-5 py-10 pr-20 pl-0">
                        <h1 className='text-white text-left'>Welcome!</h1>
                        <p className='text-white text-left flex'>
                            My name is Mackenzie!<br></br>
                            Made with Coffee in Richmond, VA.<br></br>
                            Biology nerd with a love for brain puzzles, regular puzzles, design, and bad AI-generated images.<br></br>
                            A full-stack web developer with a background in Microbiology, DNA Sequencing, and Bioinformatics.<br></br>
                            The majority of my programming experience is in front-end web development, data analysis, engineering, and query administration.<br></br>
                            I aim to help businesses by creating user-centric design and experiences.<br></br>
                            Areas of interest, which you will see below, include: <br></br>
                            UX & Graphic Design, Data Analyses and Visualization, Photography and fun with CSS.<br></br>
                            Take a gander and reach out if you would like to talk more!<br></br>
                            XO - Mack
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards*/}
            <div className="grid-cols-1 lg:grid-cols-4">
                <div className="block justify-evenly space-y-5 space-x-0 mt-32 lg:flex lg:space-x-0  lg:space-y-0">
                    <div className="w-screen text-center lg:w-auto">
                        <h1 className='mt-3 p-2 text-white text-8xl'>
                            <i className="fa-brands fa-js"></i>
                        </h1>
                        <p className='p-5 text-white font-bold '>Javascript</p>
                    </div>
                    <div className="w-screen text-center lg:w-auto">
                        <h1 className='mt-3 p-2 text-white text-8xl'>
                            <i className="fa-brands fa-python"></i>
                        </h1>
                        <p className='p-5 text-white font-bold'>Python</p>
                    </div>
                    <div className="w-screen text-center lg:w-auto">
                        <h1 className='mt-3 p-2 text-white text-8xl'>
                            <i className="fa-brands fa-html5"></i>
                        </h1>
                        <p className='p-5 text-white font-bold'>HTML/CSS</p>
                    </div>
                    <div className="w-screen text-center lg:w-auto">
                        <h1 className='mt-3 p-2 text-white text-8xl'>
                            <i className="fa-brands fa-react"></i>
                        </h1>
                        <p className='p-5 text-white font-bold'>React</p>
                    </div>
                </div>
            </div>
            </section>
    )
};
