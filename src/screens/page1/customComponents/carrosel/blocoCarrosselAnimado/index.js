// React Elements/Hooks
import { Fragment } from "react";

// Components

import CarouselBootsrap from "components/carousel";
import Title from "components/texts/title";

//Imagens
import imgUrl from "screens/assets/images/img-Float.jpg";
import imgUrlBreak from "screens/assets/images/img-Full.jpg";

function BlocoCarrosselAnimado() {
  const carouselItens = [
    {
      title: {
        titleContent: "Título 1 carrossel",
        tagTitle: "5",
        titleClassName: "fadeInUp duracao6 atraso3",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "fullTop",
        imgClassName: "fadeInRight atraso1",
        colMd: "5",
        colLg: "6",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "fadeInUp duracao6 atraso4",
            content: (
              <Fragment>
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "fadeInUp duracao6 atraso5",
            content: (
              <Fragment>
                Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "Título 2 carrossel",
        tagTitle: "5",
        titleClassName: "fadeInRight duracao6 atraso3",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "fullRight",
        imgClassName: "fadeInDown atraso1",
        colMd: "5",
        colLg: "6",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "fadeInRight duracao6 atraso4",
            content: (
              <Fragment>
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "fadeInRight duracao6 atraso5",
            content: (
              <Fragment>
                Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "Título 3 carrossel",
        tagTitle: "5",
        titleClassName: "fadeInDown duracao6 atraso1",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "fullBottom",
        imgClassName: "fadeInUp atraso5",
        colMd: "5",
        colLg: "6",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "fadeInDown duracao6 atraso2",
            content: (
              <Fragment>
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "fadeInDown duracao6 atraso3",
            content: (
              <Fragment>
                Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      title: {
        titleContent: "Título 4 carrossel",
        tagTitle: "5",
        titleClassName: "fadeInUp duracao6 atraso3",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgUrl,
        imgUrlBreak: imgUrlBreak,
        imgSide: "fullLeft",
        imgClassName: "fadeInRight atraso1",
        colMd: "5",
        colLg: "6",
      },
      contents: {
        contentClassName: "",
        textBlocks: [
          {
            tagElement: "p",
            className: "fadeInUp duracao6 atraso4",
            content: (
              <Fragment>
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "fadeInUp duracao6 atraso5",
            content: (
              <Fragment>
                Paragrafo 2 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce eu tortor dignissim, feugiat massa ac, eleifend
                odio. Donec placerat dignissim metus quis venenatis.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  return (
    <Fragment>
      <Title typeH="4" className="" content={<Fragment>Animado</Fragment>} />
      <CarouselBootsrap
        className="animado"
        carouselItens={carouselItens}
        generalInterval={null} //passe um número para definir o tempo de transicao automatica entre os slides
        pauseOnHover={true} //se true pausa o carrousel quando no mouse over, é necessário possuir um "generalInterval definido"
        indicators={false} //se false remove as setas de navegação
        counter={false} // se false remove o contador de itens
        loop={true} //se for false não deixa voltar a partir do primeiro item ou avancar a partir do ultimo
        textOverImg={false} //se true deixa a imagem como background e ignora do todos os imgSides dos itens
        breakOn="sm" // quebra o carrosel em vários blocos, remove on controles e botões. Passe "xs","sm","md","lg","xl","xxl"
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
    </Fragment>
  );
}

export default BlocoCarrosselAnimado;
