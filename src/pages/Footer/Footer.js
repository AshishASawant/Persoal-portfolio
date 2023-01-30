import React from "react";
import "./footer.css";
import resume from "../../assets/pdf/Ashish-Cv.pdf";

const Footer = () => {
  return (
    <footer>
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Ashish</h1>
            <span className="footer-subtitle">Fullstack developer</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="#about" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer-link">
                Portfolio
              </a>
            </li>
          </ul>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/ashish-sawant"
              rel="noreferrer"
              className="footer-social"
              target={"_blank"}
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/AshishASawant"
              target={"_blank"}
              rel="noreferrer"
              className="footer-social"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="mailto:ashishsawant2050@gmail.com"
              rel="noreferrer"
              className="footer-social"
            >
              <i className="uil uil-envelope-alt"></i>
            </a>
            <a href={resume} download="" className="footer-social">
              <i className="uil uil-file-download-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer-copy">
          Copyright &#169; Ashish. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
