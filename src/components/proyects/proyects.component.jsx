import { useState } from "react";

import Proyect from "../proyect/proyect.component";

import { proyects } from "../../data/proyects";

export default function Proyects() {
  const [proyectId, setId] = useState(null);

  const handleMouseEnter = (id) => {
    setId(id);
  };

  const handleMouseLeave = () => {
    setId(null);
  };

  const filteredProyect = proyects.filter(
    (proyect) => proyect.id === proyectId
  );
  console.log(filteredProyect);

  return (
    <section style={styles.container}>
      <div style={styles.proyectsLeft}>
        {filteredProyect.length ? (
          <img
            src={filteredProyect[0].img}
            alt="proyect_preview.jpg"
            style={{
              width: "100%",
              height: "99%",
              borderRadius: "0 30px 0 0",
            }}
          />
        ) : null}
      </div>
      <div style={styles.proyectsRight}>
        <h1 className="h1" style={styles.title}>
          PROYECTOS
        </h1>
        {proyects.map(({ name, id }) => (
          <Proyect
            handleMouseEnter={() => handleMouseEnter(id)}
            handleMouseLeave={handleMouseLeave}
            key={id}
            title={name}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100dvh",
    display: "flex",
    backgroundColor: "black",
  },
  proyectsLeft: {
    width: "60%",
    paddingTop: "200px",
  },
  title: {
    padding: "40px",
    fontSize: "2.5rem",
    width: "max-content",
    color: "white",
  },
  proyectsRight: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "Center",
  },
};
