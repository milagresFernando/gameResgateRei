// React Elements/Hooks
import { Fragment } from "react";

// Components

import TimelineVertical from "components/timeline/timelineVertical";
import Title from "components/texts/title";

//Imagens

function BlocoLinhaScrollAlternate(props) {
  const timelineVerticalItems = [
    {
      title: {
        titleContent: "Título 1",
        tagTitle: "5",
        titleClassName: "",
      },

      images: {
        imageAos: "tae-50",
        imageAosOffset: "250",
      },

      contents: {
        contentClassName: "",
        contentAos: "fade-left",
        contentAosOffset: "330",
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 1 Lorem ipsum dolor sit amet, consectetur adipiscing
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
        titleContent: "Título 2",
        tagTitle: "5",
        titleClassName: "",
      },

      images: {
        imageAos: "tae-50",
        imageAosOffset: "250",
      },

      contents: {
        contentClassName: "",
        contentAos: "fade-left",
        contentAosOffset: "330",
        textBlocks: [
          {
            tagElement: "p",
            className: "",
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
        titleContent: "Título 3",
        tagTitle: "5",
        titleClassName: "",
      },

      images: {
        imageAos: "tae-50",
        imageAosOffset: "250",
      },

      contents: {
        contentClassName: "",
        contentAos: "fade-left",
        contentAosOffset: "330",
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Paragrafo 3 Lorem ipsum dolor sit amet, consectetur adipiscing
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
      <Title
        typeH="4"
        className=""
        content={<Fragment>Itens alternados</Fragment>}
      />
      <TimelineVertical
        className=""
        timelineVerticalItems={timelineVerticalItems}
        type="alternate"
      />
    </Fragment>
  );
}

export default BlocoLinhaScrollAlternate;
