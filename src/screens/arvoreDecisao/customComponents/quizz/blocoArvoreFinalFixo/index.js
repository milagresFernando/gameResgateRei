// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TreeOneAnswerFixed from "components/quizz/treeOneAnswerFixed";

//Imagens
import imgQuestion1 from "screens/assets/images/img-Float.jpg";
import imgQuestion1Break from "screens/assets/images/img-Full.jpg";
import imgAnswer1 from "screens/assets/images/img-Float.jpg";
import imgAnswer1Break from "screens/assets/images/img-Full.jpg";
import imgFeed1_1 from "screens/assets/images/img-Float.jpg";
import imgFeed1_1_1Break from "screens/assets/images/img-Full.jpg";

function BlocoArvoreFinalFixo(props) {
  // caso deseje importar uma imagem sem usar os imports acima, utilize a funcão require(caminho da imagem), direto no array de questions
  // answersType passe o tipo de elemento que irá sugir dentro do input das alternativas. Opcões "numbers" "upper-roman" "upper-alpha" "square"

  const options = {
    answersType: "square",
    breakContent: "md",
    randomAnswers: false,
    scrollAnimated: true,
    // questionNumberPreText: "Pergunta",

    iconFeed: true,
    scorm: {
      minScore: 40,
    },
  };
  const questions = [
    {
      treeInfo: {
        questionId: 1,
        isEndQuestion: false,
        goToQuestion: {
          correct: 2,
          wrong: 6,
          neutral: 4,
        },
      },

      title: {
        titleContent: "P1 Exercer influência é uma forma poderosa de, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>alt errada Criar aliados.</Fragment>,
            },
          ],

          correct: "wrong",
        },
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt correta Construir um ambiente de competição.
                </Fragment>
              ),
            },
          ],
          correct: "correct",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt neutra Alcançar resultados consistentes.
                </Fragment>
              ),
            },
          ],
          correct: "neutral",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "Muito Bem",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta</Fragment>,
              },
            ],
          },
        },
        neutral: {
          title: {
            titleContent: "Talvez",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta neutra.</Fragment>,
              },
            ],
          },
        },
        wrong: {
          title: {
            titleContent: "Atenção!",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    A influência é uma forma poderosa de construir um ambiente
                    de colaboração e não de competição.
                  </Fragment>
                ),
              },
            ],
          },
        },
      },
    },
    {
      treeInfo: {
        questionId: 2,
        isEndQuestion: false,
        goToQuestion: {
          correct: 3,
          neutral: 5,
        },
      },

      title: {
        titleContent: "P2 Exercer influência é uma forma poderosa de, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt correta Construir um ambiente de competição.
                </Fragment>
              ),
            },
          ],
          correct: "correct",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt neutra Alcançar resultados consistentes.
                </Fragment>
              ),
            },
          ],
          correct: "neutral",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "Muito Bem",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta</Fragment>,
              },
            ],
          },
        },
        neutral: {
          title: {
            titleContent: "Talvez",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta neutra.</Fragment>,
              },
            ],
          },
        },
      },
    },
    {
      treeInfo: {
        questionId: 3,
        isEndQuestion: true,
        goToEnding: [
          {
            feedId: 1,
            typeFeed: "correct",
          },
          { feedId: 2, typeFeed: "neutral" },
        ],
      },

      title: {
        titleContent: "P3 Exercer influência é uma forma poderosa de, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt correta Construir um ambiente de competição.
                </Fragment>
              ),
            },
          ],
          correct: "correct",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt neutra Alcançar resultados consistentes.
                </Fragment>
              ),
            },
          ],
          correct: "neutral",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "Muito Bem",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta</Fragment>,
              },
            ],
          },
        },
        neutral: {
          title: {
            titleContent: "Talvez",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta neutra.</Fragment>,
              },
            ],
          },
        },
      },
    },
    {
      treeInfo: {
        questionId: 4,
        isEndQuestion: true,
        goToQuestion: {
          correct: 3,
          neutral: 5,
        },
        goToEnding: [
          {
            feedId: 4,
            typeFeed: "wrong",
          },
        ],
      },

      title: {
        titleContent: "P4 Exercer influência é uma forma poderosa de, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt errada Construir um ambiente de competição.
                </Fragment>
              ),
            },
          ],
          correct: "wrong",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt correta Construir um ambiente de competição.
                </Fragment>
              ),
            },
          ],
          correct: "correct",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt neutra Alcançar resultados consistentes.
                </Fragment>
              ),
            },
          ],
          correct: "neutral",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "Muito Bem",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta</Fragment>,
              },
            ],
          },
        },
        neutral: {
          title: {
            titleContent: "Talvez",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta neutra.</Fragment>,
              },
            ],
          },
        },
        wrong: {
          title: {
            titleContent: "Atenção!",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    A influência é uma forma poderosa de construir um ambiente
                    de colaboração e não de competição.
                  </Fragment>
                ),
              },
            ],
          },
        },
      },
    },
    {
      treeInfo: {
        questionId: 5,
        isEndQuestion: true,

        goToEnding: [
          {
            feedId: 2,
            typeFeed: "correct",
          },
          {
            feedId: 3,
            typeFeed: "wrong",
          },
        ],
      },

      title: {
        titleContent: "P5 Exercer influência é uma forma poderosa de, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt errada Construir um ambiente de competição.
                </Fragment>
              ),
            },
          ],
          correct: "wrong",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt correta Construir um ambiente de competição.
                </Fragment>
              ),
            },
          ],
          correct: "correct",
        },
      ],
      feedbacks: {
        correct: {
          title: {
            titleContent: "Muito Bem",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta</Fragment>,
              },
            ],
          },
        },
        wrong: {
          title: {
            titleContent: "Atenção!",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    A influência é uma forma poderosa de construir um ambiente
                    de colaboração e não de competição.
                  </Fragment>
                ),
              },
            ],
          },
        },
      },
    },
    {
      treeInfo: {
        questionId: 6,
        isEndQuestion: true,
        goToQuestion: {
          neutral: 5,
        },

        goToEnding: [
          {
            feedId: 4,
            typeFeed: "wrong",
          },
        ],
      },

      title: {
        titleContent: "P6 Exercer influência é uma forma poderosa de, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1,
        imgSide: "fullLeft",
        colMd: "4",
        colLg: "5",
      },
      answers: [
        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: <Fragment>alt errada Criar aliados.</Fragment>,
            },
          ],

          correct: "wrong",
        },

        {
          text: [
            {
              tagElement: "p",
              className: "",
              content: (
                <Fragment>
                  alt neutra Alcançar resultados consistentes.
                </Fragment>
              ),
            },
          ],
          correct: "neutral",
        },
      ],
      feedbacks: {
        neutral: {
          title: {
            titleContent: "Talvez",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta neutra.</Fragment>,
              },
            ],
          },
        },
        wrong: {
          title: {
            titleContent: "Atenção!",
            tagTitle: "4",
            titleClassName: "",
          },
          images: {
            rowClasses: "align-items-center",
            imgUrl: imgFeed1_1,
            imgUrlBreak: imgFeed1_1_1Break,
            imgSide: "fullRight",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: (
                  <Fragment>
                    A influência é uma forma poderosa de construir um ambiente
                    de colaboração e não de competição.
                  </Fragment>
                ),
              },
            ],
          },
        },
      },
    },
  ];
  const finalFeed = [
    {
      feedId: 1,
      title: {
        titleContent: "Muito bem! Você chegou no final 01",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "right",
        colMd: "4",
        colLg: "5",
      },
      contents: {
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Feed Final lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Quisque at ex blandit ipsum blandit porttitor pretium
                tempor erat. Sed blandit maximus eros congue hendrerit.
                Curabitur nec elit id est aliquet viverra et nec metus. Etiam in
                porttitor lorem. Sed accumsan auctor lorem, non fringilla quam
                consectetur non.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: <Fragment>Você chegou ao fim do desafio.</Fragment>,
          },
        ],
      },
    },
    {
      feedId: 2,
      title: {
        titleContent: "Muito bem! Você chegou no final 02",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "right",
        colMd: "4",
        colLg: "5",
      },
      contents: {
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Feed Final lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Quisque at ex blandit ipsum blandit porttitor pretium
                tempor erat. Sed blandit maximus eros congue hendrerit.
                Curabitur nec elit id est aliquet viverra et nec metus. Etiam in
                porttitor lorem. Sed accumsan auctor lorem, non fringilla quam
                consectetur non.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: <Fragment>Você chegou ao fim do desafio.</Fragment>,
          },
        ],
      },
    },
    {
      feedId: 3,
      title: {
        titleContent: "Muito bem! Você chegou no final 03",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "right",
        colMd: "4",
        colLg: "5",
      },
      contents: {
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Feed Final lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Quisque at ex blandit ipsum blandit porttitor pretium
                tempor erat. Sed blandit maximus eros congue hendrerit.
                Curabitur nec elit id est aliquet viverra et nec metus. Etiam in
                porttitor lorem. Sed accumsan auctor lorem, non fringilla quam
                consectetur non.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: <Fragment>Você chegou ao fim do desafio.</Fragment>,
          },
        ],
      },
    },
    {
      feedId: 4,
      title: {
        titleContent: "Muito bem! Você chegou no final 04",
        tagTitle: "4",
        titleClassName: "",
      },
      images: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "right",
        colMd: "4",
        colLg: "5",
      },
      contents: {
        textBlocks: [
          {
            tagElement: "p",
            className: "",
            content: (
              <Fragment>
                Feed Final lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Quisque at ex blandit ipsum blandit porttitor pretium
                tempor erat. Sed blandit maximus eros congue hendrerit.
                Curabitur nec elit id est aliquet viverra et nec metus. Etiam in
                porttitor lorem. Sed accumsan auctor lorem, non fringilla quam
                consectetur non.
              </Fragment>
            ),
          },
          {
            tagElement: "p",
            className: "",
            content: <Fragment>Você chegou ao fim do desafio.</Fragment>,
          },
        ],
      },
    },
  ];

  return (
    <Fragment>
      <TreeOneAnswerFixed
        options={options}
        questions={questions}
        finalFeed={finalFeed}
      />
    </Fragment>
  );
}

export default BlocoArvoreFinalFixo;
