// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Btn from "components/buttons";
import Title from "components/texts/title";
//Imagens

// import { withScorm } from "react-scorm-provider";
// const ScoLearner = withScorm()(BlocoBotoes);

function BlocoBotoes(props) {
  return (
    <Fragment>
      <Row className="">
        <Col>
          <Title
            typeH="4"
            className=""
            content={<Fragment>Botao Scorm</Fragment>}
          />
          <Btn className="btn-padrao" size="md">
            Complete Scorm
          </Btn>
        </Col>
        <Col>
          <Title
            typeH="4"
            className=""
            content={<Fragment>Simples</Fragment>}
          />
          <Btn className="btn-padrao" size="md">
            Botão Simples
          </Btn>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Title typeH="4" className="" content={<Fragment>Large</Fragment>} />
          <Btn className="btn-padrao" size="lg">
            Botão Simples Maior
          </Btn>
        </Col>

        <Col>
          <Title
            typeH="4"
            className=""
            content={<Fragment>Arredondado</Fragment>}
          />
          <Btn className="btn-padrao btn-rounded" size="md">
            Botão Rounded
          </Btn>
        </Col>

        <Col xs="12" sm="6" lg="3">
          <Title typeH="4" className="" content={<Fragment>Borda</Fragment>} />
          <Btn className="btn-padrao btn-border" size="md">
            Botão com Borda
          </Btn>
        </Col>
      </Row>

      <Row className="">
        <Col xs="12" lg="5">
          <Title
            typeH="4"
            className=""
            content={<Fragment>Arredondado com Borda</Fragment>}
          />
          <Btn className="btn-padrao btn-rounded btn-border" size="md">
            Botão Rounded com Borda
          </Btn>
        </Col>

        <Col xs="12" sm="5" lg="3">
          <Title
            typeH="4"
            className=""
            content={<Fragment>Disabled</Fragment>}
          />
          <Btn className="btn-padrao" size="md" disabled>
            Botão Disabled
          </Btn>
        </Col>
        <Col xs="12" sm="7" lg="4">
          <Title
            typeH="4"
            className=""
            content={<Fragment>Disabled com Borda</Fragment>}
          />
          <Btn className="btn-padrao btn-border" size="md" disabled>
            Botão Disabled com Borda
          </Btn>
        </Col>
      </Row>
    </Fragment>
  );
}

export default BlocoBotoes;
