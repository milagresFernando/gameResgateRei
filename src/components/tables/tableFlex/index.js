// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TextBlock from "components/texts/text_block";
import Title from "components/texts/title";

// Functions
import setBreakPoint from "globalFunctions/setBreakPoint";
import debounceTimeOut from "globalFunctions/debounceTimeOut";
//Imagens

function TableFlex(props) {
  const [breakResponsive, setBreakResponsive] = useState(false);

  useEffect(() => {
    if (props.breakContent) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        if (window.innerWidth <= setBreakPoint(props.breakContent)) {
          setBreakResponsive(true);
        } else {
          setBreakResponsive(false);
        }
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [breakResponsive]);

  useEffect(() => {
    if (props.breakContent) {
      if (window.innerWidth <= setBreakPoint(props.breakContent)) {
        setBreakResponsive(true);
      }
    }
  }, []);

  const tableItems = props.tableFlexItems.map((tableItems, idItems) => {
    return (
      <Fragment key={idItems}>
        <div className="div_tableRow">
          {props.tableFlexItems[idItems].map((tableHeaders, idHeaders) => {
            return (
              <div className="div_tableHeader" key={idHeaders}>
                <Title
                  typeH={tableHeaders.title.tagTitle}
                  className={tableHeaders.title.titleClassName}
                  content={
                    <Fragment>{tableHeaders.title.titleContent}</Fragment>
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="div_tableRow">
          {props.tableFlexItems[idItems].map((tableContent, idContent) => {
            return (
              <div className="div_tableCol" key={idContent}>
                <TextBlock textsBlock={tableContent.contents.textBlocks} />
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  });
  const tableBreak = props.tableFlexItems.map((tableItems, idItems) => {
    return (
      <Fragment key={idItems}>
        {props.tableFlexItems[idItems].map((tableContent, idContent) => {
          return (
            <Fragment key={idContent}>
              <div className="div_tableRow">
                <div className="div_tableHeader">
                  <Title
                    typeH={tableContent.title.tagTitle}
                    className={tableContent.title.titleClassName}
                    content={
                      <Fragment>{tableContent.title.titleContent}</Fragment>
                    }
                  />
                </div>
              </div>
              <div className="div_tableRow">
                <div
                  className={`div_tableCol ${
                    tableContent.contents.contentClassName
                      ? tableContent.contents.contentClassName
                      : ""
                  }`}
                >
                  <TextBlock textsBlock={tableContent.contents.textBlocks} />
                </div>
              </div>
            </Fragment>
          );
        })}
      </Fragment>
    );
  });

  let contentTableFlex;
  if (breakResponsive) {
    contentTableFlex = <div className="div_column">{tableBreak}</div>;
  } else {
    contentTableFlex = <div className="div_column">{tableItems}</div>;
  }

  return (
    <div className={`table-flex ${props.className ? props.className : ""}`}>
      {contentTableFlex}
    </div>
  );
}

export default TableFlex;
