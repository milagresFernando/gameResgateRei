// Css
import "./index.scss";

function Wrapper(props) {
  return (
    <main className={`wrapper ${props.className ? props.className : ""} `}>
      {props.children}
    </main>
  );
}

export default Wrapper;
