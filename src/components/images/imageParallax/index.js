// Css
import "./index.scss";

function ImageParallax(props) {
  return (
    <div
      className={`img-parallax mb-3 ${props.className}`}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    ></div>
  );
}

export default ImageParallax;
