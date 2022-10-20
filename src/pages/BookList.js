import { Link } from "react-router-dom";
import { Col, Row, Card, Container } from "react-bootstrap";
import { books } from "../data";

export function BookList(){
  return (
    <>
    <section>
      <Container>
        <h1>Book list</h1>
        <Row >
          {books.map((book, index) => 
              <Col md="4" key={index}>
                <Card >
                  <Card.Img variant="top" src={book.image} />
                  <Card.Body>
                    <Card.Title>{book.title} - {book.id}</Card.Title>
                    <Card.Text>
                      {book.text}  
                    </Card.Text>
                    <Link to={`/books/${book.id}`}>Zobrazit více</Link>
                  </Card.Body>
                </Card>              
              </Col>
            )}
        </Row>
        <br />
        <div className="d-flex justify-content-between mb-5">
          <Link className="btn btn-secondary" to="/books/1">Book 1</Link>
          <Link className="btn btn-secondary" to="/books/2">Book 2</Link>
          <Link className="btn btn-secondary" to="/books/3">Book 3</Link>  
        </div>
      </Container>
    </section>
            
    </>
  );
}