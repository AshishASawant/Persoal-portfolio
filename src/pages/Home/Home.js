import React from "react";
import "./home.css";
// import svgImg from "../../assets/img/perfil.png";
import resume from "../../assets/pdf/Ashish-Cv.pdf";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
          <div className="home-data">
            <h1 className="home-title">
              Hi, I am{" "}
              <AnimationOnScroll 
              style={{display:'inline-block'}}
                animateIn="animate__zoomIn"
                initiallyVisible={true}
                animateOnce={true}
                duration={1}
              >
                <span className="my-name">Ashish</span>
              </AnimationOnScroll>{" "}
            </h1>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              delay={1100}
              animateOnce={true}
              className="home-subtitle"
            >
              Full Stack Developer
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              delay={1500}
              animateOnce={true}
              className="home-description"
            >
              A driven and problem-solving individual with a passion for
              full-stack development. Proficient in MERN stack technologies
              including MongoDB, Express, React, and Node.js, committed to
              delivering high-quality and scalable web applications.
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              delay={2000}
              animateOnce={true}
              href="#contact"
              className="btn btn-flex"
            >
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
