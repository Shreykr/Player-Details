import "./image.css";

const Image = (props) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};

export default Image;
