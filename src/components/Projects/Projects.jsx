import React from 'react';


export default function Projects() {
    return (
          <section id='projects' class="pb-40">
                <div className="flex pt-40">
                    <div className="w-screen h-auto">
                        <div className="">
                            <h1 className='text-white text-center font-bold text-4xl font-montserrat'>Projects</h1>
                        </div>
                    </div>
                </div>
                {/* Cards*/}
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
                                    <img src="./images/musikero.jpg" alt="card one - Musikero"></img>
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
                                    <img src="./images/lost-threads.jpg" alt="card two - lost threads"></img>
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
                                    <img src="./images/nightcap.JPG" alt="card three - nightcap"></img>
                                </figure>
                            </div>
                        </li>

                        <li class="card" id="card-4">
                            <div class="card-content">
                                <div>
                                    <h2>Book Search</h2>
                                    <p>A book search engine site using the books API.</p>
                                </div>
                                <figure>
                                    <img src="./images/MM.jpg" alt="card four - book search"></img>
                                </figure>
                            </div>
                        </li>

                        <li class="card" id="card-5">
                            <div class="card-content">
                                <div>
                                    <h2>SpeedGarage, LLC.</h2>
                                    <p>A simple landing page with the business description and contact information for a local auto mechanic.</p>
                                </div>
                                <figure>
                                    <img src="./images/speedgarage1.png" alt="card five - Speed Garage, LLC."></img>
                                </figure>
                                <figure>
                                    <img src="./images/speedgarage2.png" alt="card five - Speed Garage, LLC."></img>
                                </figure>
                                <figure>
                                    <img src="./images/speedgarage3.png" alt="card five - Speed Garage, LLC."></img>
                                </figure>
                            </div>
                        </li>
                    </ul>
                </div>
              </section>
    )
};
