import React from 'react';

export default function Header() {
  return (
      <div className="flex">
          <div className="flex flex-col rounded-lg bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-2xl dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
              className="h-50 w-full object-cover shadow-[20px_0_30px_0_rgba(0,0,0,0.9)] rounded-t-lg md:h-full md:w-48 md:rounded-l-lg"
              src="/avatar.jpg"
              alt="Mackenzie Murphey" />
            <div className="flex flex-col justify-start p-6">
              <h5
                className="mb-2 text-xl font-medium text-white text-center">
                Mackenzie Murphey
              </h5>
              <p className="mb-4 text-base text-white text-center">
                Full Stack Developer
              </p>
              <button type='button' className="inline-block mt-5 mb-5 lg:mb-5 lg:mt-5 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Test</button>
            </div>
          </div>
        </div>
  )
};
