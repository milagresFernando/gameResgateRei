// Css
import "./index.scss";

// React Elements/Hooks
import { Fragment } from "react";

// Components

import TextBlock from "components/texts/text_block";
import Title from "components/texts/title";

//Imagens

function TimelineHorizontalInterative(props) {
  function handleClick(id) {
    let buttonsClone = [...props.buttons];
    buttonsClone.forEach((buttonClone, index) => {
      if (props.buttons.indexOf(props.buttons[index]) === id) {
        buttonsClone[index].check = true;
        buttonsClone[index].isActive = true;
      } else {
        buttonsClone[index].isActive = false;
      }
    });
    props.setButtons(buttonsClone);
  }

  const buttons = props.buttons.map((button, id) => {
    return (
      <li
        onClick={() => handleClick(id)}
        className={`${
          props.buttons[id].isActive ? "tab-timeline-selected" : ""
        }`}
        key={id}
      >
        <span>{button.buttonName}</span>
        <div
          className={`${
            props.withChecks
              ? props.buttons[id].check === true
                ? "check"
                : "notCheck"
              : ""
          }`}
        ></div>
      </li>
    );
  });

  const timelineHorizontalItems = props.timelineHorizontalItems.map(
    (timelineHorizontalItem, id) => {
      return (
        <div
          className={`horizontalTimeline-content ${
            props.buttons[id].isActive === true
              ? "tab-timeline-active"
              : "tab-timeline-disabled"
          }`}
          key={id}
        >
          <b className="horizontalTimeline-title">
            {props.buttons[id].buttonName}
          </b>
          <div className="horizontalTimeline-text">
            <Title
              typeH={timelineHorizontalItem.title.tagTitle}
              className={timelineHorizontalItem.title.titleClassName}
              content={
                <Fragment>{timelineHorizontalItem.title.titleContent}</Fragment>
              }
            />

            <div
              className={`${
                timelineHorizontalItem.contents.contentClassName
                  ? timelineHorizontalItem.contents.contentClassName
                  : ""
              }`}
            >
              <TextBlock
                textsBlock={timelineHorizontalItem.contents.textBlocks}
              />
            </div>
          </div>
        </div>
      );
    }
  );
  return (
    <Fragment>
      <div
        className={`horizontalTimeline ${
          props.className ? props.className : ""
        }`}
      >
        <ul>
          <span className="group-timeline" number="1">
            {buttons}
          </span>
        </ul>

        <div className="contentTimeline">{timelineHorizontalItems}</div>
      </div>
    </Fragment>
  );
}

export default TimelineHorizontalInterative;
