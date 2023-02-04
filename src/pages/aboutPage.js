import { motion } from "framer-motion";
import { useNavigate, Outlet } from "react-router-dom";

function AboutPage(){
    let navigate = useNavigate();

    return (
        <>
            <h4>회사 정보임</h4>
            <button onClick={()=>{ navigate("/about/project")}}>project</button> <button onClick={()=>{ navigate("/about/member")}}>member</button>
            <Outlet/>
        </>
    )
}


export default AboutPage;