// Css
import "./index.scss";

// React Elements/Hooks
import { Fragment } from "react";

function TextBlock(props) {
  // passe um valor de elemento de texto em  tagElement pra setar as tags <p>,<span>,etc.
  let TagElement;
  const textsBlock = props.textsBlock.map((textBlock, id) => {
    TagElement = textBlock.tagElement;
    return (
      <Fragment key={id}>
        <TagElement className={`textBlock ${textBlock.className}`}>
          {textBlock.content} {props.children}
        </TagElement>
      </Fragment>
    );
  });

  return textsBlock;
}

export default TextBlock;
