import React from "react";
import "./home.css";
// import svgImg from "../../assets/img/perfil.png";
import resume from "../../assets/pdf/Ashish-Cv.pdf"
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <div className="home-social">
            <a
              href="https://www.linkedin.com/in/ashish-sawant"
              target={"_blank"}
              rel="noreferrer"
              className="home-social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/AshishASawant"
              target={"_blank"}
              rel="noreferrer"
              className="home-social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="mailto:ashishsawant2050@gmail.com"
              target={"_blank"}
              rel="noreferrer"
              className="home-social-icon"
            >
              <i className="uil uil-envelope-alt"></i>
            </a>
            <a
              href={resume}
              target={"_blank"}
              download=""
              rel="noreferrer"
              className="home-social-icon"
            >
            <i className="uil uil-file-download-alt"></i>
            </a>
          </div>
          {/* <div className="home-img">
              <svg
                className="home-blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    className="home-blob-img"
                    x="12"
                    y="18"
                    xlinkHref={svgImg}
                  />
                </g>
              </svg>
            </div> */}
          <div className="home-data">
            <h1 className="home-title">
              Hi, I am <AnimationOnScroll animateIn="animate__zoomInDown" duration={1} style={{display:'inline-block'}} className="my-name">Ashish</AnimationOnScroll>{" "}
            </h1>
            <AnimationOnScroll animateIn="animate__fadeInRight" delay={2000}  className="home-subtitle">Full Stack Developer</AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" delay={3300} className="home-description">
            A driven and problem-solving individual with a passion for full-stack development. Proficient in MERN stack technologies including MongoDB, Express, React, and Node.js, committed to delivering high-quality and scalable web applications.
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" delay={4300} href="#contact" className="btn btn-flex">
              Contact Me<i className="uil uil-message btn-icon"></i>
            </AnimationOnScroll>
          </div>
        </div>
          <a href="#about" className="home-scroll-btn btn-flex ">
            <i className="uil uil-mouse-alt home-scroll-mouse"></i>
            <span className="home-scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home-scroll-arrow"></i>
          </a>
      </div>
    </section>
  );
};

export default Home;
