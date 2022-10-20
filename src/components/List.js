import { Col, Row, Card } from "react-bootstrap";



//function List(props){
  // const lists = props.lists;
  // const author = props.author;

function List({lists, author}){  
  return (
    <Row className={author}>
      {lists.map((list, index) => 
          <Col md="4" key={index}>
            <Card >
              <Card.Img variant="top" src={list.image} />
              <Card.Body>
                <Card.Title>{list.title}</Card.Title>
                <Card.Text>
                  {list.text}  
                </Card.Text>
              </Card.Body>
            </Card>              
          </Col>
        )}
    </Row>
  );
}

export default List