import { Button, Card, Row, Col } from 'react-bootstrap';

function Cards() {
  return (
    <Row>
      <Col md="4">
        <Card >
          <Card.Img variant="top" src="https://www.jkratochvil.com/uploads/images/Gallery/_blog/158/20220823-IMG_4375.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md="4">
        <Card >
          <Card.Img variant="top" src="https://www.jkratochvil.com/uploads/images/Gallery/_blog/158/20220823-IMG_4375.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md="4">
        <Card >
          <Card.Img variant="top" src="https://www.jkratochvil.com/uploads/images/Gallery/_blog/158/20220823-IMG_4375.webp" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards





