import "./Heading.scss";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="header">
      <Link className="header__links" to="/">
      <h1 className="header__heading">
        Bodie <br />
        Morgan
      </h1>
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">About</li>
          <Link className="header__links" to="/Gear">
          <li className="nav__item">Gear</li>
          </Link>
          <li className="nav__item">Media</li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Heading;
