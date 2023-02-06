// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect, useRef } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "components/texts/title";
import TextBlock from "components/texts/text_block";
import Transitions from "components/transitions";

//Imagens

function FeedBackSelection(props) {
  const [feedBackSelectionItems, setFeedBackSelectionItems] = useState([]);

  const containerFeedBackSelection = useRef(null);

  useEffect(() => {
    setFeedBackSelectionItems(
      props.finishItems.map((finishItem, id) => {
        return (
          <Row key={id}>
            <Col
              xs={`${
                props.options.feedBackSelection.breakContent === "sm" ||
                props.options.feedBackSelection.breakContent === "md" ||
                props.options.feedBackSelection.breakContent === "lg" ||
                props.options.feedBackSelection.breakContent === "xl" ||
                props.options.feedBackSelection.breakContent === "xxl"
                  ? "12"
                  : props.options.feedBackSelection.colXs
                  ? props.options.feedBackSelection.colXs
                  : ""
              }`}
              sm={`${
                props.options.feedBackSelection.breakContent === "md" ||
                props.options.feedBackSelection.breakContent === "lg" ||
                props.options.feedBackSelection.breakContent === "xl" ||
                props.options.feedBackSelection.breakContent === "xxl"
                  ? "12"
                  : props.options.feedBackSelection.colSm
                  ? props.options.feedBackSelection.colSm
                  : ""
              }`}
              md={`${
                props.options.feedBackSelection.breakContent === "lg" ||
                props.options.feedBackSelection.breakContent === "xl" ||
                props.options.feedBackSelection.breakContent === "xxl"
                  ? "12"
                  : props.options.feedBackSelection.colMd
                  ? props.options.feedBackSelection.colMd
                  : ""
              }`}
              lg={`${
                props.options.feedBackSelection.breakContent === "xl" ||
                props.options.feedBackSelection.breakContent === "xxl"
                  ? "12"
                  : props.options.feedBackSelection.colLg
                  ? props.options.feedBackSelection.colLg
                  : ""
              }`}
              xl={`${
                props.options.feedBackSelection.breakContent === "xxl"
                  ? "12"
                  : props.options.feedBackSelection.colXl
                  ? props.options.feedBackSelection.colXl
                  : ""
              }`}
              xxl={`${
                props.options.feedBackSelection.colXXl
                  ? props.options.feedBackSelection.colXXl
                  : ""
              }`}
              className={`relative`}
            >
              <Image
                src={finishItem.thumb}
                className={"d-flex m-auto"}
                loading="lazy"
                alt=""
                fluid
              />
            </Col>

            <Col>
              {finishItem.title && (
                <Title
                  typeH={finishItem.title.tagTitle}
                  className={finishItem.title.titleClassName}
                  content={<Fragment>{finishItem.title.titleContent}</Fragment>}
                />
              )}
              {finishItem.description && (
                <TextBlock textsBlock={finishItem.description} />
              )}
            </Col>
          </Row>
        );
      })
    );
  }, [props.finishItems]);
  return (
    <Fragment>
      <div
        ref={containerFeedBackSelection}
        className={`feedBackSelectionItems ${props.options.feedBackSelection.className}`}
      >
        <Transitions
          interact={props.countMaxSelected == props.maxSelection}
          options={props.feedBackSelectionOptions}
          typeInteraction={props.feedBackSelectionOptions.typeInteraction} //'oneClick', 'switch', 'hideElement'
        >
          <div className="feedBackSelectionItemsWrapper">
            {props.options.feedBackSelection.title && (
              <Fragment>
                <Title
                  typeH={props.options.feedBackSelection.title.tagTitle}
                  className={
                    props.options.feedBackSelection.title.titleClassName
                  }
                  content={
                    <Fragment>
                      {props.options.feedBackSelection.title.content}
                    </Fragment>
                  }
                />
                <hr />
              </Fragment>
            )}
            {feedBackSelectionItems}
          </div>
        </Transitions>
      </div>
    </Fragment>
  );
}

export default FeedBackSelection;
