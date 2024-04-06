import React from 'react';

export default function About() {
    return (
        <section id='about'>
            <div className="flex">
                <div className="w-screen h-auto">
                    <div className="w-3/6 m-auto p-10">
                        <h1 className='text-white text-center text-4xl'>Welcome!</h1>
                        <div>
                            <img 
                                src="./images/MM.png" 
                                alt="DNA sequencing which includes a mountain, bacteria, phage, and bird to symbolize how DNA encompasses everything." ></img>
                        </div>
                        <p className='text-white text-center mt-5'>
                            It's me, Mackenzie!<br></br>
                            Made with Coffee in Richmond, VA.<br></br>
                            Biology nerd with a love for brain puzzles, regular puzzles, design, and bad AI-generated images.<br></br>
                            A full-stack web developer with a background in Microbiology, DNA Sequencing, and Bioinformatics.<br></br>
                            The majority of my programming experience is in front-end web development, data analysis and engineering, and SQL database administration.<br></br>
                            I aim to help businesses by creating user-centric design and experiences.<br></br>
                            Areas of interest, which you will see below, include: UX Design, Data Analyses and Visualization, Photography and fun with CSS.<br></br>
                            Take a gander and reach out if you would like to talk more!
                        </p>
                    </div>
                </div>
            </div>
            {/* Cards*/}
          
            <div className="grid-cols-1 lg:grid-cols-4">
                <div className=" bg-gradient-to-b from-orange-200 to-rose-300 block justify-around space-y-10 space-x-0 mt-32 lg:flex lg:space-x-0  lg:space-y-0">
                    <div className="w-screen p-10 text-center lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-js"></i>
                        </h1>
                        <p className='p-5 text-white'>Javascript</p>
                    </div>
                    <div className="w-screen p-10 text-center lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-python"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            Python
                        </p>
                    </div>
                    <div className="w-screen p-10 text-center lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-html5"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            HTML/CSS
                        </p>
                    </div>
                    <div className="w-screen p-10 text-center lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa-brands fa-react"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            React
                        </p>
                    </div>
                    {/* <div className="w-screen bg-gradient-to-b from-orange-100 to-rose-300 text-center rounded-lg lg:w-auto">
                        <h1 className='mt-3 p-4 text-white text-8xl'>
                            <i className="fa fa-github"></i>
                        </h1>
                        <p className='p-5 text-white'>
                            Github
                        </p>
                    </div> */}
                </div>
            </div>
            </section>
    )
};
