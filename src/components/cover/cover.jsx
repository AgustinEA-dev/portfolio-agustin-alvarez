import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import BackgroundVideo from "../background-video/video";
import H2 from "../h2/h2";

import "./cover-styles.css";

const Cover = () => {
  let date = Date();
  return (
    <>
      <section className="cover">
        <BackgroundVideo />
        <Logo id="logo" className="animate" />
        <h1>AGUSTÍN ÁLVAREZ</h1>
        <H2 innerText="Front-End Developer" />
        <div className="link-container">
          <Link className="proyects-link" to={"/proyects"}>
            View Proyects
          </Link>
          <div className="date-container">- {date.slice(0, 15)} -</div>
        </div>
      </section>
    </>
  );
};

export default Cover;
