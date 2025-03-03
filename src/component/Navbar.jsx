import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../style/Navbar.css";

const Navbar = () => {

  const linksRef = useRef([]);
  
    useEffect(() => {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.in", stagger: .1 }
      );
    }, []);


  return (
    <nav className="nav-container">
       <ul className="nav-links">
        {["About Us", "Services", "Contact"].map((text, index) => (
          <li key={index} ref={(el) => (linksRef.current[index] = el)} className="nav-item">
            <a href={`#${text.toLowerCase().replace(" ", "-")}`}>{text}</a>
          </li>
        ))}
      </ul>
      <div className="nav-logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
