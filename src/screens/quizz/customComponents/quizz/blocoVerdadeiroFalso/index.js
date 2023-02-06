// React Elements/Hooks
import React, { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import TrueOrFalse from "components/quizz/trueOrFalse";

//Imagens
import imgQuestion1 from "screens/assets/images/img-Float.jpg";
import imgQuestion1Break from "screens/assets/images/img-Full.jpg";
import imgAnswer1 from "screens/assets/images/img-Float.jpg";
import imgAnswer1Break from "screens/assets/images/img-Full.jpg";
import imgFeed1_1 from "screens/assets/images/img-Float.jpg";
import imgFeed1_1_1Break from "screens/assets/images/img-Full.jpg";

function BlocoVerdadeiroFalso(props) {
  // caso deseje importar uma imagem sem usar os imports acima, utilize a funcão require(caminho da imagem), direto no array de questions

  const [correctCounter, setCorrectCounter] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const options = {
    breakContent: "md",
    randomQuestions: false,
    randomAnswers: false,
    scrollAnimated: true,
    // questionNumberPreText: "Pergunta",
    // maxQuestions: 2,
    iconFeed: true,
    scorm: {
      minScore: 40,
    },
    btnTryAgain: {
      numberTries: 2,
      content: "Tente Novamente",
      className: "mb-0",
    },
    counterBar: {
      rightAnswers: {
        textBlocks: [
          {
            tagElement: "p",
            className: "order-2",
            content: <Fragment>Acertos:</Fragment>,
          },
        ],
      },
      progress: {
        middleItem: "de",
        textBlocks: [
          {
            tagElement: "p",
            className: "order-1",
            content: <Fragment>Questão</Fragment>,
          },
        ],
      },
      percentageEvolution: {
        textBlocks: [
          {
            tagElement: "p",
            className: "order-0",
            content: <Fragment>Evolução:</Fragment>,
          },
        ],
      },
      separator: "|",
    },
  };
  const questions = [
    {
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
        imgUrlBreak: imgAnswer1Break,
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
              content: <Fragment>alt1 Criar aliados.</Fragment>,
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
                <Fragment>alt2 Construir um ambiente de competição.</Fragment>
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
                <Fragment>alt3 Alcançar resultados consistentes.</Fragment>
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
            imgSide: "fullLeft",
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
            imgSide: "fullLeft",
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
      title: {
        titleContent: "P2 Todas as alternativas a seguir são falsas, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "fullRight",
        colMd: "5",
        colLg: "6",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1Break,
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
                <Fragment>alt1 Influenciar é assumir o comando.</Fragment>
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
              content: <Fragment>alt2 Influenciar é argumentar.</Fragment>,
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
                  alt3 Influência não é só atributo para a liderança.
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
                  alt4 Influência não é só atributo para a liderança.
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
            imgUrlBreak: "",
            imgSide: "fullLeft",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta.</Fragment>,
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
            imgSide: "fullLeft",
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
      title: {
        titleContent: "P3 Todas as alternativas a seguir são falsas, EXCETO:",
        tagTitle: "4",
        titleClassName: "",
      },
      questionImages: {
        rowClasses: "align-items-center",
        imgUrl: imgQuestion1,
        imgUrlBreak: imgQuestion1Break,
        imgSide: "top",
        colMd: "5",
        colLg: "6",
      },
      answersImages: {
        rowClasses: "align-items-center",
        imgUrl: imgAnswer1,
        imgUrlBreak: imgAnswer1Break,
        imgSide: "fullBottom",
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
                <Fragment>alt1 Influenciar é assumir o comando.</Fragment>
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
              content: <Fragment>alt2 Influenciar é argumentar.</Fragment>,
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
                  alt3 Influência não é só atributo para a liderança.
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
            imgUrlBreak: "",
            imgSide: "fullLeft",
            colMd: "5",
            colLg: "6",
          },
          contents: {
            contentClassName: "",
            textBlocks: [
              {
                tagElement: "p",
                className: "",
                content: <Fragment>Resposta correta.</Fragment>,
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
            imgSide: "fullLeft",
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
      title: {
        titleContent: "Muito bem!",
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
                Você chegou ao fim do desafio e acertou {correctCounter}{" "}
                questões das {totalQuestions} situações propostas.
              </Fragment>
            ),
          },
        ],
      },
    },
  ];
  return (
    <Fragment>
      <TrueOrFalse
        options={options}
        questions={questions}
        finalFeed={finalFeed}
        setCorrectCounter={setCorrectCounter}
        setTotalQuestions={setTotalQuestions}
        correctCounter={correctCounter}
      />
    </Fragment>
  );
}

export default BlocoVerdadeiroFalso;
