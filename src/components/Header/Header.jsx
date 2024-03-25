import React from 'react';

export default function Header() {
  return (
      <div className="flex">
          <div className="flex flex-col rounded-lg bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-2xl dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-50 w-full object-cover shadow-[20px_0_30px_0_rgba(0,0,0,0.9)] rounded-t-lg md:h-full md:w-48 md:rounded-l-lg"
              src="./images/Portfolio_Image.jpg"
              alt="Mackenzie Murphey" />
            <div className="flex flex-col justify-start p-6">
              <h5
                className="mb-2 text-xl font-medium text-white text-center">
                Hey There!
              </h5>
              <p className="mb-4 text-base text-white text-center">
                Welcome to my Portfolio!<br></br>
                Take a look around, <br></br>
                I hope you enjoy it!
              </p>
            </div>
          </div>
        </div>
  )
};
