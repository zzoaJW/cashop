import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

function DetailPage(props){
    let {id} = useParams();
    let findFurniuture = props.furnitures.find((e) => e.id == id)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={findFurniuture.img} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findFurniuture.title}</h4>
                    <p>{findFurniuture.content}</p>
                    <p>{findFurniuture.price}</p>
                    <Button variant="outline-success">주문하기</Button>{' '}
                </div>
            </div>
        </div> 
    )
}

export default DetailPage;