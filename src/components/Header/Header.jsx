import React from 'react';
// import Portfolio from "./images/MM.png";

export default function Header() {
  return (
      <div className="flex">
          <div className="flex flex-col rounded-md bg-gradient-to-b from-orange-200 to-rose-300 shadow-1xl dark:bg-neutral-600 md:max-w-xl md:flex-row">
            <img
              className="h-50 w-full object-cover rounded-t-lg md:h-full md:w-48 md:rounded-l-lg"
              src="./images/Portfolio_Image.jpg"
              alt="Mackenzie Murphey" ></img>
            <div className="flex flex-col justify-start p-6">
              <h5
                className="mb-2 text-xl font-medium text-black text-center">
                Hey There!
              </h5>
              <p className="mb-4 text-base text-black text-center">
                Welcome to <i>the</i> Portfolio!<br></br>
                Tired of unnecessarily extravagant web design that lags? <br></br>
                Flabbergasted by your experience with modern websites? <br></br>
                Me too! Glad we found each other! <br></br>
                XO - Mack
              </p>
            </div>
          </div>
        </div>
  )
};
