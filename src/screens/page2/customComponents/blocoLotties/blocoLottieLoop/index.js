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

//Imagens

function BlocoLottieLoop(props) {
  const [randomId, setRandomId] = useState("");
  const [lotties, setLotties] = useState(false);
  const [lottieItem, setlottieItem] = useState({});

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
    event: "loopCustom",
  };

  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: <Fragment>Animação em looping simples</Fragment>,
    },
  ];

  useEffect(() => {
    clearLottie();
    return () => {
      setlottieItem({});
    };
  }, [lotties]);

  const clearLottie = () => {
    setlottieItem(
      <LottieTae
        className={options.className}
        options={options}
        randomId={options.randomId}
      ></LottieTae>
    );
  };

  if (!lotties) {
    return <div>carregando</div>;
  } else {
    return (
      <>
        <Row xs="12">
          <Title
            typeH="4"
            className=""
            content={<Fragment>Animação em looping</Fragment>}
          />
          <TextBlock textsBlock={textsBlock} />

          <div className="animatedWrapper">{lottieItem}</div>
        </Row>
      </>
    );
  }
}

export default BlocoLottieLoop;
