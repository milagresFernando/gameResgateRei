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

function BlocoLottieChainHoverCount(props) {
  const [randomId, setRandomId] = useState("");
  const [lotties, setLotties] = useState(false);
  const [counter, setCounter] = useState(0);
  const [lottieItem, setlottieItem] = useState([]);
  const [textsBlock, setTextsBlock] = useState([]);
  const [contInteracao, setContInteracao] = useState(0);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setRandomId(generateId());
    loadData();
  }, []);

  // atualiza o contador de interacoes textual, pode ser apagadado caso, nao queira exibir um contador
  useEffect(() => {
    setContInteracao(contInteracao - 1);
  }, [change]);

  async function loadData() {
    const lottie1 = await Lotties.getLotties("star");
    const lottie2 = await Lotties.getLotties("confeti");
    setLotties([lottie1, lottie2]);
  }
  const chainItems = [
    {
      className: "",
      animationData: lotties[0],
      randomId: randomId,
      event: "hover",
      typeEvent: "countToAdvance",
      count: 2,
    },
    {
      className: "",
      animationData: lotties[1],
      randomId: randomId,
      event: "complete",
    },
  ];

  // mostra o contador de interacoes textual, caso nao queira um contador deixar apenas a parte do textBlock else
  useEffect(() => {
    if (chainItems[counter] && chainItems[counter].count) {
      setTextsBlock([
        {
          tagElement: "p",
          className: "",
          content: (
            <Fragment>
              Passe o mouse 0{contInteracao} vezes sobre a ilustração, para
              controlar a animação:
            </Fragment>
          ),
        },
      ]);
    } else {
      setTextsBlock([
        {
          tagElement: "p",
          className: "",
          content: <Fragment>Aguarde o término da animação</Fragment>,
        },
      ]);
    }
  }, [counter, contInteracao]);

  useEffect(() => {
    clearLottie();
    return () => {
      setlottieItem([]);
    };
  }, [counter, lotties]);

  const clearLottie = () => {
    // atualiza o contador de interacoes textual, pode ser apagadado caso, nao queira exibir um contador

    if (chainItems[counter] && chainItems[counter].count) {
      setContInteracao(chainItems[counter].count);
    }
    setlottieItem(
      chainItems.map((item, id) => {
        if (id == counter) {
          return (
            <LottieTae
              key={id}
              options={item}
              counter={counter}
              setCounter={setCounter}
              totalItems={chainItems.length}
              resetOnEnd={true}
              setChange={setChange}
              change={change}
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
              <Fragment>
                Encadeamento de interatividade - tipo Hover com contador
              </Fragment>
            }
          />
          <TextBlock textsBlock={textsBlock} />

          <div className="animatedWrapper">{[lottieItem]}</div>
        </Row>
      </>
    );
  }
}

export default BlocoLottieChainHoverCount;
