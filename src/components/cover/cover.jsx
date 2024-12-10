import { ReactComponent as Logo } from "../../assets/logo.svg";

import { useTranslation } from "react-i18next";

import NavBar from "../nav/nav";

import "./cover-styles.css";

const Cover = () => {
  const [t, i18n] = useTranslation("global");
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
        <h2>{t("h2.ocupation")}</h2>
        <div className="links-container">
          <a href="">{t("a.text")}</a>
        </div>
      </section>
    </>
  );
};

export default Cover;
