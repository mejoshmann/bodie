import "./Heading.scss";
// import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Heading() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const dropdownRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;
      setShowNav(scrollY <= scrollThreshold);
      if (isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className="head"
        style={{ opacity: showNav ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <div className="head__container">
          <h1 className="head__container--logo">BODIE</h1>
          <h1 className="head__container--logo">MORGAN</h1>
        </div>

        <div className="head__container--burger" onClick={handleToggle}>
          <span></span>
        </div>

        <ul className={`head__list ${isOpen ? "open" : ""} `}>
          <li className="head__list--item">About</li>
          <li className="head__list--item">Gear</li>
          <li className="head__list--item">Media</li>
        </ul>
      </nav>
    </>
  );
}

export default Heading;
