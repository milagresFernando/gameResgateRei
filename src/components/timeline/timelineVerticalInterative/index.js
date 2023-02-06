// Css
import "./index.scss";

// React Elements/Hooks
import { Fragment } from "react";

//Scripts
import AOS from "aos";

// Components
import Title from "components/texts/title";
import TextBlock from "components/texts/text_block";

//Imagens

function TimelineVerticalInterative(props) {
  function handleClick(id) {
    let buttonsClone = [...props.buttons];
    buttonsClone[id].check = true;
    buttonsClone[id].isActive = true;

    props.setButtons(buttonsClone);
  }

  const timelineVerticalItems = props.timelineVerticalItems.map(
    (timelineVerticalItem, id) => {
      return (
        <li
          onClick={() => handleClick(id)}
          className={`${props.buttons[id].isActive ? "selected" : ""}`}
          key={id}
        >
          <span className="pulse">
            <div
              className={`${
                props.withChecks
                  ? props.buttons[id].check === true
                    ? "check"
                    : "notCheck"
                  : ""
              }`}
            ></div>
          </span>
          <div className="content-timeline">
            <Title
              typeH={timelineVerticalItem.title.tagTitle}
              className={timelineVerticalItem.title.titleClassName}
              content={
                <Fragment>{timelineVerticalItem.title.titleContent}</Fragment>
              }
            />
            <div
              className={`${
                timelineVerticalItem.contents.contentClassName
                  ? timelineVerticalItem.contents.contentClassName
                  : ""
              }`}
            >
              <TextBlock
                textsBlock={timelineVerticalItem.contents.textBlocks}
              />
            </div>
          </div>
        </li>
      );
    }
  );
  return (
    <Fragment>
      <ul
        className={`verticalTimeline ${props.className ? props.className : ""}`}
      >
        {timelineVerticalItems}
      </ul>
    </Fragment>
  );
}

export default TimelineVerticalInterative;
