import { useState } from "react";

import { proyects } from "../../proyects";

import ProyectPreview from "../proyect/proyect";

import BackgroundVideo from "../background-video/video";

import "./proyects-styles.css";

const Proyects = () => {
  const [selectedId, setSelectedId] = useState(null);
  // const [isHovered, setIshovered] = useState(false);

  const handleMouseEnter = (id) => {
    // setIshovered(true);
    setSelectedId(id);
  };

  const handleMouseLeave = () => {
    // setIshovered(false);
    setSelectedId(null);
  };

  const filteredProyect = proyects.filter(
    (proyect) => proyect.id === selectedId
  );

  return (
    <>
      <section className="proyects">
        <BackgroundVideo />
        <div className="preview-container">
          {filteredProyect.length > 0 ? (
            <ProyectPreview img={filteredProyect[0].img} />
          ) : null}
        </div>
        <div className="titles-container">
          <h2>PROYECTS</h2>
          {proyects.map((proyect) => (
            <>
              <a
                href={proyect.urlVercel}
                target="_blank"
                rel="noreferrer"
                key={proyect.id}
                onMouseEnter={() => handleMouseEnter(proyect.id)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {proyect.name}
              </a>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Proyects;
