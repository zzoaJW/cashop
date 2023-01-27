import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';


function App() {

  let [furniture] = useState(data);

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
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166009106474136296.jpg?gif=1&w=960&h=960&c=c&webp=1" width="100%"/>
            <h4>{furniture[0].title}</h4>
            <p>{furniture[0].content}</p>
          </Col>
          <Col sm>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164388564242609760.jpg?gif=1&w=960&h=960&c=c&webp=1" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161554859365237314.jpg?gif=1&w=960&h=960&c=c&webp=1" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
    </Container>

    </div>
  );
}

export default App;
