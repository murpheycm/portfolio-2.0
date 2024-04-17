import React from 'react';

export default function Header() {
  return (
      // <div className="h-100 grid grid-cols-5 content-center my-50 mx-auto">
      //     {/* <div className="bg-gradient-to-b from-orange-200 to-rose-300 shadow-1xl dark:bg-neutral-600 max-w-screen">
      //       <img
      //         className="object-center max-w-screen"
      //         src="./images/MM.jpg"
      //         alt="" ></img>
      //     </div> */}
          
      // </div>
    <span class="background">
      <section class="gallery">
        <section class="img-card">
            <img src="./images/nightcap.JPG" alt="" />
        </section>

        <section class="img-card">
            <img src="./images/musikero.jpg" alt="" />
        </section>

        <section class="img-card">
            <img src="./images/lost-threads.jpg" alt="" />
        </section>

        <section class="img-card">
            <img src="./images/logo_1.png" alt="" />
        </section>

        <section class="img-card">
            <img src="./images/mm_retro.png" alt="" />
        </section>
      </section>
    </span>
  )
};
