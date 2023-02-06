// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TableGrid from "components/tables/tableGrid";
import Title from "components/texts/title";

//Imagens

function BlocoTabelaGrid() {
  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Tabela / display: GRID</Fragment>}
      />
      <TableGrid>
        <div className="item item-1">Item 1</div>
        <div className="item item-2">Item 2</div>
        <div className="item item-3">Item 3</div>
        <div className="item item-4">Item 4</div>
        <div className="item item-5">Item 5</div>
      </TableGrid>
    </Fragment>
  );
}

export default BlocoTabelaGrid;
