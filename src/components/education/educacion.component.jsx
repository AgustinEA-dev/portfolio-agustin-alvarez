import { certifications } from "../../data/certifications";

function Education() {
  return (
    <section style={styles.container}>
      <h1 className="h1" style={styles.title}>
        CERTIFICATIONS
      </h1>
      <div style={styles.certifications}>
        {certifications.map((certification) => (
          <>
            <img
              className="img"
              src={certification.img}
              alt=""
              style={styles.certification}
            />
          </>
        ))}
      </div>
    </section>
  );
}

export default Education;

const styles = {
  container: {
    width: "100%",
    minHeight: "100dvh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    paddingTop: "100px",
    width: "80%",
    color: "white",
    textAlign: "center",
  },
  certifications: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px",
    color: "white",
  },
  certification: {
    width: "400px",
  },
};
