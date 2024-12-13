import "./proyects-styles.css";

const Proyects = () => {
  return (
    <>
      <section className="proyects">
        <div className="proyects-container">
          <h1 className="proyects-h1">PROYECTS</h1>
        </div>
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
      </section>
    </>
  );
};

export default Proyects;
