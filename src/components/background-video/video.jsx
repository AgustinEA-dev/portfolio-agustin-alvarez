import "./video-styles.css";

const BackgroundVideo = () => {
  return (
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
  );
};

export default BackgroundVideo;
