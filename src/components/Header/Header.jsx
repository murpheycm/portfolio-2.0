import React from 'react';

export default function Header() {
  return (
      <span class="background">
        <div class="mt-20 mb-20">
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
              <img src="./images/graphic_data.png" alt="data analysis" />
          </section>

          <section class="img-card">
              <img src="./images/graphic_photography.png" alt="photography" />
          </section>

          <section class="img-card">
              <img src="./images/graphic_design.png" alt="graphic design" />
          </section>

          <section class="img-card">
              <img src="./images/graphic_apps.png" alt="applications" />
          </section>
        </section>
      </span>
    )
};
