import ResponsiveCanvas from "./ResponsiveCanvas";
import { Card } from "react-bootstrap";
import UnResponsiveCanvas from "./UnResponsiveCanvas";

const App = () => {
  return (
    <Card.Body>
      <ResponsiveCanvas />
      <UnResponsiveCanvas />
    </Card.Body>
  );
};
export default App;
