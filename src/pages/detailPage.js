import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function DetailPage(props){


    let {id} = useParams();
    let findFurniuture = props.furnitures.find((e) => e.id == id);

    let [txt, setTxt] = useState("")
    let [count, setCount] = useState(0)
    let [sale, setSale] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{ 
            setSale(false)
        }, 2000)

        if(isNaN(txt)){
            alert('숫자만 쓰세요')
        }
        
    }, [txt])

    return (
        <div className="container">
            {
                sale? <div className='alert alert-warning'>2초 이내 구매시 할인</div> : null
            }
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={findFurniuture.img} width="100%" />
                </div>
                <input placeholder='수량을 적어주세요' onChange={(e)=>{setTxt(e.target.value);}}/>
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