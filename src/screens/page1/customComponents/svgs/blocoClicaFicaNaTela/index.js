// React Elements/Hooks
import { useState, Fragment } from "react";

// Components
import SvgInterativo from "components/images/svgInterativo";

import List from "components/texts/lists";
import Title from "components/texts/title";

// Functions
import svgFunctions from "globalFunctions/svgFunctions";

function BlocoClicaFicaNaTela(props) {
  const numberButtonsSvg = Array(4).fill(0);
  const initBotoes = numberButtonsSvg.map((item, id) => {
    if (id == 0) {
      return { botao: id + 1, isAtivo: true, check: true };
    } else {
      return { botao: id + 1, isAtivo: false, check: false };
    }
  });
  const [botoes, setAtivo] = useState(initBotoes);

  const acessibilidadeTexts = [
    {
      className: "",
      content: (
        <Fragment>
          Realizar publicação de alguns artigos sobre o tema falando dos riscos
          envolvidos e de como gerar maior tranquilidade financeira para as
          famílias.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          Agendar uma <em>live</em> pelas principais redes sociais e anunciar o
          evento.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          Convidar alguns clientes de outros produtos e serviços e se preparar
          para responder todas as dúvidas e questionamentos.
        </Fragment>
      ),
    },
    {
      className: "",
      content: (
        <Fragment>
          Gravar a <em>live</em> e deixar disponível nos canais digitais
          oficiais da empresa.
        </Fragment>
      ),
    },
  ];

  const acessibilidadeItens = (
    <div className="leitorTela">
      <List tagElement="ol" listItens={acessibilidadeTexts} className="" />
    </div>
  );

  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Interativo - clique e fica, com checks</Fragment>}
      />
      <SvgInterativo
        className=""
        svgName="Interacao_01"
        botoes={botoes}
        svgClick={svgFunctions({ botoes, setAtivo })["clickButtonShow"]}
        acessibilidadeItens={acessibilidadeItens}
        responsive
      />
    </Fragment>
  );
}

export default BlocoClicaFicaNaTela;
