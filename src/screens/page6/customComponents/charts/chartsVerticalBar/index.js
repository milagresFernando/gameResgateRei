// React Elements/Hooks
import { Fragment, useRef, useState } from "react";

// Components
import { Col } from "react-bootstrap";
import Title from "../../../../../components/texts/title";
import TextBlock from "../../../../../components/texts/text_block";
import Transitions from "../../../../../components/transitions";
import Btn from "../../../../../components/buttons";
import scrollTo from "../../../../../globalFunctions/scrollTo";

//Imagens

//TESTE DO TRANSITIONS
function ChartsVerticalBar() {
  const [state, setState] = useState(false);
  const [interact, setInteract] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const content = useRef(null);

  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Texto 1 <strong>texto bold</strong> planet from the Sun and the
          second-smallest planet in the Solar System after Mercury. In English,
          Mars carries a name of the Roman god of war and is often referred to
          as the Texto 1 <strong>texto bold</strong> planet from the Sun and the
          second-smallest planet in the Solar System after Mercury. In English,
          Mars ca
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          from the Sun and the
          <em>second-smallest planet in the Solar System after</em>
          Mercury. In English, Mars carries a name of the Roman god of war and
          is often referred to
        </Fragment>
      ),
    },
  ];

  const options = {
    type: "collapse",
    orientation: "vertical", //'vertical' | 'horizontal'
    //OPCIONAL
    // timeout: { enter: "auto", exit: "auto" },
    easing: "linear",
    // OU
    // {
    //   enter: "linear",
    //   exit: "linear",
    // },
    scroll: true,
  };

  function handleClick() {
    setInteract((prev) => !prev);
    options.scroll && scrollTo(content, 20);
  }

  return (
    <Fragment>
      <Col xs="12" className="relative">
        <hr />
        <Title
          typeH="4"
          className=""
          content={<Fragment>Transições Collapse</Fragment>}
        />

        {showButton && (
          <Btn
            className="btn-padrao btn-rounded"
            size="md"
            onClick={handleClick}
          >
            Alterna abre/fecha
          </Btn>
        )}

        <div ref={content}>
          <Transitions
            setState={setState}
            interact={interact}
            options={options}
            state={state}
            typeInteraction={"switch"} //'oneClick', 'switch', 'hideElement'
            setShowButton={setShowButton}
          >
            <TextBlock textsBlock={textsBlock} />
            <p>oe</p>
            <span> adssadasamadas </span>
          </Transitions>
        </div>
      </Col>
    </Fragment>
  );
}

export default ChartsVerticalBar;
