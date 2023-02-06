// Css
import "./index.scss";

// React Elements/Hooks
import { useState, Fragment, useEffect } from "react";

// Components
import { Carousel, Image } from "react-bootstrap";
import Title from "components/texts/title";
import TextBlock from "components/texts/text_block";
import FlexImgWithText from "components/images/flexImgWithText";

// Functions
import setBreakPoint from "globalFunctions/setBreakPoint";
import debounceTimeOut from "globalFunctions/debounceTimeOut";

//Imagens

function CarouselBootsrap(props) {
  //imgSide pode ser "top", "fullTop", "left", "bottom" "fullBottom", "right" "fullRight" ou "fullLeft"

  const [carouselIsImgFullVertical, setCarouselIsImgFullVertical] = useState(
    false
  );
  const [
    carouselIsImgFullHorizontal,
    setCarouselIsImgFullHorizontal,
  ] = useState(false);
  const [idAtual, setidAtual] = useState(0);
  const [clickCarousel, setClickCarousel] = useState(false);
  const [isFirstFull, setIsFirstFull] = useState(false);
  const [breakResponsive, setBreakResponsive] = useState(false);

  const itemsWithImg = props.carouselItens.map((itemWithImg, id) => {
    if (itemWithImg.images) {
      return itemWithImg.images.imgSide;
    } else {
      return "";
    }
  });

  useEffect(() => {
    isFirstFullImg();
  }, []);

  useEffect(() => {
    if (props.breakOn) {
      const debouncedHandleResize = debounceTimeOut(function handleResize() {
        if (window.innerWidth <= setBreakPoint(props.breakOn)) {
          setBreakResponsive(true);
        } else {
          setBreakResponsive(false);
        }
      }, 500);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    }
  }, [breakResponsive]);

  useEffect(() => {
    if (props.breakOn) {
      if (window.innerWidth <= setBreakPoint(props.breakOn)) {
        setBreakResponsive(true);
      }
    }
  }, []);

  function ajustCarouselPaddingResponsive(imgSide) {
    //seta a classe de padding, quando o carrossel fica na versao tablet/mobile
    if (window.innerWidth <= setBreakPoint(props.breakContent)) {
      if (imgSide === "fullLeft" || imgSide === "fullRight") {
        return true;
      }
    }
  }

  function isFullVertical(item, id) {
    if (item === "handleClick") {
      if (itemsWithImg[id] === "fullBottom" || itemsWithImg[id] === "fullTop") {
        return true;
      }
    } else if (
      item.images.imgSide === "fullBottom" ||
      item.images.imgSide === "fullTop"
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isFullHorizontal(item, id) {
    if (item === "handleClick") {
      if (itemsWithImg[id] === "fullLeft" || itemsWithImg[id] === "fullRight") {
        return true;
      }
    } else if (
      item.images.imgSide === "fullLeft" ||
      item.images.imgSide === "fullRight"
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isFirstFullImg() {
    if (props.carouselItens[0].images) {
      if (isFullHorizontal(props.carouselItens[0], 0)) {
        setIsFirstFull(true);
        setCarouselIsImgFullHorizontal(true);
      } else if (isFullVertical(props.carouselItens[0], 0)) {
        setIsFirstFull(true);
        setCarouselIsImgFullVertical(true);
      }
    }
  }

  function handleClickCarousel(images, id) {
    // seta a imgFull quando o carousel é clicado

    setClickCarousel(!clickCarousel);

    if (images) {
      setidAtual(id);

      if (isFullVertical("handleClick", id)) {
        setCarouselIsImgFullVertical(true);
        setCarouselIsImgFullHorizontal(false);
      } else if (isFullHorizontal("handleClick", id)) {
        setCarouselIsImgFullHorizontal(true);
        setCarouselIsImgFullVertical(false);
      } else {
        setCarouselIsImgFullVertical(false);
        setCarouselIsImgFullHorizontal(false);
      }
    }
  }

  const carouselItens = props.carouselItens.map((carouselItem, id) => {
    if (carouselItem.images && props.textOverImg) {
      return (
        <Carousel.Item key={id} className="textOverImg">
          <Image src={carouselItem.images.imgUrlBreak} alt="" fluid />

          <Carousel.Caption
            className={`${props.className === "animado" ? "mask" : ""}`}
          >
            {carouselItem.title && (
              <Title
                typeH={carouselItem.title.tagTitle}
                className={carouselItem.title.titleClassName}
                content={<Fragment>{carouselItem.title.titleContent}</Fragment>}
              />
            )}
            {carouselItem.contents && (
              <TextBlock textsBlock={carouselItem.contents.textBlocks} />
            )}
          </Carousel.Caption>
          {carouselCounter(id)}
        </Carousel.Item>
      );
    }

    if (!carouselItem.images) {
      return (
        <Carousel.Item key={id} className="withOutImg">
          <Carousel.Caption className={""}>
            {carouselItem.title && (
              <Title
                typeH={carouselItem.title.tagTitle}
                className={carouselItem.title.titleClassName}
                content={<Fragment>{carouselItem.title.titleContent}</Fragment>}
              />
            )}
            {carouselItem.contents && (
              <TextBlock textsBlock={carouselItem.contents.textBlocks} />
            )}
          </Carousel.Caption>
          {carouselCounter(id)}
        </Carousel.Item>
      );
    }

    if (carouselItem.images && !props.textOverImg) {
      return (
        <Carousel.Item key={id} className="">
          <Carousel.Caption
            // ref={carouselItemStyle}
            className={`relative bodyWithImg ${
              props.className === "animado" ? "mask" : ""
            } ${
              carouselItem.images.imgSide === "fullLeft"
                ? "fullLeft"
                : carouselItem.images.imgSide === "left"
                ? "left"
                : carouselItem.images.imgSide === "right"
                ? "right"
                : carouselItem.images.imgSide === "fullRight"
                ? "fullRight"
                : carouselItem.images.imgSide === "bottom"
                ? "bottom"
                : carouselItem.images.imgSide === "top"
                ? " top"
                : carouselItem.images.imgSide === "fullBottom"
                ? "fullBottom"
                : carouselItem.images.imgSide === "fullTop"
                ? "fullTop"
                : ""
            }
           ${carouselItem.contents && carouselItem.contents.contentClassName}`}
          >
            <FlexImgWithText
              isCarousel={true}
              clickCarousel={clickCarousel}
              carouselId={id}
              carouselIidAtual={idAtual}
              isFirstFull={isFirstFull}
              breakResponsive={breakResponsive}
              breakContent={props.breakContent}
              carouselIsImgFullVertical={carouselIsImgFullVertical}
              carouselIsImgFullHorizontal={carouselIsImgFullHorizontal}
              ajustCarouselPaddingResponsive={ajustCarouselPaddingResponsive}
              typeH={carouselItem.title && carouselItem.title.tagTitle}
              titleClassName={
                carouselItem.title && carouselItem.title.titleClassName
              }
              title={carouselItem.title && carouselItem.title.titleContent}
              textsBlock={
                carouselItem.contents && carouselItem.contents.textBlocks
              }
              imgSide={carouselItem.images.imgSide}
              imgUrl={carouselItem.images.imgUrl}
              imgUrlBreak={carouselItem.images.imgUrlBreak}
              imgClassName={carouselItem.images.imgClassName}
              rowClasses={carouselItem.images.rowClasses}
              colXs={carouselItem.images.colXs}
              colSm={carouselItem.images.colSm}
              colMd={carouselItem.images.colMd}
              colLg={carouselItem.images.colLg}
              colXl={carouselItem.images.colXl}
              colXXl={carouselItem.images.colXXl}
            />
          </Carousel.Caption>
          {carouselCounter(id)}
        </Carousel.Item>
      );
    }
  });
  function carouselCounter(id) {
    if (props.counter) {
      return (
        <div className="carousel-counter">{`${id + 1} de ${
          props.carouselItens.length
        }`}</div>
      );
    }
  }

  return (
    <Fragment>
      <Carousel
        className={`${props.className ? props.className : ""} ${
          breakResponsive ? "break" : ""
        }`}
        wrap={props.loop}
        pause={`${props.pauseOnHover ? "hover" : ""}`}
        indicators={props.indicators}
        interval={props.generalInterval}
        onSlide={(id) => handleClickCarousel(itemsWithImg, id)}
      >
        {carouselItens}
      </Carousel>
    </Fragment>
  );
}

export default CarouselBootsrap;
