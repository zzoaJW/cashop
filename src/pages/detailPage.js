import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

function DetailPage(props){
    let {id} = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.furnitures[id].img} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.furnitures[id].title}</h4>
                    <p>{props.furnitures[id].content}</p>
                    <p>{props.furnitures[id].price}</p>
                    <Button variant="outline-success">주문하기</Button>{' '}
                </div>
            </div>
        </div> 
    )
}

export default DetailPage;