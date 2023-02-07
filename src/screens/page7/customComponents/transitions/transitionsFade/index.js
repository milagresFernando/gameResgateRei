// React Elements/Hooks
import { Fragment, useRef, useState } from "react";

// Components
import { Col } from "react-bootstrap";
import Title from "components/texts/title";
import TextBlock from "components/texts/text_block";
import Transitions from "components/transitions";
import Btn from "components/buttons";
import scrollTo from "globalFunctions/scrollTo";

//Imagens

//TESTE DO TRANSITIONS
function TransitionsFade() {
  const [state, setState] = useState(false);
  const [interact, setInteract] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [canClick, setCanClick] = useState(true);
  const content = useRef(null);

  const textsBlock1 = [
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
    type: "fade",
    //OPCIONAL
    // easing: {
    //   enter: "cubic-bezier(0, 1.5, .8, 1)",
    //   exit: "linear",
    // },
    timeout: { appear: 100, enter: 500, exit: 100 },
    //ou
    //  timeout: 500,
    typeInteraction: "switch",

    scroll: false,
  };

  const handleClick = () => {
    if (canClick) {
      setInteract((prev) => !prev);
      options.scroll && scrollTo(content, 20);
    }
    if (options.typeInteraction == "oneClick") {
      setCanClick(false);
    }
  };

  return (
    <Fragment>
      <Col xs="12" className="relative">
        <hr />
        <Title
          typeH="4"
          className=""
          content={<Fragment>Transições Fade</Fragment>}
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
            typeInteraction={options.typeInteraction} //'oneClick', 'switch', 'hideElement'
            setShowButton={setShowButton}
          >
            <TextBlock textsBlock={textsBlock1} />
            <p>oe</p>
            <span> adssadasamadas </span>
          </Transitions>
        </div>
      </Col>
    </Fragment>
  );
}

export default TransitionsFade;
