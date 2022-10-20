import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import { pages } from "../data";
function Header(){
  return(
    <header className='bg-black'>
      <Container>
        <Row>
          <Col md="1" className='bg-black'>
            <img src={logo} className="img-fluid " alt="logo" />
          </Col>
          <Col md="11">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* <Nav.Link to="/">Home</Nav.Link>  */}
                {/* <Nav.Link to="/blog">Blog</Nav.Link> */}
                <Link className="nav-link" to={pages.home.link}>{pages.home.title}</Link>
                <Link className="nav-link" to={pages.blog.link}>{pages.blog.title}</Link>
                <Link className="nav-link" to='/books'>Books</Link>
              </Nav>
          </Navbar>      
          </Col>
        </Row>
      </Container>
    </header>
  );}

export default Header;