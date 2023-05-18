import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="bg-light">
      <Container>
        <div className="main  pt-2 md-mx-5">
          <Navbar />
          <Home />
        </div>
      </Container>
    </div>
  );
}

export default App;
