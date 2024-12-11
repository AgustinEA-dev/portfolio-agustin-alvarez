import { Link, Outlet } from "react-router";

import { ReactComponent as BarsMenu } from "../../assets/bars-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./navbar-styles.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"}>
          <Logo className="navbar-logo" />
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
        <div className="langChanger-barsIcon-container">
          <span className="language-toggler">LANG</span>
          <BarsMenu className="bars-icon" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
