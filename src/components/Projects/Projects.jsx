import React from 'react';


export default function Projects() {
    return (
          <section id='projects' class="pb-40">
                <div className="flex pt-60 pb-0">
                    <div className="w-screen h-auto">
                        <div className="">
                            <h1 className='text-white text-center font-bold text-4xl'>Projects</h1>
                        </div>
                    </div>
                </div>
                {/* Cards*/}
                {/* <div className="grid-cols-1 lg:grid-cols-4">
                    <div className="block justify-around space-y-10 space-x-0 mt-32 lg:flex lg:space-x-10 lg:mr-4 lg:ml-4 lg:space-y-0">
                        <div className="w-screen bg-gradient-to-b from-orange-100 to-rose-300 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-black text-4xl tracking-tight font-bold text-center'>
                                Musikero App
                            </h1>
                            <img src="./images/musikero.jpg" alt="Musikero App" className='w-48 h-48 mx-auto'></img>
                            <p className='p-5 text-black'>
                                A music app that allows users to search for artists of interest 
                                and view similar artists, a sample playlist, and tour dates.
                            </p>
                            <a href="https://murpheycm.github.io/artist-search-API/"  rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-orange-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-fuchsia-950">
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/murpheycm/artist-search-API"  rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-orange-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-blue-950">
                                    Github
                                </button>
                            </a>
                        </div>
                        <div className="w-screen bg-gradient-to-b from-orange-100 to-rose-300 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='p-4 text-black text-4xl tracking-tight font-bold text-center'>
                                Lost Threads Forum
                            </h1>
                            <img src="./images/lost-threads.jpg" alt="Lost Threads App" className='w-48 h-48 mx-auto'></img>
                            <p className='p-5 text-black'>
                                A forum-based website catering to abandoned locations throughout Virginia. 
                            </p>
                            <a href="https://young-earth-25624-6d7322590ac2.herokuapp.com/"  rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-orange-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-fuchsia-950">
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/Shabadoo9/LostThreads"  rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-orange-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-fuchsia-950">
                                    Github
                                </button>
                            </a>
                        </div>
                        <div className="w-screen bg-gradient-to-b from-orange-100 to-rose-300 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='p-5 text-black text-4xl tracking-tight font-bold text-center'>
                                Nightcap Cocktail App
                            </h1>
                            <img src="./images/nightcap.JPG" alt="Nightcap App" className='w-48 h-48 mx-auto'></img>
                            <p className='p-5 text-black'>
                               A react app for discovering mixed drinks in your area.
                            </p>
                            <a href="https://stark-hollows-24341-bcd3c1cc7ff9.herokuapp.com/"  rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-orange-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-fuchsia-950">
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/iggy-ziggy/Nightcap-V2"  rel="">
                                <button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-orange-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-fuchsia-950">
                                    Github
                                </button>
                            </a>
                        </div>
                    </div>
                </div> */}
                <div className="cards">
                    <ul id="cards">
                        <li class="card" id="card-1">
                            <div class="card-content">
                            <div>
                                <h2>Musikero</h2>
                                <p>A music app that allows users to search for artists of interest 
                                and view similar artists, a sample playlist, and tour dates.</p>
                            </div>
                            <figure>
                                <img src="./images/musikero.jpg" alt="card-one"></img>
                            </figure>
                            </div>
                        </li>

                        <li class="card" id="card-2">
                            <div class="card-content">
                            <div>
                                <h2>Lost Threads</h2>
                                <p>A forum-based website catering to abandoned locations throughout Virginia.</p>
                            </div>
                            <figure>
                                <img src="./images/lost-threads.jpg" alt="card two"></img>
                            </figure>
                            </div>
                        </li>

                        <li class="card" id="card-3">
                            <div class="card-content">
                            <div>
                                <h2>NightCap</h2>
                                <p> A react app for discovering mixed drinks in your area.</p>
                            </div>
                            <figure>
                                <img src="./images/nightcap.JPG" alt="card three"></img>
                            </figure>
                            </div>
                        </li>

                        <li class="card" id="card-4">
                            <div class="card-content">
                            <div>
                                <h2>Book Search</h2>
                                <p>This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <figure>
                                <img src="./images/MM.jpg" alt="card four"></img>
                            </figure>
                            </div>
                        </li>
                    </ul>
                </div>
              </section>
    )
};
