import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import axios from 'axios';

function HomePage(props){
  let [moreFuni, setMoreFun] = useState([]);

  return (
    <>
      <div className='main-banner'/>

      <Container>
        <Row>
          {
            props.furnitures.map(function(f, i){
              return (
                <Card furnitures={f} navigate={props.navigate} id={i}/>
              )
            })
          }
        </Row>
      </Container>

      <br/>

      <Container>
        <Row>
          {
            moreFuni.map(function(f, i){
              return (
                <Card2 furnitures={f}/>
              )
            })
          }
        </Row>
      </Container>

      <button onClick={ ()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{ 
        setMoreFun(result.data)
      })
      .catch(()=>{
        alert('Bad Request')
      })
    } }>더보기</button>

    </>
  )
}

  function Card(props){
    return (
      <Col>
        <img src={props.furnitures.img} width="80%" onClick={()=>{ props.navigate(`/detail/${props.id}`)}}/>
        <h4>{props.furnitures.title}</h4>
        <p>{props.furnitures.content}</p>
      </Col>
    )
  }

  function Card2(props){
    return (
      <Col>
        <h4>{props.furnitures.title}</h4>
        <p>{props.furnitures.content}</p>
      </Col>
    )
  }

  export default HomePage;