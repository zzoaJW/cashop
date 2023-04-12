import '../App.css';
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';

function HomePage(props){
  let [loading, setLoading] = useState(false)
  let [loadFunNum, setLoadFunNum] = useState(0)

  // 화면전환 애니메이션
  let [animEnd, setAnimEnd] = useState('')
  useEffect(()=>{
      setAnimEnd('anim_fade_end')
  }, [])
      

  return (
    <div className={'anim_fade_start ' + animEnd}>
      <div className='main-banner'/>

      <Container>
        <Row>
          {
            props.furnitures.map(function(f, i){
              return (
                <Card furnitures={f} navigate={props.navigate} id={f.id}/>
              )
            })
          }
        </Row>
      </Container>

      {
        loading? 
        <>
          <br/>
            <div className='loading'/>
          <br/>
        </> 
        : null
      }    
      
      {/* 
      // 버튼 1번 클릭 : 3번째 상품 불러오기
      // 버튼 2번 클릭 : 4번째 상품 불러오기
      // 버튼 3번 클릭 : 상품이 더 없다고 알려주기
      // 공통 : 버튼 클릭시 "로딩중" 띄우기 
      */}
      <div style={{ margin:'40px' }}/>
      <Button onClick={ ()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              setLoading(true)
              props.setFurnitures([...props.furnitures, ...result.data.slice(loadFunNum, loadFunNum+1)])
              setLoadFunNum(loadFunNum+1)
              setLoading(false)
              
              {
                return loadFunNum >= result.data.length? alert('마지막 상품입니다.') : null
              }
            })
            .catch((e)=>{
              setLoading(false)
              alert(e)
            })
      }} variant='black'>상품 더보기</Button>

    </div>
  )
}

  function Card({furnitures, navigate, id}){
    return (
      <Col onClick={()=>{ navigate(`/detail/${id}`) }}>
        <img src={furnitures.img} width="80%"/>
        <h4>{furnitures.title}</h4>
        <p>{furnitures.content}</p>
      </Col>
    )
  }

  export default HomePage;