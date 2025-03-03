import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style/RainEffect.css";

const generateDrops = (numDrops) => {
  return Array.from({ length: numDrops }, () => ({
    x: Math.random() * 100, // Spread drops across the full width
    y: Math.random() * -100, // Start above viewport
    o: Math.random() * 0.8 + 0.2, // Opacity range (0.2 - 1)
    a: Math.random() * 3 + 2, // Animation speed (2s - 5s)
    d: Math.random() * -2, // Random delay (-2s to 0s)
    s: Math.random() * 0.8 + 0.5 // Scale (0.5 - 1.3)
  }));
};

const RainEffect = () => {
  const drops = generateDrops(500); // Generate 500 drops
  const [offsetY, setOffsetY] = useState(0);
  const titleRef = useRef(null);

  // Update offsetY state on scroll
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <>
    <div className="parallax-container">
      {/* Background Image */}
      <div className="background"></div>

      {/* Parallax Layer with a simple transform based on scroll offset */}
      <div
        className="parallax"
        style={{
          transform: `translateY(-${offsetY * 0.2}px)`
        }}
      ></div>

      {/* Title in Between */}
      <h1 ref={titleRef} className="rain-title">
        Sky Watch 360
      </h1>

        

      {/* Rain Effect */}
      <div className="rain">
        {drops.map((drop, index) => (
          <svg
            key={index}
            className="rain__drop"
            preserveAspectRatio="xMinYMin"
            viewBox="0 0 5 50"
            style={{
              left: `${drop.x}vw`,
              top: `${drop.y}vh`,
              opacity: drop.o,
              transform: `scale(${drop.s})`,
              animationDuration: `${drop.a}s`,
              animationDelay: `${drop.d}s`
            }}
          >
            <path
              stroke="none"
              fill="rgba(0, 186, 243, 0.8)"
              d="M 5,0 C 5.5,3.53 6.5,20.52 8,30.95 10,42.66 8,50 5,50 2,50 0,42.66 2,30.95 3.5,20.52 4.5,3.53 5,0 Z"
            ></path>
          </svg>
        ))}
      </div>
    </div>
    <div className="bugg">
    <p>wsdfghj</p>
  </div>
  </>
  );
};

export default RainEffect;
