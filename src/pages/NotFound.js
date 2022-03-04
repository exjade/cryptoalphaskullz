import { useEffect } from 'react';
import styles from '../styles/module/NotFound.module.css';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';

export default function NotFound() {
    useEffect(() => { document.title = "CASK - Not Found" }, []); //eslint-disable-line
    return (
        <>
            <Header />
            <div className={`${styles.container} `}>
                <div className={`${styles.wrapper} `}>
                    <div id='oopss'>
                        <div className={styles.errortext}>
                            <span>404</span>
                            <p>PAGE NOT FOUND</p>
                            <Link to={ROUTES.SKULLZ}>
                                <div className={styles.hmpg}>
                                    <p className={styles.back} >Back To Home</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}