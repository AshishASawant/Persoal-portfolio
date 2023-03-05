import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";
import Footer from "./pages/Footer/Footer";
import Scrolltop from "./components/scrolltop/Scrolltop";

const App = () => {

  //navbar scroll active class
  function scrollActive() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);

  //back to screen top
  function screenTop() {
    let ele = document.getElementById("scroll-up");
    this.scrollY >= 560
      ? ele.classList.add("show-scroll")
      : ele.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", screenTop);

  //change background header
  function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);

  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Scrolltop />
    </div>
  );
};

export default App;
