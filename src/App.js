import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [furnitures] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">z(0o0a)</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Sweet</Nav.Link>
            <Nav.Link href="/detail">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <HomePage furnitures={furnitures}/>
        }/>
        <Route path='/about' element={<div>ㅇㅇㅇ</div>}/>
        <Route path='/detail' element={<div>상세페이지임</div>}/>
      </Routes>
      
    </div>
  );
}

function HomePage(props){
  return (
    <>
      <div className='main-banner'/>

      <Container>
        <Row>
          {
            props.furnitures.map(function(f, i){
              return (
                <Card furnitures={f}/>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
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
