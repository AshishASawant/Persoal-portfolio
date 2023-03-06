import React, { useRef, useState } from "react";
import swal from "sweetalert";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./contact.css";
const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const submitBtnRef = useRef("");

  let handelSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const config = {
      SecureToken: process.env.REACT_APP_SMTPJS_KEY,
      To: "ashishsawant2050@gmail.com",
      From: "ashishsawant2150@gmail.com",
      Subject: `${contactDetails.name} connected to you over portfolio using his/her email address ${contactDetails.email}`,
      Body: contactDetails.message,
    };

    if (window.Email) {
      window.Email.send(config).then((res) => {
        if (res === "OK") {
          swal(
            "Message Sent",
            "I will connect to you over your email: " + contactDetails.email,
            "success"
          );
          setLoading(false);
          setContactDetails({
            name: "",
            email: "",
            message: "",
          });
        } else {
          swal("Error", res, "error");
          setLoading(false);
        }
      });
    }      
  };

  const handelChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.id]: e.target.value });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <span className="section-subtitle">Get in touch</span>

      <div className="contact-container container grid">
        <div>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig" className="contact-info">
            <i className="uil uil-phone contact-icon"></i>
            <div>
              <h3 className="contact-title">Phone</h3>
              <span className="contact-subtitle">+91 9309496048</span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig" duration={1.4} className="contact-info">
            <i className="uil uil-envelope contact-icon"></i>
            <div>
              <h3 className="contact-title">Email</h3>
              <span className="contact-subtitle">ashishsawant2050@gmail.com</span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig" duration={1.8} className="contact-info">
            <i className="uil uil-map-marker contact-icon"></i>
            <div>
              <h3 className="contact-title">Location</h3>
              <span className="contact-subtitle">Navi-Mumbai, Maharashtra</span>
            </div>
          </AnimationOnScroll>
        </div>
        <form
          className="contact-form grid"
          autoComplete="off"
          onSubmit={handelSubmit}
        >
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight" className="contact-content">
            <label htmlFor="" className="contact-label">
              Name
            </label>
            <input
              type="text"
              value={contactDetails.name}
              onChange={handelChange}
              className="contact-input"
              name="name"
              id="name"
              required
            />
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight" duration={1.4} className="contact-content">
            <label htmlFor="" className="contact-label">
              Email
            </label>
            <input
              type="email"
              value={contactDetails.email}
              onChange={handelChange}
              className="contact-input"
              name="email"
              id="email"
              required
            />
          </AnimationOnScroll>
          {/* <div className="contact-content">
                    <label htmlFor="" className="contact-label">Project</label>
                    <input type="text" className="contact-input" />
                </div> */}
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight"  duration={1.8} className="contact-content">
            <label htmlFor="" className="contact-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="0"
              rows="7"
              className="contact-input"
              value={contactDetails.message}
              onChange={handelChange}
              required
            ></textarea>
          </AnimationOnScroll>
          <button
            type="submit"
            ref={submitBtnRef}
            style={{ display: "none" }}
          ></button>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" 
           style={{ display: "flex" }}>
            <a
              href="###"
              onClick={() => {
                submitBtnRef.current.click()}}
              className="btn btn-flex"
            >
              Send Message
              <i className="uil uil-message btn-icon"></i>
            </a>
            {loading && (
              <img
                className="loading"
                src="https://usagif.com/wp-content/uploads/loading-28.gif"
                alt=""
              />
            )}
          </AnimationOnScroll>
        </form>
      </div>
    </section>
  );
};

export default Contact;
