// Css
import "./index.scss";

// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Image } from "react-bootstrap";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

//Imagens

function SliderCompare(props) {
  return (
    <Fragment>
      <ImgComparisonSlider
        value={props.startPosition}
        className={`slider-with-animated-handle ${props.className}`}
      >
        <div className="handle-slider" slot="handle"></div>
        <Image slot="first" src={props.imgCompara1} fluid />
        <Image slot="second" src={props.imgCompara2} fluid />
      </ImgComparisonSlider>
    </Fragment>
  );
}

export default SliderCompare;
