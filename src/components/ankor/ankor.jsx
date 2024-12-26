const Ankor = ({ name, url, handleMouseEnter, handleMouseLeave }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {name}
    </a>
  );
};

export default Ankor;
