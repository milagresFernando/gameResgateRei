// Css

import "./index.scss";

function BotaoMenu(props) {
  return (
    <button
      onClick={() => props.setMenuIsOpen(!props.menuIsOpen)}
      className={`botaoMenu ${props.menuIsOpen ? "ativo" : ""} ${
        props.className
      }`}
    >
      <div className="tracoBotao">
        <span></span>
      </div>
    </button>
  );
}

export default BotaoMenu;
