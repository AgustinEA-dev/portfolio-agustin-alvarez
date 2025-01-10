import { Link } from "react-router";

import "./cover.styles.scss";

export default function Cover() {
  return (
    <section className="cover">
      <div className="logo-container">
        <div className="upper-logo">
          <img id="a1" className="a-element" src="logo-a1.svg" alt="" />
          <img id="a2" className="a-element" src="logo-a2.svg" alt="" />
        </div>
        <div className="lower-logo">
          <img className="d-element" src="logo-d.svg" alt="" />
          <img className="e-element" src="logo-e.svg" alt="" />
          <img className="v-element" src="logo-v.svg" alt="" />
        </div>
      </div>
      <h1 id="h1" className="cover-title">
        AGUSTÍN ÁLVAREZ
      </h1>
      <h2 id="h2" className="cover-subtitle">
        Desarrollador FrontEnd
      </h2>
      <Link to="/proyects" className="cover-link">
        Ver Proyectos
      </Link>
    </section>
  );
}
