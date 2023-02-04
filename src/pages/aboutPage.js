import { motion } from "framer-motion";
import { useNavigate, Outlet } from "react-router-dom";

function AboutPage(){
    let navigate = useNavigate();

    return (
        <>
            <h4>Shopping Mall for Sweet Furnitures !</h4>
            <button onClick={()=>{ navigate("/about/project")}}>project</button> <button onClick={()=>{ navigate("/about/member")}}>member</button>
            <Outlet/>
        </>
    )
}


export default AboutPage;