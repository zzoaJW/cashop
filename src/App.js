import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">z(0o0a)</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sweet</Nav.Link>
            <Nav.Link href="#pricing">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-banner'/>

      <Container>
        <Row>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="90%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="90%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="90%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
    </Container>

    </div>
  );
}

export default App;
