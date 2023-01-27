import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './data.js';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import DetailPage from './pages/detailPage.js';


function App() {
  let [furnitures] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navs/>

      <Routes>
        <Route path='/' element={
          <HomePage furnitures={furnitures}/>
        }/>
        <Route path='/about' element={
          <AboutPage/>
        }/>
        <Route path='/detail' element={
          <DetailPage/>
        }/>
      </Routes>
      
    </div>
  );
}

function Navs(){
  return (
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
  )
}



export default App;
