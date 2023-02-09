import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './data.js';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import DetailPage from './pages/detailPage.js';
import ThreeDPage from './pages/threeDPage.js';


function App() {
  let [furnitures] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navs navigate={navigate}/>

      <Routes>
        <Route path='/' element={
          <HomePage furnitures={furnitures}/>
        }/>
        <Route path='/about' element={
          <AboutPage/>
        }>
          <Route path='project' element={ <p>This project is simple React practice.</p> }/>
          <Route path='member' element={ <p>Made by JW Kim</p> }/>
        </Route>
        <Route path='/detail/:id' element={
          <DetailPage furnitures={furnitures}/>
        }/>
        <Route path='/3d' element={
          <ThreeDPage/>
        }/>
        <Route path='*' element={
          <div>없는 페이지 입니다.</div>
        }/>
      </Routes>
      
    </div>
  );
}

function Navs(props){
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand onClick={()=>{ props.navigate("/")}}>z(0o0a)</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ props.navigate("/")}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ props.navigate("/about")}}>Sweet</Nav.Link>
          <Nav.Link onClick={()=>{ props.navigate("/detail/1")}}>Hooooooooome</Nav.Link>
          <Nav.Link onClick={()=>{ props.navigate("/3d")}}> </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}



export default App;
