import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import axios from 'axios';

function HomePage(props){
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

      // 버튼 1번 클릭 : 3,4,5번째 상품 불러오기
      // 버튼 2번 클릭 : 6,7,8번째 상품 불러오기
      // 버튼 3번 클릭 : 상품이 더 없다고 알려주기
      <button onClick={ ()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{ 
            props.setFurnitures([...props.furnitures, ...result.data])
          })
          .catch((e)=>{
            alert(e)
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