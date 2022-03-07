import styles from '../styles/module/Index.module.css';
import { motion } from "framer-motion"

const RoadMap = () => {

    return (
        <>
            <motion.div
                className={`${styles.roadmapmaincontainer} `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                    <img src="/image/roadmap.jpg" alt="roadmap" />
            </motion.div >
        </>
    );
};

export default RoadMap