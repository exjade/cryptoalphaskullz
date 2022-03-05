import styles from '../styles/module/Index.module.css'
import useMobile from '../hooks/use-mobile'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { motion } from "framer-motion"

const Header = () => {
    const { mobile } = useMobile()
    return (
        <motion.div
            className={`${styles.main_container} `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={`${styles.main_wrapper} `}>
                <header className={`${styles.header}`}  >
                    {
                        mobile ? (
                            <div className={`${styles.container} `}>
                                <div className={`${styles.wraper} `}>
                                    {/* Links */}
                                    <div className={`${styles.links} `}>
                                        <div className={`${styles.header_logo} `}>
                                            <a href={ROUTES.SKULLZ}>
                                                <img src="/image/logo.png" alt="logo" />
                                            </a>
                                        </div>
                                        <div className={`${styles.header_ancla} `}>
                                            <a href="https://opensea.io/collection/thecryptoalphaskullz" target="_blank" rel="noreferrer">
                                                <p>BUY AN ALPHASKULLZ</p>
                                            </a>
                                        </div>
                                        {/* TWITTER */}
                                        <div className={`${styles.header_image} `}>
                                            <a href="https://twitter.com/cryptoalphasku1" target="_blank" rel="noreferrer" >
                                                <img src="/image/twitter.png" alt="twitter" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`${styles.container} `}>
                                <div className={`${styles.wraper} `}>
                                    {/* Links */}
                                    <div className={`${styles.links_mobile} `}>
                                        <Link to={ROUTES.SKULLZ}>
                                            <div className={`${styles.header_logo_mobile} `}>
                                                <img src="/image/logo.png" alt="logo" />
                                            </div>
                                        </Link>
                                        {/* TWITTER */}
                                        <div className={`${styles.header_image} `}>
                                            <a href="https://twitter.com/cryptoalphasku1" target="_blank" rel="noreferrer" >
                                                <img src="/image/twitter.png" alt="twitter" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </header>
            </div>
        </motion.div>
    )
}

export default Header