// React Elements/Hooks
import { Fragment } from "react";

// Components

import TextBlock from "components/texts/text_block";
import Title from "components/texts/title";
import SliderCompare from "components/images/sliderCompare";

// Imagens
import imgCompara1 from "screens/assets/images/SliderImage_A.png";
import imgCompara2 from "screens/assets/images/SliderImage_B.png";

function BlocoSliderComparativoComTexto() {
  const textsBlock = [
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Fusce blandit tortor suscipit ligula pellentesque facilisis. Donec
          euismod consequat dignissim. Aenean nec lobortis nisl. Aenean neque
          leo, accumsan a ullamcorper maximus, faucibus vitae dolor. Phasellus
          posuere congue odio, ac blandit mi semper non. Duis massa nisl, ornare
          commodo massa a, mattis tincidunt neque. Aenean accumsan massa id
          eleifend fermentum. Maecenas eget tortor sed libero euismod dignissim.
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Slider Comparativo</Fragment>}
      />
      <SliderCompare
        className=""
        startPosition={50}
        imgCompara1={imgCompara1}
        imgCompara2={imgCompara2}
      />

      <TextBlock textsBlock={textsBlock} />
      <hr />
    </Fragment>
  );
}

export default BlocoSliderComparativoComTexto;
