// Css
import "./index.scss";

// Components
import { Container } from "react-bootstrap";

function Footer(props) {
  return (
    <footer
      className={`footerComponent ${props.className} ${
        props.fixed ? "fixed" : ""
      }`}
    >
      <Container>
        <p>Copyright © Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
