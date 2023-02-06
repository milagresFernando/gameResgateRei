// Css
import "./index.scss";

// React Elements/Hooks
import { useState } from "react";

// Components
import Accordion from "react-bootstrap/Accordion";
import TextBlock from "components/texts/text_block";
import FlexImgWithText from "components/images/flexImgWithText";
//Imagens

function Accordions(props) {
  const [accordionIsImgFull, setAccordionIsImgFull] = useState(false);
  const [idAtual, setidAtual] = useState();
  const [classeItem, setClasseItem] = useState("");
  //type pode ser "full", "fullLeft" ou "fullRight"
  //imgSide pode ser "top", "left", "bottom" ,"right" "fullRight" ou "fullLeft"

  async function handleClickAccordion(images, id) {
    // seta a imgFull quando o accordion abre

    setTimeout(() => {
      setidAtual(id);
    }, 1);
    if (
      images &&
      (images.imgSide === "fullLeft" || images.imgSide === "fullRight")
    ) {
      setAccordionIsImgFull(true);
    } else {
      setAccordionIsImgFull(false);
    }
    if (id == idAtual && classeItem == "ativo") {
      setClasseItem("");
      return;
    } else {
      setClasseItem("ativo");
      return;
    }
  }

  const accordionItens = props.accordionItens.map((accordionItem, id) => {
    return (
      <Accordion.Item
        eventKey={id}
        key={id}
        className={id == idAtual && classeItem}
      >
        {accordionItem.title ? (
          <Accordion.Header
            onClick={() => handleClickAccordion(accordionItem.images, id)}
            as={`h${accordionItem.title.tagTitle}`}
            className={`${props.type ? "typeFull" : ""} ${props.type} ${
              accordionItem.title.titleClassName
            }title`}
          >
            {accordionItem.title.titleContent}
          </Accordion.Header>
        ) : (
          <Accordion.Header
            onClick={() => handleClickAccordion(accordionItem.images, id)}
          ></Accordion.Header>
        )}

        <Accordion.Body
          className={`${accordionItem.images ? "bodyWithImg" : ""} ${
            accordionItem.images &&
            (accordionItem.images.imgSide === "fullLeft"
              ? "fullLeft"
              : accordionItem.images.imgSide === "left"
              ? "left"
              : accordionItem.images.imgSide === "right"
              ? "right"
              : accordionItem.images.imgSide === "fullRight"
              ? "fullRight"
              : accordionItem.images.imgSide === "bottom"
              ? "bottom"
              : accordionItem.images.imgSide === "top"
              ? " top"
              : "")
          } ${
            accordionItem.contents
              ? accordionItem.contents.contentClassName
              : ""
          }`}
        >
          {accordionItem.images && (
            <FlexImgWithText
              id={id}
              idAtual={idAtual}
              breakContent={props.breakContent}
              accordionIsImgFull={accordionIsImgFull}
              textsBlock={
                accordionItem.contents && accordionItem.contents.textBlocks
              }
              imgSide={accordionItem.images.imgSide}
              imgUrl={accordionItem.images.imgUrl}
              imgUrlBreak={accordionItem.images.imgUrlBreak}
              rowClasses={accordionItem.images.rowClasses}
              colXs={accordionItem.images.colXs}
              colSm={accordionItem.images.colSm}
              colMd={accordionItem.images.colMd}
              colLg={accordionItem.images.colLg}
              colXl={accordionItem.images.colXl}
              colXXl={accordionItem.images.colXXl}
            />
          )}

          {!accordionItem.images && accordionItem.contents && (
            <TextBlock textsBlock={accordionItem.contents.textBlocks} />
          )}
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return (
    <Accordion
      defaultActiveKey="0"
      alwaysOpen={props.alwaysOpen}
      className={props.className}
    >
      {accordionItens}
    </Accordion>
  );
}

export default Accordions;
