import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  // Image slider logic
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Client slider logic
  const clientSlides = [
    "/assets/Client-logos/Client-logo-1.jpg",
    "/assets/Client-logos/Client-logo-2.jpg",
    "/assets/Client-logos/Client-logo-3.jpg",
    "/assets/Client-logos/Client-logo-4.jpg",
    "/assets/Client-logos/Client-logo-5.jpg",
    "/assets/Client-logos/Client-logo-6.jpg",
    "/assets/Client-logos/Client-logo-7.jpg",
    "/assets/Client-logos/Client-logo-8.jpg",
    "/assets/Client-logos/Client-logo-9.jpg",
    "/assets/Client-logos/Client-logo-10.jpg",
    "/assets/Client-logos/Client-logo-11.jpg",
    "/assets/Client-logos/Client-logo-12.jpg",
    "/assets/Client-logos/Client-logo-13.jpg",
    "/assets/Client-logos/Client-logo-14.jpg",
    "/assets/Client-logos/Client-logo-15.jpg",
    "/assets/Client-logos/Client-logo-16.jpg",
    "/assets/Client-logos/Client-logo-17.jpg",
    "/assets/Client-logos/Client-logo-18.jpg",
    "/assets/Client-logos/Client-logo-19.jpg",
    "/assets/Client-logos/Client-logo-20.jpg",
  ];

  const [clientCurrentIndex, setClientCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const getVisibleSlides = () => {
    if (window.innerWidth <= 768) return 2; // Mobile
    if (window.innerWidth <= 1024) return 3; // Tablets
    return 5; // Desktop
  };

  const visibleSlides = getVisibleSlides();

  const nextSlide = () => {
    setClientCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, clientSlides.length - visibleSlides)
    );
  };

  const prevSlide = () => {
    setClientCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    if (touchEndX < touchStartX) nextSlide(); // Swipe left
    if (touchEndX > touchStartX) prevSlide(); // Swipe right
  };

  useEffect(() => {
    const handleResize = () => {
      setClientCurrentIndex(0); // Reset to the first slide on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="hero-container">
          <div className="intro">
            <h1>WELCOME TO SUPER SIGNS</h1>
            <p>
              Founded in 2007, Super Signs has become a trusted name in Oman’s
              advertising industry, delivering high quality, modern advertising
              solutions. Committed to customer satisfaction, we offer competitive
              pricing and innovative services to meet the evolving needs of our
              clients across Oman.
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div className="slider">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ display: currentIndex === index ? "block" : "none" }}
            />
          ))}
        </div>

        {/* Motto Section */}
        <div className="motto">
          <h1 className="centered-heading">IMAGINE CREATE PARTICIPATE</h1>
        </div>

        <hr />

        {/* Services Section */}
        <h1 className="services-heading">PRODUCTS & SERVICES</h1>
        <div className="services">
          <div className="service1">
            <ul>
              <li>
                <b>Digital printing</b>
                <ul>
                  <li>indoor & outdoor</li>
                </ul>
              </li>
              <li>
                <b>Sign boards</b>
                <ul>
                  <li>LED signs</li>
                  <li>Neon Signs</li>
                  <li>Flex face signs</li>
                  <li>Metal & signs</li>
                  <li>Roof top signs</li>
                </ul>
              </li>
              <li>
                <b>Exhibition stands</b>(exclusive design)
              </li>
              <li>
                <b>Safety signs</b>
              </li>
            </ul>
          </div>
          <div className="service2">
            <ul>
              <li>
                <b>Vehicle graphics</b>
              </li>
              <li>
                <b>Promotional stands</b>
              </li>
              <li>
                <b>Engraving</b>
              </li>
              <li>
                <b>Etching (Wood,Metal)</b>
              </li>
              <li>
                <b>Roll ups</b>
              </li>
              <li>
                <b>Pop ups</b>
              </li>
              <li>
                <b>Kiosk</b>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Clients Section */}
        <div className="client-heading-container">
          <h1 className="client-heading">OUR CLIENTS</h1>
        </div>
        <div className="client-slider-container">
          <button className="prev-btn" onClick={prevSlide} disabled={clientCurrentIndex === 0}>
            ◀
          </button>
          <div
            className="client-slider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${clientCurrentIndex * (100 / visibleSlides)}%)`,
            }}
          >
            {clientSlides.map((src, index) => (
              <div key={index} className="client-slide">
                <img src={src} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={nextSlide}
            disabled={clientCurrentIndex >= clientSlides.length - visibleSlides}
          >
            ▶
          </button>
        </div>


        {/* Contacts Section */}
        <h1 className="services-heading">CONTACT US</h1>
        <div className="contact-section">
          <ul className="contact-list">
            <li>
              <img src="assets/Contact-icons/Icon-1.png" alt="Instagram Icon" className="contact-icon" />
              <a href="https://www.instagram.com/super._.signs?igsh=MXFodnB0Z2Q3ZHZnbA==" target="_blank" rel="noopener noreferrer">
                @supersigns
              </a>
            </li>
            <li>
              <img src="assets/Contact-icons/Icon-2.png" alt="Email Icon" className="contact-icon" />
              <a href="mailto:supersigns221@gmail.com">supersigns221@gmail.com</a>
            </li>
            <li>
              <img src="assets/Contact-icons/Icon-3.png" alt="Phone Icon" className="contact-icon" />
              <a href="tel:+96871174833">+968 7117 4833</a>
            </li>
            <li>
              <img src="assets/Contact-icons/Icon-4.png" alt="Location Icon" className="contact-icon" />
              <span>Wadi Al Kabir, Sultanate of Oman.</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;