import "./proyect-styles.css";

const ProyectPreview = ({ img }) => {
  return (
    <div
      className="img-div"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default ProyectPreview;
