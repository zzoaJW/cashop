import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import data from './data.js';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import CartPage from './pages/cartPage';
import DetailPage from './pages/detailPage.js';
import ThreeDPage from './pages/threeDPage.js';


function App() {
  let [furnitures, setFurnitures] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navs navigate={navigate}/>

      <Routes>
        <Route path='/cashop' element={
          <HomePage furnitures={furnitures} setFurnitures={setFurnitures} navigate={navigate}/>
        }/>

        <Route path='/' element={
          <HomePage furnitures={furnitures} setFurnitures={setFurnitures} navigate={navigate}/>
        }/>

        <Route path='/about' element={
          <AboutPage/>
        }/>

        <Route path='/cart' element={
          <CartPage/>
        }/>

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

function Navs({navigate}){
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand onClick={()=>{ navigate("/")}}>z(0o0a)</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate("/")}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate("/about")}}>Sweet</Nav.Link>
          <Nav.Link onClick={()=>{ navigate("/cart")}}>Hooooooooome</Nav.Link>
          <Nav.Link onClick={()=>{ navigate("/3d")}}> </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}



export default App;
