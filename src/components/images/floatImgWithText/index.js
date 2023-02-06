// Css
import "./index.scss";

// React Elements/Hooks

// Components
import { Image } from "react-bootstrap";
import TextBlock from "components/texts/text_block";

function FloatImgWithText(props) {
  return (
    <div className={`floatImgWithText ${props.className}`}>
      <Image
        src={props.img}
        className={`${
          props.breakContent
            ? `me-${props.breakContent}-3 mb-3 mx-auto d-block ${
                props.float === "left"
                  ? `float-${props.breakContent}-start`
                  : `float-${props.breakContent}-end`
              }`
            : `me-3 mb-3 mx-auto d-block ${
                props.float === "left" ? `float-start` : `float-end`
              } `
        }`}
        loading="lazy"
        alt=""
        fluid
      />

      <TextBlock textsBlock={props.textsBlock} />
    </div>
  );
}

export default FloatImgWithText;
