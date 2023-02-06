// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import Title from "components/texts/title";

import BlocoLottieScrollRelativeContainer from "./blocoLottieScrollRelativeContainer";
import BlocoLottieScroll from "./blocoLottieScroll";
import BlocoLottieScrollOffset from "./blocoLottieScrollOffset";
import BlocoLottieScrollOffsetLooping from "./blocoLottieScrollOffsetLooping";
import BlocoLottiePlaySegment from "./blocoLottiePlaySegment";
import BlocoLottiePlayOnHoverLooping from "./blocoLottiePlayOnHoverLooping";
import BlocoLottieSyncCursorPosition from "./blocoLottieSyncCursorPosition";
import BlocoLottieSyncCursorPositionHorizontal from "./blocoLottieSyncCursorPositionHorizontal";
import BlocoLottiePlayOnClick from "./blocoLottiePlayOnClick";
import BlocoLottiePlayOnHover from "./blocoLottiePlayOnHover";
import BlocoLottieToggle from "./blocoLottieToggle";
import BlocoLottiePlayVisible from "./blocoLottiePlayVisible";
import BlocoLottiePlayOnHold from "./blocoLottiePlayOnHold";
import BlocoLottiePlayOnHoldPauseReleased from "./blocoLottiePlayOnHoldPauseReleased";
import BlocoLottieChainClick from "./blocoLottieChainClick";
import BlocoLottieChainClickCount from "./blocoLottieChainClickCount";
import BlocoLottieChainHover from "./blocoLottieChainHover";
import BlocoLottieChainHoverCount from "./blocoLottieChainHoverCount";
import BlocoLottieLoop from "./blocoLottieLoop";

function BlocoLotties(props) {
  return (
    <section>
      <Container>
        <Row className="">
          <Col xs="12">
            <Title
              typeH="2"
              className="titleDivisor"
              content={<Fragment>{props.sectionTitle}</Fragment>}
            />
            <hr />
          </Col>
        </Row>
        <Fragment>
          <BlocoLottieScroll />
          <BlocoLottieScrollRelativeContainer />
          <BlocoLottieScrollOffset />
          <BlocoLottieScrollOffsetLooping />
          <BlocoLottieLoop />
          <BlocoLottiePlaySegment />
          <BlocoLottiePlayOnHoverLooping />
          <BlocoLottiePlayOnHover />
          <BlocoLottieSyncCursorPosition />
          <BlocoLottieSyncCursorPositionHorizontal />
          <BlocoLottiePlayOnClick />
          <BlocoLottieToggle />
          <BlocoLottiePlayOnHold />
          <BlocoLottiePlayOnHoldPauseReleased />
          <BlocoLottiePlayVisible />
          <BlocoLottieChainClick />
          <BlocoLottieChainClickCount />
          <BlocoLottieChainHover />
          <BlocoLottieChainHoverCount />
        </Fragment>
      </Container>
    </section>
  );
}

export default BlocoLotties;
