// React Elements/Hooks
import { Fragment } from "react";

// Components
import FloatImgWithText from "components/images/floatImgWithText";
import Title from "components/texts/title";

// Imagens
import imgFloat from "screens/assets/images/img-Float.jpg";

function BlocoTextoComImgFloat() {
  const textsBlock1 = [
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
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          quis arcu vel quam viverra suscipit sed a nulla. Morbi ac pharetra
          diam. Curabitur ut lectus elit. Sed nec velit magna. Nulla facilisis
          lectus ac eleifend cursus. Donec est ligula, ultricies quis viverra
          eget, interdum blandit eros. Quisque vestibulum dictum orci eu dictum.
          Ut et metus efficitur, vulputate lectus eget, scelerisque est.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          quis arcu vel quam viverra suscipit sed a nulla. Morbi ac pharetra
          diam. Curabitur ut lectus elit. Sed nec velit magna. Nulla facilisis
          lectus ac eleifend cursus. Donec est ligula, ultricies quis viverra
          eget, interdum blandit eros. Quisque vestibulum dictum orci eu dictum.
          Ut et metus efficitur, vulputate lectus eget, scelerisque est.
        </Fragment>
      ),
    },
    {
      tagElement: "p",
      className: "",
      content: (
        <Fragment>
          Ut tincidunt hendrerit orci, sit amet ultrices lorem maximus id.
          Vivamus lorem tortor, tempor ut nulla vel, pharetra mattis dolor. Sed
          lectus turpis, faucibus vitae quam nec, viverra tempus dui. Praesent
          condimentum erat eu velit suscipit blandit. Pellentesque pulvinar id
          ante nec tempor. Nam auctor pharetra nisl, nec placerat quam tincidunt
          ut. Cras enim non sem rhoncus vestibulum.
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <Title
        typeH="4"
        className=""
        content={<Fragment>Texto e imagens</Fragment>}
      />
      <FloatImgWithText
        float="left"
        img={imgFloat}
        textsBlock={textsBlock1}
        className=""
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
      <FloatImgWithText
        float="right"
        img={imgFloat}
        textsBlock={textsBlock1}
        className=""
        breakContent="md" // parametro obrigatório, você deve definir em qual breakpoint o elemento vai quebrar e ficar vertical. Passe "sm","md","lg","xl","xxl".
      />
      <hr />
    </Fragment>
  );
}

export default BlocoTextoComImgFloat;
