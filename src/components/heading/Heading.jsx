import "./Heading.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Heading() {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="header">
      <div className="header__burgerCont">
        <Link className="header__links" to="/">
          <h1 className="header__heading">
            Bodie <br />
            Morgan
          </h1>
        </Link>

        <div
          className={`header__hamburger ${showNav ? "open" : ""}`}
          onClick={handleToggle}
        ></div>
      </div>

      <nav className={`nav ${showNav ? "open" : ""} `}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link">About</Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="/Gear">
              Gear
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link">
              Media
              </Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Heading;
