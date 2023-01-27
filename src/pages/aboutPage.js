import { motion } from "framer-motion";

function AboutPage(){
    return (
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{width:"100px", height:"100px"}}
      />
    )
}

export default AboutPage;