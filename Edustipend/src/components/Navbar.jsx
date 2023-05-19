import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Buttons from "../shared/Button";

function NavbarComponent() {
  return (
    <Navbar className=" border border-dark mx-4 my-4 rounded  " bg="white">
      <Container>
        <Nav class="nav navbar-nav d-flex flex-row ms-auto gap-3 text-center ">
          <Nav.Item role="button"> Contact us</Nav.Item>
          <Nav.Item>
            <Buttons style={"py-0"}>Signup</Buttons>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
