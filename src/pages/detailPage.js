import '../App.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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

    let {id} = useParams();
    let findFurniuture = props.furnitures.find((e) => e.id == id);

    let [tab, setTab] = useState(0);

    let [animEnd, setAnimEnd] = useState('')
    useEffect(()=>{
        // detailPage 화면전환 애니메이션
        setAnimEnd('anim_fade_end')
    }, [])

    let [cnt, setCnt] = useState("")
    let [discount, setDiscount] = useState(true)
    let [btnDisable, setBtnDisable] = useState(true)
    useEffect(()=>{
        // 할인 배너
        let sale = setTimeout(()=>{ 
            setDiscount(false)
        }, 2000)

        // 주문하기 버튼
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