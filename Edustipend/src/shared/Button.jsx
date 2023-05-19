import Button from "react-bootstrap/Button";

const Buttons = ({ children, style }) => {
  return (
    <Button variant="warning" className={`${style} border-dark `}>
      {children}
    </Button>
  );
};

export default Buttons;
