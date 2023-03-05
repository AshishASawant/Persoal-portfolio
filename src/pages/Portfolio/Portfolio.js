import React from "react";
import "./portfolio.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Swiper, SwiperSlide } from "swiper/react";
import todoapp from "../../assets/img/todoapp.png"
import tictactoe from "../../assets/img/tictactoe.png"
import clock from "../../assets/img/clock.png"
import calculator from "../../assets/img/calculator.png"
import textutils from "../../assets/img/textutils.png"
import tseries from "../../assets/img/tseries.png"
import dailybugle from "../../assets/img/dailybugle.png"
import cloudbook from "../../assets/img/cloudbook.png"
import cycloboard from "../../assets/img/cycloboard.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

const Portfolio = () => {
  const projects = [
    {
      name: "Cloudbook",
      description: "Cloudbook is a full stack app that can be used to store and manipulate notes. It also has user authentication using jwt token",
      code: "https://github.com/AshishASawant/Cloud-book",
      demo: "https://cloudbookweb.netlify.app",
      imgLink:cloudbook
    },
    {
      name: "T-Series",
      description: "T-series is a spotify clone made using react.It uses the spotify API to log in an actual spotify user through his login credentilas ",
      code: "https://github.com/AshishASawant/t-series",
      demo: "https://tseries.netlify.app",
      imgLink:tseries
    },
    {
      name: "Cycloboard",
      description: "Cycloboard includes a range of features such as purchase, employee, and customer order details, as well as several charts for visual data representation.",
      code: "https://github.com/AshishASawant/Multiuse-dashboard",
      demo: "https://cycloboard.netlify.app",
      imgLink:cycloboard
    },
    {
      name: "Daily Bugle",
      description: "Daily Bugle is a news website made using react.It fetches the latest news all around the world using newsdata.io API",
      code: "https://github.com/AshishASawant/Daily-bugle",
      demo: "https://dailybugle.netlify.app",
      imgLink:dailybugle
    },
    {
      name: "Text Utils",
      description: "Testutils is a text utility webapp the is made using react. It can manipulate data by performing various opertions.",
      code: "https://github.com/AshishASawant/Textutilities",
      demo: "https://textutilitiesweb.netlify.app",
      imgLink:textutils
    },
    {
      name: "Todo App",
      description: "Todo app is a task management app made using react. It has a very good user interface an can take infinite tasks",
      code: "https://github.com/AshishASawant/Todoapp",
      demo: "https://todoapplicationweb.netlify.app",
      imgLink:todoapp
    },
    {
      name: "Tic-Tac-Toe",
      description: "Tic-Tac-Toe is a classic X and O game made using javascript.IT has click audio and a gif that appears when someone wins",
      code: "https://github.com/AshishASawant/tic-tac-toe",
      demo: "https://tic-tac-toeweb.netlify.app",
      imgLink:tictactoe
    },
    {
      name: "Simple Calculator",
      description: "This calculator is made using javascript. It is beginner friedly project that i created while learning javascript",
      code: "https://github.com/AshishASawant/Simple-Calculator",
      demo: "https://simplecalculatorweb.netlify.app",
      imgLink:calculator
    },
    {
      name: "Analog Clock",
      description: "It is a simpe clock made using javascript that shows india standard time",
      code: "https://github.com/AshishASawant/Analog-Wall-Clock",
      demo: "https://analogwallclock.netlify.app",
      imgLink:clock
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">Most recent projects</span>
      <AnimationOnScroll animateIn="animate__bounceIn" className="portfolio-container container">
        <Swiper
          cssMode={true}
          // loop={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project) => {
            const { name, description, code, demo,imgLink } = project;
            return (
              <SwiperSlide key={code}>
                <div className="portfolio-content grid">
                  <img src={imgLink} className="portfolio-img" alt="portfolio" />
                  <div className="portfolio-data">
                    <h3 className="portfolio-title">{name}</h3>
                    <p className="portfolio-description">
                   {description}
                    </p>
                    <a
                      href={demo}
                      target="_blank"
                      rel="noreferrer" 
                      className="btn btn-flex btn-small portfolio-btn"
                    >
                      Demo<i className="uil uil-arrow-right btn-icon"></i>
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer" 
                      className="btn btn-flex btn-small portfolio-btn code-btn"
                    >
                      <i className="uil uil-arrow-left btn-icon "></i>Code
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </AnimationOnScroll>
    </section>
  );
};

export default Portfolio;
