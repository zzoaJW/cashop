import '../App.css';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { addCart } from '../slices/cartSlice.js';

import { Button, Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

const TabContentStyle = styled.div`
    background-color : beige;
    color : #3b3b3b;
    width : 100%;
    height : 300px;
    display : flex;
    justify-content: center;
    align-items : center;
`;

function DetailPage(props){

    // 링크에서 가져온 id
    let {id} = useParams();
    // App.js에서 가져온 props.furnitures
    let findFurniuture = props.furnitures.find((e) => e.id == id);

    // tab : 현재 선택되어있는 tab의 인덱스
    let [tab, setTab] = useState(0);

    let dispatch = useDispatch()

    // detailPage 화면전환 애니메이션
    let [animEnd, setAnimEnd] = useState('')
    useEffect(()=>{
        setAnimEnd('anim_fade_end')
    }, [])

    // 수량
    let [cnt, setCnt] = useState("")

    // 할인 배너 보이게할건지/안보이게할건지
    let [discount, setDiscount] = useState(true)
    let [btnDisable, setBtnDisable] = useState(true)
    useEffect(()=>{
        // 할인 배너 2초간 띄우다가 없애기
        let sale = setTimeout(()=>{ 
            setDiscount(false)
        }, 2000)

        // 주문하기 버튼 : 수량(==cnt)이 0 초과일때만 활성화
        if(cnt<1){
            setBtnDisable(true)
        }else{
            setBtnDisable(false)
        }
        
        return(()=>{
            clearTimeout(sale)
        })
    }, [cnt])

    return (
        <div className={'container anim_fade_start ' + animEnd}>
            {
                discount? <div className='alert alert-warning'>2초 이내 구매시 할인</div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={findFurniuture.img} width="100%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5" style={{color:'#3b3b3b'}}>{findFurniuture.title}</h4>
                    <p style={{color:'#d3d3d3'}}>{findFurniuture.content}</p>
                    <p style={{color:'#3b3b3b'}}>{
                        cnt>0? findFurniuture.price*cnt : findFurniuture.price
                    } KRW</p>

                    <div style={{ margin:'30px' }}/>

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
                    <Button style={{color:'#70996e'}} variant="outline-success" 
                        disabled={btnDisable}
                        onClick={()=>{
                                let newF = {id : findFurniuture.id, name : findFurniuture.title, count : cnt, price : findFurniuture.price}
                                dispatch(addCart(newF))
                            }}>장바구니 담기</Button>
                    <Button style={{color:'#70996e'}} variant="outline-success" 
                        disabled={btnDisable}
                        onClick={()=>{
                                alert('\'' + findFurniuture.title + '\' 상품 ' + cnt + '개 주문 완료')
                            }}>주문하기</Button>
                </div>

                <div style={{ margin:'30px' }}/>

                <div>
                    <Row>
                        <Col style={{color:'#88b586'}} onClick={()=>{ setTab(0) }}>info</Col>
                        <Col style={{color:'#88b586'}} onClick={()=>{ setTab(1) }}>review</Col>
                    </Row>
                    <hr width="100%" style={{color:'#88b586'}}/>
                    <TabContent tab={tab}/>
                </div>
                
                <div style={{ margin:'50px' }}/>
                <p style={{position: 'fixed', bottom: 0, fontSize:'5px', color:'#88b586'}}>{findFurniuture.title}</p>
            </div>
        </div> 
    )
}

function TabContent({tab}){
    // tab 화면전환 애니메이션
    let [animTabEnd, setAnimTabEnd] = useState('')
    useEffect(()=>{
        let tabAnim = setTimeout(()=>{
            setAnimTabEnd('anim_fade_end')
        }, 10)
        
        return (()=>{
            clearTimeout(tabAnim)
            setAnimTabEnd('')
        })
    }, [tab])

    return (
        <div className={"anim_fade_start " + animTabEnd}>{
                [ <TabContentStyle>인포메이션</TabContentStyle>,
                <TabContentStyle>리뷰</TabContentStyle> ][tab]
        }</div>
    )
}

export default DetailPage;