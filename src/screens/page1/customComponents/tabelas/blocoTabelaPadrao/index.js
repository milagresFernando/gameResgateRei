// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TableDefault from "components/tables/tableDefault";
import Title from "components/texts/title";

//Imagens

function BlocoTabelaPadrao() {
  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Tabela padrão</Fragment>}
      />
      <TableDefault className="table-tae">
        <thead>
          <tr>
            <th></th>
            <th>Title A - Item 1</th>
            <th>Title A - Item 2</th>
            <th style={{ width: "16%" }}>Title A - Item 3</th>
            <th>Title A - Item 4</th>
            <th>Title A - Item 5</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Title B - Item 1</th>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
            <td>Item 4</td>
            <td>Item 5</td>
          </tr>

          <tr>
            <th>Title B - Item 2</th>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>
              Nulla facilisis lectus ac eleifend cursus. Donec est ligula,
              ultricies quis viverra eget, interdum blandit eros.
            </td>
            <td>Item 4</td>
            <td>Item 5</td>
          </tr>

          <tr>
            <th>Title B - Item 3</th>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
            <td>Item 4</td>
            <td>Item 5</td>
          </tr>

          <tr>
            <th>Title B - Item 4</th>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
            <td>Item 4</td>
            <td>Item 5</td>
          </tr>

          <tr>
            <th>Title B - Item 5</th>
            <td>Item 1</td>
            <td>Item 2</td>
            <td>Item 3</td>
            <td>Item 4</td>
            <td>Item 5</td>
          </tr>
        </tbody>
      </TableDefault>
    </Fragment>
  );
}

export default BlocoTabelaPadrao;
