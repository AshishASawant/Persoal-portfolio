import React from 'react'
import "./About.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import myImg from "../../assets/img/about.jpg"
import resume from "../../assets/pdf/Ashish-Cv.pdf"

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My Introduction</span>
        <div className="about-container container">
            <img src={myImg} alt="Me" className="about-img" style={{display:'none'}} />
            <div className="about-data">
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} className="about-description">Highly motivated and detail-oriented student with a passion for front-end development. As a final year BCA student, I have developed strong technical skills in HTML, CSS, JavaScript and have experience working with ReactJS. My projects have honed my abilities to create visually appealing and user-friendly webapps. Seeking an internship opportunity to further enhance my skills and gain real-world experience while contributing to the success of a company. Committed to staying current with industry advancements and continuously learning new technologies.</AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true} className="about-btn" style={{display:'flex',justifyContent:'center'}}>
                <a download='' href={resume} className="btn btn-flex" > 
                Download Resume<i className="uil uil-download-alt btn-icon"></i>
                </a>
            </AnimationOnScroll>
            </div>
        </div>
    </section>
  )
}

export default About
