import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error">
        <div className="bg-purple">
          <div class="stars">
            <div class="custom-navbar">
              <div class="brand-logo">
                <h1>Elias Solis</h1>
                {/* <img
                  src="http://salehriaz.com/404Page/img/logo.svg"
                  width="80px"
                /> */}
              </div>
            </div>
            <div class="central-body">
              <img
                class="image-404"
                src="http://salehriaz.com/404Page/img/404.svg"
                width="300px"
              />
              <Link to="/">
                <a
                  href="http://salehriaz.com/404Page/404.html"
                  class="btn-go-home"
                  target="_blank"
                >
                  GO BACK HOME
                </a>
              </Link>
            </div>
            <div class="objects">
              <img
                class="object_rocket"
                src="http://salehriaz.com/404Page/img/rocket.svg"
                width="40px"
              />
              <div class="earth-moon">
                <img
                  class="object_earth"
                  src="http://salehriaz.com/404Page/img/earth.svg"
                  width="100px"
                />
                <img
                  class="object_moon"
                  src="http://salehriaz.com/404Page/img/moon.svg"
                  width="80px"
                />
              </div>
              <div class="box_astronaut">
                <img
                  class="object_astronaut"
                  src="http://salehriaz.com/404Page/img/astronaut.svg"
                  width="140px"
                />
              </div>
            </div>
            <div class="glowing_stars">
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
              <div class="star"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Error };
