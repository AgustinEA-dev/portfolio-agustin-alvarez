export default function Proyect({ title, handleMouseEnter, handleMouseLeave }) {
  return (
    <h2
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h2"
      style={styles.proyect}
    >
      {title}
    </h2>
  );
}

const styles = {
  proyect: {
    color: "white",
    textAlign: "center",
    padding: "10px",
  },
};
