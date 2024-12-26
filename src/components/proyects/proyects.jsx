import { useState } from "react";

import { proyects } from "../../proyects";

import ProyectPreview from "../proyect/proyect";
import Ankor from "../ankor/ankor";

import BackgroundVideo from "../background-video/video";

import "./proyects-styles.css";

const Proyects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setSelectedId(id);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setSelectedId(null);
    setIsHovered(false);
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
            <ProyectPreview
              key={filteredProyect[0].id}
              img={filteredProyect[0].img}
            />
          ) : null}
        </div>
        <div className="titles-container">
          <h2>PROYECTS</h2>
          {proyects.map((proyect) => (
            <>
              <Ankor
                key={proyect.id}
                url={proyect.urlVercel}
                name={proyect.name}
                handleMouseEnter={() => handleMouseEnter(proyect.id)}
                handleMouseLeave={handleMouseLeave}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Proyects;
