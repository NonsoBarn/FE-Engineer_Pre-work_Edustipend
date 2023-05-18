import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Buttons from "../shared/Button";

function NavbarComponent() {
  return (
    <Navbar
      className="square border border-dark md-mx-4 my-4 rounded  "
      bg="white"
    >
      <Container>
        <Nav class="nav navbar-nav d-flex flex-row ml-auto gap-3 text-center ">
          <Nav.Item>Contact us</Nav.Item>
          <Nav.Item>
            <Buttons>Login</Buttons>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
