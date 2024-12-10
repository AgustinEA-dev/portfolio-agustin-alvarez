import { ReactComponent as BarsMenu } from "../../assets/bars-icon.svg";

import "./nav-styles.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <span>AA-DEV</span>
        <ul>
          <li className="nav-link">
            <a className="nav-link" href="">
              Proyects
            </a>
          </li>
          <li className="nav-link">
            <a className="nav-link" href="">
              About Me
            </a>
          </li>
          <li className="nav-link">
            <a className="nav-link" href="">
              Contact
            </a>
          </li>
        </ul>
        <div className="langChanger-barsIcon-container">
          <span className="language-toggler">LANG</span>
          <BarsMenu className="bars-icon" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
