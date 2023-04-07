import '../App.css';
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from 'styled-components';

import temp from "../imgs/mainbannerimg.jpg";

let Title = styled.h1`
    color : #3b3b3b;
    height : 1000px;
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
            <div><Title>Shopping Mall for Sweet Furnitures !</Title></div>
            <div><Title>This project is simple React practice.</Title></div>
            <div><Title>with Redux, style-component, Bootstrap ...</Title></div>
            <div><Title>Made by z(0o0a)</Title></div>
            <div><img style={{width:'100%', marginBottom:'200px'}} src={temp}></img></div>
            {/* <button onClick={()=>{ navigate("/about/project")}}>project</button> <button onClick={()=>{ navigate("/about/member")}}>member</button>
            <Outlet/> */}
        </div>
    )
}


export default AboutPage;