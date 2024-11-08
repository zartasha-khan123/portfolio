"use client";
import "./service.css"; // Importing as a global CSS file
import { useState, useEffect } from "react";

function Service() {
  const services = [
    {
      icon: "📐",
      title: "Figma Designer",
      description:
        "I am a Figma designer focused on creating visually appealing and user-friendly interfaces, collaborating to bring ideas to life through detailed designs and prototypes.",
    },
    {
      icon: "💻",
      title: "Web Developer",
      description:
        "Passionate about building responsive and user-friendly web applications",
    },
    {
      icon: "🖥️",
      title: "UI/UX Designer",
      description:
        "I specialize in UI/UX design, creating intuitive and engaging interfaces that enhance user experiences and ensure seamless interaction with digital products",
    },
    {
      icon: "📲",
      title: "App Developer",
      description:
        "Experienced in creating responsive and engaging mobile applications",
    },
    {
      icon: "📝",
      title: "Content Writer",
      description:
        "I write content that is engaging, SEO-friendly, and user-centric.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [services.length]);

  // Manual slide navigation
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <section id="service" className="servicesSection">
      <h2 className="subheading">I am ready to assist you with anything you need.</h2>
      <h3 className="heading">Our Services</h3>

      <div className="sliderControls">
        <button className="prevButton" onClick={handlePrevSlide}>‹</button>
        <button className="nextButton" onClick={handleNextSlide}>›</button>
      </div>

      <div className="servicesSlider">
        {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="iconCircle">
              <span className="icon">{service.icon}</span>
            </div>
            <h4 className="title">{service.title}</h4>
            <p className="description">{service.description}</p>
            <button className="readMore">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;