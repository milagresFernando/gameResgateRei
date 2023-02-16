// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Container, Row, Col, Image } from "react-bootstrap";
import Btn from "components/buttons";
import Title from "components/texts/title";

//Imagens

function SlotSelected(props) {
  const [numberSlots, setNumberSlots] = useState(
    Array(props.numberSlots).fill(0)
  );
  const [thumbsSlots, setThumbsSlots] = useState(
    Array(props.numberSlots).fill(0)
  );
  const [countSelected, setCountSelected] = useState(0);
  const [cancelControl, setCancelControl] = useState(false);
  const [thumbs, setThumbs] = useState(props.carrosselThumb);

  useEffect(() => {
    setThumbsSlots(
      thumbsSlots.map((slot, id) => {
        return {
          thumb: thumbs[0].thumb,
          selected: false,
          idThumb: 0,
        };
      })
    );
  }, [props.reset]);

  useEffect(() => {
    setCountSelected(0);
    setThumbs(props.carrosselThumb);
  }, [props.reset]);

  useEffect(() => {
    setNumberSlots(
      numberSlots.map((slot, id) => {
        return (
          <Btn
            onClick={() => handleClickThumb(id)}
            key={id}
            className={`btnSlots ${
              thumbsSlots[id].selected ? "selected" : "notSelected"
            } ${props.slotClassName}`}
          >
            <Image
              src={thumbsSlots[id].thumb}
              className={"thumbSlot"}
              loading="lazy"
              alt=""
              fluid
            />
          </Btn>
        );
      })
    );
  }, [thumbsSlots, countSelected]);

  useEffect(() => {
    if (props.countMaxSelected.true > 0) {
      if (countSelected <= props.numberSlots) {
        if (props.countMaxSelected.true > countSelected) {
          setCountSelected(countSelected + 1);
          //  console.log("aumento");
          setCancelControl(false);
        }
      }
    }
  }, [props.countMaxSelected]);

  useEffect(() => {
    if (props.countMaxSelected.true > 0) {
      if (
        props.countMaxSelected.true == countSelected &&
        cancelControl == false
      ) {
        let clonethumbsSlots = [...thumbsSlots];

        clonethumbsSlots[countSelected - 1] = {
          thumb: thumbs[props.actualItem].thumb,
          selected: true,
          idThumb: props.actualItem,
        };
        setThumbsSlots(clonethumbsSlots);
      }
    }
  }, [countSelected, cancelControl]);

  function handleClickThumb(id) {
    // organiza os slots quando o usuário cancela uma escolha
    let cloneSelected = [...props.controlSelected];
    let clonethumbsSlots = [...thumbsSlots];

    if (countSelected == 1) {
      // trata caso o usuário clique e só tenha um slot preenchido

      clonethumbsSlots = clonethumbsSlots.map((slot, idClone) => {
        return {
          thumb: thumbs[0].thumb,
          selected: false,
          idThumb: 0,
        };
      });
    } else if (countSelected != 1 && id + 1 == countSelected) {
      // trata caso o usuário clique no ultimo slot

      clonethumbsSlots[id] = {
        thumb: thumbs[0].thumb,
        selected: false,
        idThumb: 0,
      };
    } else {
      //trata caso nao seja o último nem o único

      clonethumbsSlots = clonethumbsSlots.map((slot, idClone) => {
        if (idClone >= id && idClone < countSelected - 1) {
          //organiza os que vem depois do clicado
          return {
            thumb: clonethumbsSlots[idClone + 1].thumb,
            selected: true,
            idThumb: clonethumbsSlots[idClone + 1].idThumb,
          };
        } else if (idClone < id && idClone < countSelected - 1) {
          // mantém os ja escolhidos
          return {
            thumb: slot.thumb,
            selected: true,
            idThumb: slot.idThumb,
          };
        } else {
          // organiza os que tem que ficar vazio
          return {
            thumb: thumbs[0].thumb,
            selected: false,
            idThumb: 0,
          };
        }
      });
    }
    cloneSelected[thumbsSlots[id].idThumb] = false;
    props.setControlSelected(cloneSelected);
    props.setActualItem(0);
    setTimeout(() => {
      props.setActualItem(thumbsSlots[id].idThumb);
    }, 10);
    setThumbsSlots(clonethumbsSlots);
    setCountSelected(countSelected - 1);
    setCancelControl(true);
  }

  return (
    <div className={`containerSlot ${props.containerSlotClassName}`}>
      {props.title && (
        <Title
          typeH={props.title.tagTitle}
          className={`slotTitle ${props.title.titleClassName}`}
          content={<Fragment>{props.title.titleContent}</Fragment>}
        />
      )}
      <div className="slotItems">{numberSlots}</div>
    </div>
  );
}

export default SlotSelected;
