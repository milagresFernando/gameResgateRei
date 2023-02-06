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

function BlocoLottieScrollOffsetLooping(props) {
  const [randomId, setRandomId] = useState("");
  const [lotties, setLotties] = useState(false);
  const [interactivity, setInteractivity] = useState(false);

  useEffect(() => {
    setRandomId(generateId());
    loadData();
  }, []);

  async function loadData() {
    const lottie1 = await Lotties.getLotties("robot");
    setLotties([lottie1]);
  }

  const options = {
    className: "",
    animationData: lotties[0],
    randomId: randomId,
    event: "noLoopAutoPlay",
  };

  useEffect(() => {
    if (lotties && randomId != "") {
      setInteractivity({
        player: `#${randomId}`,
        mode: "scroll",
        actions: [
          {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.2, 0.45],
            type: "seek",
            frames: [0, 45],
          },
          {
            visibility: [0.45, 1.0],
            type: "loop",
            frames: [45, 60],
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
          Até chegar em 45% da tela a animação fica parada , após isso ela
          acontece e fica em looping
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
                  Animação ativada quando chegar em uma parte da tela, com
                  looping
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
        </Row>
      </>
    );
  }
}

export default BlocoLottieScrollOffsetLooping;
