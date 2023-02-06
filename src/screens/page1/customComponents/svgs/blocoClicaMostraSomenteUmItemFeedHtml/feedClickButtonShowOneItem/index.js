// Css
import "./index.scss";

import { Fragment } from "react";

function FeedClickButtonShowOneItem(props) {
  return (
    <Fragment>
      <div
        className={`wrapperFeedSvgExemplo ${
          props.botoes[0].isAtivo ? "ativo" : "feed"
        }`}
      >
        <div className="boxFeedSvgExemplo feed01">
          <div className="linhaEsq"></div>
          <div className="num1-branco"></div>
          <p>
            Realizar publicação de alguns artigos sobre o tema falando dos
            riscos envolvidos e de como gerar maior tranquilidade financeira
            para as famílias.
          </p>
        </div>
      </div>

      <div
        className={`wrapperFeedSvgExemplo ${
          props.botoes[1].isAtivo ? "ativo" : "feed"
        }`}
      >
        <div className="boxFeedSvgExemplo feed02">
          <div className="linhaEsq"></div>
          <div className="num2-branco"></div>
          <p>
            Agendar uma <em>live</em> pelas principais redes sociais e anunciar
            o evento.
          </p>
        </div>
      </div>

      <div
        className={`wrapperFeedSvgExemplo ${
          props.botoes[2].isAtivo ? "ativo" : "feed"
        }`}
      >
        <div className="boxFeedSvgExemplo feed03">
          <div className="linhaEsq"></div>
          <div className="num3-branco"></div>
          <p>
            Convidar alguns clientes de outros produtos e serviços e se preparar
            para responder todas as dúvidas e questionamentos.
          </p>
        </div>
      </div>

      <div
        className={`wrapperFeedSvgExemplo ${
          props.botoes[3].isAtivo ? "ativo" : "feed"
        }`}
      >
        <div className="boxFeedSvgExemplo feed04">
          <div className="linhaEsq"></div>
          <div className="num4-branco"></div>
          <p>
            Gravar a <em>live</em> e deixar disponível nos canais digitais
            oficiais da empresa.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default FeedClickButtonShowOneItem;
