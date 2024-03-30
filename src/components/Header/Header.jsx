import React from 'react';

export default function Header() {
  return (
      <div className="flex">
          <div className="flex flex-col rounded-md bg-gradient-to-br from-indigo-800 to-rose-500 shadow-1xl dark:bg-neutral-600 md:max-w-xl md:flex-row">
            <img
              className="h-50 w-full object-cover shadow-[20px_0_30px_0_rgba(0,0,0,0.9)] rounded-t-lg md:h-full md:w-48 md:rounded-l-lg"
              src="./images/Portfolio_Image.jpg"
              alt="Mackenzie Murphey" />
            <div className="flex flex-col justify-start p-6">
              <h5
                className="mb-2 text-xl font-medium text-black text-center">
                Hey There!
              </h5>
              <p className="mb-4 text-base text-black text-center">
                Welcome to <i>the</i> Portfolio!<br></br>
                Don't be a stranger and reach out if you like the work you see!<br></br>
                XO - Mack
              </p>
            </div>
          </div>
        </div>
  )
};
