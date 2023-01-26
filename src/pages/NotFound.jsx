import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Card>
      <Card.Header> Error 404. </Card.Header>
      <Card.Body>
        <p>
          {" "}
          Ops ! You Seem to lost. Dont worry, you can always go back to{" "}
          <Link to="/">Home</Link>{" "}
        </p>
        <Button variant="primary">Go to Home</Button>
      </Card.Body>
    </Card>
  );
}
