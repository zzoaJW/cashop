import '../App.css';
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from 'styled-components';
import Lottie from "lottie-react";

import temp from "../imgs/mainbannerimg.jpg";
import downArrow from "../lotties/black-arrow-down.json";

let Title = styled.h1`
    color : #3b3b3b;
    height : 1000px;
    margin : 50px;
    display : flex;
    justify-content: center;
    align-items : center;
`

function AboutPage(){
    let navigate = useNavigate();

    // 화면전환 애니메이션
    let [animEnd, setAnimEnd] = useState('')
    useEffect(()=>{
        setAnimEnd('anim_fade_end')
    }, [])


    return (
        <div style={{backgroundColor:'#f8f9fa'}} className={'anim_fade_start ' + animEnd}>
            <div>
                <div style={{ height:'50px' }}/>
                <Lottie style={{ height:'100px'}} animationData={downArrow} />
                <Title>Shopping Mall for Sweet Furnitures !</Title>
            </div>
            <div><Title>This project is simple React practice.</Title></div>
            <div><Title>with Redux, style-component, Bootstrap ...</Title></div>
            <div><Title>Made by z(0o0a)</Title></div>
            <div><img style={{width:'100%', marginBottom:'200px'}} src={temp}></img></div>
        </div>
    )
}


export default AboutPage;