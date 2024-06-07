import React, { useState }  from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projects.css';

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    
    
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
                                    <a href="https://murpheycm.github.io/artist-search-API/" target="_blank"><h2>Musikero</h2></a>
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
                                    <a href="" target="_blank"><h2>Lost Threads</h2></a>
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
                                    <a href="" target="_blank"><h2>NightCap</h2></a>
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
                                    <a href="" target="_blank"><h2>Book Search</h2></a>
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
                                    <a href="https://murpheycm.github.io/speed-garage/" target="_blank"><h2>SpeedGarage, LLC.</h2></a>
                                    <p>A simple landing page with the business description and contact information for a local auto mechanic.</p>
                                </div>
                                {/* <figure>
                                    <img src="./images/speedgarage1.png" alt="card five - Speed Garage, LLC."></img>
                                </figure>
                                <figure>
                                    <img src="./images/speedgarage2.png" alt="card five - Speed Garage, LLC."></img>
                                </figure>
                                <figure>
                                    <img src="./images/speedgarage3.png" alt="card five - Speed Garage, LLC."></img>
                                </figure> */}
                                <div className="carousel-container">
                                    <Slider {...settings}>
                                        <div>
                                            <img src="./images/speedgarage1.png" alt="Speed Garage, LLC. - Image 1"></img>
                                        </div>
                                        <div>
                                            <img src="./images/speedgarage2.png" alt="Speed Garage, LLC. - Image 2"></img>
                                        </div>
                                        <div>
                                            <img src="./images/speedgarage3.png" alt="Speed Garage, LLC. - Image 3"></img>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
              </section>
    )
};
