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

function BlocoLottiePlaySegment(props) {
  const [randomId, setRandomId] = useState("");
  const [lotties, setLotties] = useState(false);
  const [interactivity, setInteractivity] = useState(false);

  useEffect(() => {
    setRandomId(generateId());
    loadData();
  }, []);

  async function loadData() {
    const lottie1 = await Lotties.getLotties("growth");
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
            visibility: [0, 1],
            type: "loop",
            frames: [70, 500],
          },
        ],
      });
    }
  }, [lotties, randomId]);

  if (!interactivity) {
    return <div>carregando</div>;
  } else {
    const textsBlock = [
      {
        tagElement: "p",
        className: "",
        content: (
          <Fragment>
            Animação em looping, é possível escolher o intervalo de frames em
            looping, nesse caso, está do 70 ao 500
          </Fragment>
        ),
      },
    ];

    return (
      <>
        <Row>
          <Col xs="12">
            <Title
              typeH="4"
              className=""
              content={
                <Fragment>Animação em looping (entrada por scroll) </Fragment>
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

export default BlocoLottiePlaySegment;
