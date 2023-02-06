// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TreeOneAnswerWithScore from "components/quizz/treeOneAnswerWithScore";

//Imagens
import imgQuestion1 from "screens/assets/images/img-Float.jpg";
import imgQuestion1Break from "screens/assets/images/img-Full.jpg";
import imgAnswer1 from "screens/assets/images/img-Float.jpg";
import imgAnswer1Break from "screens/assets/images/img-Full.jpg";
import imgFeed1_1 from "screens/assets/images/img-Float.jpg";
import imgFeed1_1_1Break from "screens/assets/images/img-Full.jpg";

function BlocoArvoreFinalPontuacao(props) {
  // caso deseje importar uma imagem sem usar os imports acima, utilize a funcão require(caminho da imagem), direto no array de questions
  // answersType passe o tipo de elemento que irá sugir dentro do input das alternativas. Opcões "numbers" "upper-roman" "upper-alpha" "square"

  const [correctCounter, setCorrectCounter] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const options = {
    answersType: "square",
    breakContent: "md",
    randomAnswers: false,
    scrollAnimated: true,
    // questionNumberPreText: "Pergunta",
    scores: {
      correct: 2,
      neutral: 0,
      wrong: -1,
    },

    iconFeed: true,
    scorm: {
      minScore: 40,
    },

    counterBar: {
      rightAnswers: {
        textBlocks: [
          {
            tagElement: "p",
            className: "order-2",
            content: <Fragment>Pontuação:</Fragment>,
          },
        ],
      },

      separator: "|",
    },
  };
  const questions = [
    {
      treeInfo: {
        questionId: 1,
        isEndQuestion: false,
        goToQuestion: {
          correct: 2,
          wrong: 10,
          neutral: 6,
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
          neutral: 6,
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
        isEndQuestion: false,
        goToQuestion: {
          correct: 4,
          neutral: 7,
        },
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
        isEndQuestion: false,
        goToQuestion: {
          correct: 5,
          neutral: 8,
        },
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
        questionId: 5,
        isEndQuestion: true,

        goToQuestion: {
          neutral: 9,
        },
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
        questionId: 6,
        isEndQuestion: false,
        goToQuestion: {
          correct: 3,
          wrong: 11,
          neutral: 7,
        },
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
        questionId: 7,
        isEndQuestion: false,
        goToQuestion: {
          correct: 4,
          wrong: 12,
          neutral: 8,
        },
      },

      title: {
        titleContent: "P7 Exercer influência é uma forma poderosa de, EXCETO:",
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
        questionId: 8,
        isEndQuestion: false,
        goToQuestion: {
          correct: 5,
          wrong: 13,
          neutral: 9,
        },
      },

      title: {
        titleContent: "P8 Exercer influência é uma forma poderosa de, EXCETO:",
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
        questionId: 9,
        isEndQuestion: true,
      },

      title: {
        titleContent: "P9 Exercer influência é uma forma poderosa de, EXCETO:",
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
        questionId: 10,
        isEndQuestion: false,
        goToQuestion: {
          wrong: 11,
          neutral: 6,
        },
      },

      title: {
        titleContent: "P10 Exercer influência é uma forma poderosa de, EXCETO:",
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
    {
      treeInfo: {
        questionId: 11,
        isEndQuestion: false,
        goToQuestion: {
          wrong: 12,
          neutral: 7,
        },
      },

      title: {
        titleContent: "P11 Exercer influência é uma forma poderosa de, EXCETO:",
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
    {
      treeInfo: {
        questionId: 12,
        isEndQuestion: false,
        goToQuestion: {
          wrong: 13,
          neutral: 8,
        },
      },

      title: {
        titleContent: "P12 Exercer influência é uma forma poderosa de, EXCETO:",
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
    {
      treeInfo: {
        questionId: 13,
        isEndQuestion: true,
        goToQuestion: {
          neutral: 9,
        },
      },

      title: {
        titleContent: "P13 Exercer influência é uma forma poderosa de, EXCETO:",
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
      typeFeed: "perfect",

      title: {
        titleContent: "Muito bem! Feed Perfect",
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
            content: (
              <Fragment>
                Você chegou ao fim do desafio e fez {correctCounter} pontos.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      typeFeed: "correct",

      title: {
        titleContent: "Muito bem! Feed Correto",
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
            content: (
              <Fragment>
                Você chegou ao fim do desafio e fez {correctCounter} pontos.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      typeFeed: "neutral",

      title: {
        titleContent: "Muito bem! Feed neutro",
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
            content: (
              <Fragment>
                Você chegou ao fim do desafio e fez {correctCounter} pontos.
              </Fragment>
            ),
          },
        ],
      },
    },
    {
      typeFeed: "wrong",

      title: {
        titleContent: "Muito bem! Feed errado",
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
            content: (
              <Fragment>
                Você chegou ao fim do desafio e fez {correctCounter} pontos.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];

  return (
    <Fragment>
      <TreeOneAnswerWithScore
        options={options}
        questions={questions}
        finalFeed={finalFeed}
        setCorrectCounter={setCorrectCounter}
        correctCounter={correctCounter}
      />
    </Fragment>
  );
}

export default BlocoArvoreFinalPontuacao;
