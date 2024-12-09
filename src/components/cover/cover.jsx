import { ReactComponent as Logo } from "../../assets/logo.svg";

import NavBar from "../nav/nav";

import "./cover-styles.css";

const Cover = () => {
  return (
    <>
      <NavBar />
      <section className="cover">
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            id="video"
            src="keyboard1.mp4"
            type="keyboard"
          ></video>
        </div>
        <Logo id="logo" className="animate" />
        <h1>AGUSTÍN ÁLVAREZ</h1>
        <h2>FrontEnd Developer</h2>
        <div className="links-container">
          <a href="">View Proyects</a>
        </div>
      </section>
    </>
  );
};

export default Cover;
