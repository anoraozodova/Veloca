import styles from './Footer.module.scss'

interface FooterProps {
    variant?: 'orange' | 'white'
}

export const Footer = ({ variant = 'white' }: FooterProps) => {
    return (
        <footer>
            <div className={`${styles.footer} ${variant === 'orange' ? styles['footer--orange'] : styles['footer--white']}`}>
                <div className="container">
                    <div className={styles.footer__content}>
                        <div className={styles.footer__content__info}>
                            <div className={styles.footer__content__info__word}>
                                <span>Find Stockists</span>
                                <span>About</span>
                            </div>
                            <div className={styles.footer__content__info__number}>
                                <span>+998(94)003-77-66</span>
                                <span>monyamin006@gmail.com</span>
                            </div>
                        </div>
                        <div className={styles.footer__content__logo}>
                            <a href="" className={styles.footer__content__logo}>Véloce</a>
                        </div>
                        <div className={styles.footer__content__text}>
                            <p>company name© 2025 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footer__content__deco}></div>
            </div>

        </footer>
    )
}
