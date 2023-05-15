import React, { useState } from "react";
import Slider1 from "../img/slider-1.jpg";
import Slider2 from "../img/slider-2.jpg";
import Slider3 from "../img/slider-3.jpg";
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CarSlider = () => {
  const slides = [Slider1, Slider2, Slider3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [imageArray, setImageArray] = useState([
    {
      id: 1,
      img: Slider1,
      title: "Web Development",
      para: "Our website offers comprehensive web development courses that cover HTML, CSS, JavaScript, and more. Learn from industry experts and acquire the skills to build professional-grade websites and applications.",
    },
    {
      id: 2,
      img: Slider2,
      title: "App Development",
      para: "Our website provides top-notch app development courses covering programming languages, frameworks, and tools like Swift, Kotlin, React Native, and more.Acquire the skills to create engaging and user-friendly mobile apps that meet the demands of today's rapidly growing app industry.",
    },
    {
      id: 3,
      img: Slider3,
      title: "Game Development",
      para: "Our website offers comprehensive game development courses covering Unity, C#, game design, and more.Explore the world of game development with our expert-led courses on game engines, programming, and design. Master the art of game creation and unleash your creativity with our diverse curriculum.",
    },
  ]);
  const bannerTitle = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "48px",
    fontWeight: "bold",
    color: "#fff",
    zIndex: 2,
  };
  
  const bannerPara = {
    position: "absolute",
    top: "calc(40% + 140px)", // set to 40px to space it out from the title
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "18px",
    color: "#fff",
    zIndex: 1,
  };
 const centerThisBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  
};
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slides[currentIndex]})`,
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    filter: "brightness(37%)"
  };
  const sliderStyles = {
    height: "100%",

    position: "relative",
  };

  const left = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const right = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  function gotoPrev() {
    const isFS = currentIndex === 0;
    const newIndex = isFS ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function gotoRight() {
    const isLS = currentIndex === slides.length - 1;
    const newIndex = isLS ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
 
  return (
    <div className="sliderStyles">
      <div className="left" onClick={gotoPrev}>
        <FiArrowLeft />
      </div>
      <div className="centerThisBox">
        <div className="bannerTitle"><h2>{imageArray[currentIndex].title}</h2></div>
        <div className="bannerPara">{imageArray[currentIndex].para}</div>
      </div>
      <div className="right" onClick={gotoRight}>
        <FiArrowRight />
      </div>
      <div className="slideStyles" style={{ backgroundImage: `url(${slides[currentIndex]})` }}></div>
    </div>
  );
}

export default CarSlider;
