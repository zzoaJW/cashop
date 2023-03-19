import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';

function HomePage(props){
    return (
      <>
        <div className='main-banner'/>

        <Container>
          <Row>
            {
              props.furnitures.map(function(f, i){
                return (
                  // navigate 외않됨?
                  <Card furnitures={f} onClick={()=>{ props.navigate("/detail/1")}}/>
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
      <Col>
        <img src={props.furnitures.img} width="80%" />
        <h4>{props.furnitures.title}</h4>
        <p>{props.furnitures.content}</p>
      </Col>
    )
  }

  export default HomePage;