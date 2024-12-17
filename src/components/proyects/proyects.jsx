import "./proyects-styles.css";

const Proyects = () => {
  return (
    <>
      <section className="proyects">
        <div className="proyects-video-container">
          <video
            autoPlay
            muted
            loop
            id="video"
            src="keyboard1.mp4"
            type="keyboard"
          ></video>
        </div>
        <h1 className="proyects-h1">PROYECTS</h1>
        <div className="proyects-container">
          <div className="preview-container"></div>
          <div className="proyect-title-container"></div>
        </div>
      </section>
    </>
  );
};

export default Proyects;
