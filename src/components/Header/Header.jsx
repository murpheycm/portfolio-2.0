import React from 'react';

export default function Header() {
  return (
      <div className="grid grid-cols-5 gap-2 content-evenly my-30">
          {/* <div className="bg-gradient-to-b from-orange-200 to-rose-300 shadow-1xl dark:bg-neutral-600 max-w-screen">
            <img
              className="object-center max-w-screen"
              src="./images/MM.jpg"
              alt="" ></img>
          </div> */}
          <div>
            <svg viewBox="0 0 75 75" width="200px">
              <path d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z" stroke="black" stroke-width="0.5" fill="white" />
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 75 75" width="200px">
              <path d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z" stroke="black" stroke-width="0.5" fill="white" />
              <img src='./images/MM.jpg' alt=''></img>
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 75 75" width="200px">
              <path d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z" stroke="black" stroke-width="0.5" fill="white" />
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 75 75" width="200px">
              <path d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z" stroke="black" stroke-width="0.5" fill="white" />
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 75 75" width="200px">
              <path d="m5,22 18,-18 28,0 18,18 0,28 -18,18, -28,0 -18,-18z" stroke="black" stroke-width="0.5" fill="white" />
            </svg>
          </div>
      </div>
  )
};
