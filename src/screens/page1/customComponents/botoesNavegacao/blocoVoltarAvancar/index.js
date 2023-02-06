// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import NextScreen from "components/buttons/nextScreen";
import PreviousScreen from "components/buttons/previousScreen";
import ScreenCounter from "components/buttons/screenCounter";

//Imagens

function BlocoVoltarAvancar(props) {
  // passe para o middleItem, algum texto que você queira que fique entre os dois números
  return (
    <Fragment>
      <PreviousScreen className="" size="lg" />
      <ScreenCounter className="" middleItem="de" />
      <NextScreen className="" size="lg" />
    </Fragment>
  );
}

export default BlocoVoltarAvancar;
