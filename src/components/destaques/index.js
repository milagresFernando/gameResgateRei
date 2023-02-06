// Css
import "./index.scss";

// React Elements/Hooks
import { Fragment } from "react";

// Components
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Title from "components/texts/title";
import TextBlock from "components/texts/text_block";

function Destaques(props) {
  //type pode ser "full", "fullLeft" ou "fullRight"
  //imgSide pode ser "top", "left", "bottom" ou "right"
  return (
    <Fragment>
      <div
        className={`blocoPadrao ${props.type ? "typeFull" : ""}  ${
          props.type ? props.type : ""
        }  ${props.className}`}
      >
        {props.imgSide ? (
          <Row className="align-items-center">
            <Col
              xs={`${
                props.imgSide === "top" ||
                props.imgSide === "bottom" ||
                props.breakContent === "sm" ||
                props.breakContent === "md" ||
                props.breakContent === "lg" ||
                props.breakContent === "xl" ||
                props.breakContent === "xxl"
                  ? "12"
                  : props.colXs
                  ? props.colXs
                  : ""
              }`}
              sm={`${
                props.imgSide === "top" ||
                props.imgSide === "bottom" ||
                props.breakContent === "md" ||
                props.breakContent === "lg" ||
                props.breakContent === "xl" ||
                props.breakContent === "xxl"
                  ? "12"
                  : props.colSm
                  ? props.colSm
                  : ""
              }`}
              md={`${
                props.imgSide === "top" ||
                props.imgSide === "bottom" ||
                props.breakContent === "lg" ||
                props.breakContent === "xl" ||
                props.breakContent === "xxl"
                  ? "12"
                  : props.colMd
                  ? props.colMd
                  : ""
              }`}
              lg={`${
                props.imgSide === "top" ||
                props.imgSide === "bottom" ||
                props.breakContent === "xl" ||
                props.breakContent === "xxl"
                  ? "12"
                  : props.colLg
                  ? props.colLg
                  : ""
              }`}
              xl={`${
                props.imgSide === "top" ||
                props.imgSide === "bottom" ||
                props.breakContent === "xxl"
                  ? "12"
                  : props.colXl
                  ? props.colXl
                  : ""
              }`}
              xxl={`${
                props.imgSide === "top" || props.imgSide === "bottom"
                  ? "12"
                  : props.colXXl
                  ? props.colXXl
                  : ""
              }`}
              className={`${
                props.breakContent
                  ? props.imgSide === "left" || props.imgSide === "top"
                    ? `order-${props.breakContent}-1`
                    : props.imgSide === "right"
                    ? `order-${props.breakContent}-2`
                    : props.imgSide === "bottom"
                    ? "order-2"
                    : ""
                  : props.imgSide === "left" || props.imgSide === "top"
                  ? "order-1"
                  : props.imgSide === "right"
                  ? "order-2"
                  : props.imgSide === "bottom"
                  ? "order-2"
                  : ""
              }`}
            >
              <Image
                src={props.imgUrl}
                className="mx-auto d-block my-3"
                fluid
              />
            </Col>

            <Col
              className={`${
                props.breakContent
                  ? props.imgSide === "left" || props.imgSide === "top"
                    ? `order-${props.breakContent}-2`
                    : props.imgSide === "right"
                    ? `order-${props.breakContent}-1`
                    : props.imgSide === "bottom"
                    ? "order-1"
                    : ""
                  : props.imgSide === "left" || props.imgSide === "top"
                  ? "order-md-2"
                  : props.imgSide === "right"
                  ? "order-md-1"
                  : props.imgSide === "bottom"
                  ? "order-1"
                  : ""
              }`}
            >
              {props.title && (
                <Title
                  typeH="4"
                  className=""
                  content={<Fragment>{props.title}</Fragment>}
                />
              )}
              {props.textsBlock && <TextBlock textsBlock={props.textsBlock} />}
            </Col>
          </Row>
        ) : (
          <Fragment>
            {props.title && (
              <Title
                typeH="4"
                className=""
                content={<Fragment>{props.title}</Fragment>}
              />
            )}
            {props.textsBlock && (
              <div className="wrapperTextBlock">
                <TextBlock textsBlock={props.textsBlock} />
              </div>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Destaques;
