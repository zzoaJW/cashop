import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

function DetailPage(props){


    let {id} = useParams();
    let findFurniuture = props.furnitures.find((e) => e.id == id);

    let [cnt, setCnt] = useState("")
    let [discount, setDiscount] = useState(true)
    let [btnDisable, setBtnDisable] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{ 
            setDiscount(false)
        }, 2000)

        if(cnt<1){
            setBtnDisable(true)
        }else{
            setBtnDisable(false)
        }
    }, [cnt])

    return (
        <div className="container">
            {
                discount? <div className='alert alert-warning'>2초 이내 구매시 할인</div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={findFurniuture.img} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findFurniuture.title}</h4>
                    <p>{findFurniuture.content}</p>
                    <p>{findFurniuture.price}</p>
                    <TextField fullWidth color="success" label="수량" type="number"
                        onChange={(e)=>{
                                if(isNaN(cnt)){
                                    e.target.value = 0
                                }else{
                                    if(e.target.value < 0){
                                        e.target.value = 0
                                    }else{
                                        setCnt(e.target.value)
                                    }
                                }
                            }}/>
                    <p/>
                    <Button variant="outline-success" 
                        disabled={btnDisable}
                        onClick={()=>{
                                alert('\'' + findFurniuture.title + '\' 상품 ' + cnt + '개 주문 완료')
                            }}>주문하기</Button>
                </div>
            </div>
        </div> 
    )
}

export default DetailPage;