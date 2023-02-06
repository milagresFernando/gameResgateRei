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

function BlocoLottieToggle(props) {
  const [randomId, setRandomId] = useState("");
  const [lotties, setLotties] = useState(false);
  const [interactivity, setInteractivity] = useState(false);

  useEffect(() => {
    setRandomId(generateId());
    loadData();
  }, []);

  async function loadData() {
    const lottie1 = await Lotties.getLotties("dayNight");
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
        mode: "cursor",
        actions: [
          {
            type: "toggle",
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
          Controle a animação clicando no elemento, clicando novamente a
          animação é executada ao contrário
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
                <Fragment>Animação ativada por click, alternado</Fragment>
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

export default BlocoLottieToggle;
