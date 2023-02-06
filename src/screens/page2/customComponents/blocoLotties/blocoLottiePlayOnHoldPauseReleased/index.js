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

function BlocoLottiePlayOnHoldPauseReleased(props) {
  const [randomId, setRandomId] = useState("");
  const [lotties, setLotties] = useState(false);
  const [interactivity, setInteractivity] = useState(false);

  useEffect(() => {
    setRandomId(generateId());
    loadData();
  }, []);

  async function loadData() {
    const lottie1 = await Lotties.getLotties("plant");
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
        mode: "cursor",
        actions: [
          {
            type: "pauseHold",
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
          A animação será reproduzida quando o cursor for colocado sobre a
          animação e pausará se o cursor sair da animação.
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
                  Reproduzir animação onHold (e pausar quando liberado)
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

export default BlocoLottiePlayOnHoldPauseReleased;
