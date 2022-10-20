import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
    <section className="py-4">
      <Container>
        <h1>404 Not Found</h1>
        <Link className="btn btn-primary" to='/'>Back to home</Link>
      </Container>
    </section>
    </>
  );
}