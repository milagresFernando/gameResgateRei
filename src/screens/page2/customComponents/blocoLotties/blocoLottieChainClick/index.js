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

function BlocoLottieChainClick(props) {
  const [randomId, setRandomId] = useState("");
  const [lotties, setLotties] = useState(false);
  const [counter, setCounter] = useState(0);
  const [lottieItem, setlottieItem] = useState([]);

  useEffect(() => {
    setRandomId(generateId());
    loadData();
  }, []);

  async function loadData() {
    const lottie1 = await Lotties.getLotties("runninPigeon");
    const lottie2 = await Lotties.getLotties("explosion");
    const lottie3 = await Lotties.getLotties("fallingFeathers");
    setLotties([lottie1, lottie2, lottie3]);
  }
  const chainItems = [
    {
      className: "",

      animationData: lotties[0],
      randomId: randomId,
      event: "click",
    },
    {
      className: "",

      animationData: lotties[1],
      randomId: randomId,
      event: "complete",
    },
    {
      className: "",

      animationData: lotties[2],
      randomId: randomId,
      event: "complete",
    },
  ];

  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Clique sobre a ilustração, para controlar a animação:
        </Fragment>
      ),
    },
  ];

  useEffect(() => {
    clearLottie();
    return () => {
      setlottieItem([]);
    };
  }, [counter, lotties]);

  const clearLottie = () => {
    setlottieItem(
      chainItems.map((item, id) => {
        if (id == counter) {
          return (
            <LottieTae
              key={id}
              className={item.className}
              options={item}
              randomId={item.randomId}
              counter={counter}
              setCounter={setCounter}
              totalItems={chainItems.length}
              resetOnEnd={true}
            ></LottieTae>
          );
        }
      })
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
            content={
              <Fragment>Encadeamento de interatividade - tipo Click</Fragment>
            }
          />
          <TextBlock textsBlock={textsBlock} />

          <div className="animatedWrapper">{[lottieItem]}</div>
        </Row>
      </>
    );
  }
}

export default BlocoLottieChainClick;
