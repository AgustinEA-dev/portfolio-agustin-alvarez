import { Link, Outlet } from "react-router";

import { ReactComponent as BarsMenu } from "../../assets/bars-icon.svg";

import "./navbar-styles.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"}>
          <span>AA-DEV</span>
        </Link>
        <ul>
          <li className="nav-link">
            <Link className="nav-link" to={"proyects"}>
              Proyects
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to={"about"}>
              About Me
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to={"contact"}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="langChanger-barsIcon-date-container">
          <span className="language-toggler">LANG</span>
          <BarsMenu className="bars-icon" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
