// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import LottieTae from "components/lottieFiles";
import TextBlock from "components/texts/text_block";
import Title from "components/texts/title";

//Functions
import generateId from "globalFunctions/generateId";

//Services
import Lotties from "services/lotties";

function BlocoLottieScrollRelativeContainer(props) {
  const [randomId, setRandomId] = useState("");
  const [randomIdTrigger, setRandomIdTrigger] = useState("");
  const [lotties, setLotties] = useState(false);
  const [interactivity, setInteractivity] = useState(false);

  useEffect(() => {
    setRandomId(generateId());
    setRandomIdTrigger(generateId());
    loadData();
  }, []);

  async function loadData() {
    const lottie1 = await Lotties.getLotties("patternColorful");
    setLotties([lottie1]);
  }

  const options = {
    className: "",
    animationData: lotties[0],
    randomId: randomId,
  };

  useEffect(() => {
    if (lotties && randomId != "") {
      setInteractivity({
        player: `#${randomId}`,
        mode: "scroll",
        container: `#${randomIdTrigger}`,
        actions: [
          {
            visibility: [0, 1.0],
            type: "seek",
            frames: [0, 100],
          },
        ],
      });
    }
  }, [lotties, randomId]);

  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          A animação é ativada por scroll quando o elemnto em cinza entra em
          tela
        </Fragment>
      ),
    },
  ];
  const textsBlock1 = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Este é o elemento que ativa a animação quando ele começa a surgir em
          tela.
        </Fragment>
      ),
    },
  ];

  if (!interactivity) {
    return <div>carregando</div>;
  } else {
    return (
      <>
        <Row>
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={
                <Fragment>
                  Animação ativada quando um elemento entra na tela
                </Fragment>
              }
            />
            <TextBlock textsBlock={textsBlock} />
          </Col>

          <Col xs="12">
            <div className="animatedWrapper">
              <LottieTae options={options} interactivity={interactivity} />
            </div>
          </Col>

          <Col xs="12" id={randomIdTrigger} className="mb-5">
            <div className="boxLottieRelative">
              <TextBlock textsBlock={textsBlock1} />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default BlocoLottieScrollRelativeContainer;
