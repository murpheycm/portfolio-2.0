import React from 'react';

export default function Header() {
  return (
      <span class="background">
        <div>
              <img
                className="object-center max-w-screen"
                src="./images/header_logo_3.png"
                alt="Welcome header" ></img>
        </div>

        <section class="gallery">
          <section class="img-card">
              <img src="./images/graphic_web_design.png" alt="web design" />
          </section>

          <section class="img-card">
              <img src="./images/graphic_data.png" alt="" />
          </section>

          <section class="img-card">
              <img src="./images/graphic_photography.png" alt="" />
          </section>

          <section class="img-card">
              <img src="./images/graphic_design.png" alt="" />
          </section>

          <section class="img-card">
              <img src="./images/mm_retro.png" alt="" />
          </section>
        </section>
      </span>
    )
};
