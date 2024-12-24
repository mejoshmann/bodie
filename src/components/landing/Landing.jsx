import { useEffect } from "react";
import "./Landing.scss";


function Landing() {

    useEffect(() => {

const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const sky = document.querySelector(".sky");
    const mountains = document.querySelector(".mountains");
    const skier = document.querySelector(".skier");
    const teck = document.querySelector(".teck");
    const parallaxText = document.querySelector(".parallaxText");

    if (sky) sky.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      if (mountains) mountains.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      if (skier) skier.style.transform = `translateY(${scrollPosition * 0.6}px)`;
      if (teck) teck.style.transform = `translateY(${scrollPosition * 0.6}px)`;
      if (parallaxText) {
        parallaxText.style.transform = `translateY(${scrollPosition * 0.3}px) translateX(-50%)`;
}
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <>
      <div className="main">

        <main className="parallax">
          <div className="layer sky"></div>
          <div className="layer mountains"></div>
          <div className="layer teck"></div>
          <div className="layer skier"></div>
          <h1 className="parallax-text">BODIE MORGAN</h1>
        </main>
      </div>
    </>
  );
}

export default Landing;
