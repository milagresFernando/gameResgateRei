// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useRef, useEffect } from "react";

// Components
import TextBlock from "components/texts/text_block";
import Title from "components/texts/title";

//Imagens

function FlipCard(props) {
  const [flip, setFlip] = useState(false);
  const [overFlowBack, setOverFlowBack] = useState(false);
  const contentBackRef = useRef(null);
  const contentBackInnerRef = useRef(null);

  useEffect(() => {
    if (
      contentBackInnerRef.current.clientHeight >
      contentBackRef.current.clientHeight
    ) {
      setOverFlowBack(true);
    }
  }, []);

  return (
    <Fragment>
      <div className={`flip-card ${props.className} ${props.direction}`}>
        <div className="card-selector">
          <div
            className={`fcard ${flip ? "active" : ""}`}
            onClick={() => setFlip(!flip)}
          >
            <div className="front">
              <div className="header-flip-card"></div>
              <div>
                <Title
                  typeH={props.cardItems.front[0].tagTitle}
                  className={props.cardItems.front[0].titleClassName}
                  content={
                    <Fragment>{props.cardItems.front[0].title}</Fragment>
                  }
                />
              </div>
              <div className="footer-flip-card">
                <p>
                  <span className="seta"></span>
                </p>
              </div>
            </div>

            <div className="back">
              <div
                className={`content-back ${overFlowBack ? "oveflowOn" : ""}`}
                ref={contentBackRef}
              >
                <div ref={contentBackInnerRef} className="content-back-inner">
                  <TextBlock textsBlock={props.cardItems.back} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FlipCard;
