import Button from "react-bootstrap/Button";

const Buttons = ({ children }) => {
  return (
    <Button variant="warning" className="border-dark py-0">
      {children}
    </Button>
  );
};

export default Buttons;
