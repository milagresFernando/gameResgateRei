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
function TransitionsSlideRelativeContainer() {
  const [state, setState] = useState(false);
  const [interact, setInteract] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const content = useRef(null);
  const [canClick, setCanClick] = useState(true);
  const containerRef = useRef(); //IMPORTANTE

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
    type: "slideRelative",
    direction: "up", //'down' | 'left' | 'right' | 'up'
    //OPCIONAL
    // easing: {
    //   enter: "cubic-bezier(0, 1.5, .8, 1)",
    //   exit: "linear",
    // },
    // timeout: { appear: 100, enter: 500, exit:  100},
    //ou
    // timeout: 600,
    typeInteraction: "switch",
    scroll: true,
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

  //IMPORTANTE class="overflow-hidden" e o ref={containerRef} para ser relativo ao componente escolhido
  return (
    <Fragment>
      <Col xs="12" className="relative overflow-hidden" ref={containerRef}>
        <hr />
        <Title
          typeH="4"
          className=""
          content={<Fragment>Transições Slide relativo ao Container</Fragment>}
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
            containerRef={containerRef} //IMPORTANTE para ser relativo ao container
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

export default TransitionsSlideRelativeContainer;
