import React from 'react';

export default function Projects() {
    return (
      <>
          <section id='about'>
                <div className="flex">
                    <div className="w-screen h-auto">
                        <div className="w-3/6 m-auto">
                            <h1 className='text-white text-center text-4xl'>Projects</h1>
                        </div>
                    </div>
                </div>
                {/* Cards*/}
                <div className="grid-cols-1 lg:grid-cols-4">
                    <div className="block justify-around space-y-10 space-x-0 mt-32 lg:flex lg:space-x-10 lg:mr-4 lg:ml-4 lg:space-y-0">
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'>
                                Project 1
                            </h1>
                            <image src=""></image>
                            <p className='p-5 text-white'>
                                Description 1
                            </p>
                            <a href="" target='_blank' rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                                    Test 1 Demo
                                </button>
                            </a>
                            <a href="" target='_blank' rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                                    Test 1 Repo
                                </button>
                            </a>
                        </div>
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'>
                                Project 2
                            </h1>
                            <image src=""></image>
                            <p className='p-5 text-white'>
                                Description 2
                            </p>
                            <a href="" target='_blank' rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                                    Test 2 Demo
                                </button>
                            </a>
                            <a href="" target='_blank' rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                                    Test 2 Repo
                                </button>
                            </a>
                        </div>
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'>
                                Project 3
                            </h1>
                            <image src=""></image>
                            <p className='p-5 text-white'>
                               Description 3
                            </p>
                            <a href="" target='_blank' rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                                    Test 3 Demo
                                </button>
                            </a>
                            <a href="" target='_blank' rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                                    Test 3 Repo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
              </section>
      </>
    )
};
