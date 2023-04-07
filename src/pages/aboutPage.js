import '../App.css';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Outlet } from "react-router-dom";

function AboutPage(){
    let navigate = useNavigate();

    // 화면전환 애니메이션
    let [animEnd, setAnimEnd] = useState('')
    useEffect(()=>{
        setAnimEnd('anim_fade_end')
    }, [])


    return (
        <div className={'container anim_fade_start ' + animEnd}>
            <h4>Shopping Mall for Sweet Furnitures !</h4>
            <button onClick={()=>{ navigate("/about/project")}}>project</button> <button onClick={()=>{ navigate("/about/member")}}>member</button>
            <Outlet/>
        </div>
    )
}


export default AboutPage;