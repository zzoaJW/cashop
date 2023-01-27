import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';


function App() {

  let [furnitures] = useState(data);

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
          {
            furnitures.map(function(f, i){
              return (
                <Card furnitures={f}/>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function Card(props){
  return (
    <Col sm>
      <img src={props.furnitures.img} width="80%"/>
      <h4>{props.furnitures.title}</h4>
      <p>{props.furnitures.content}</p>
    </Col>
  )
}

export default App;
