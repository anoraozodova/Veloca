import styles from './AboutGrid.module.scss';
import { aboutData } from '../../../shared/About/model/data/about';

export const AboutGrid = () => {
    // В будущем этот компонент может принимать данные через props от страницы,
    // но пока мы берем их напрямую из моков, как вы просили.
    const {
        recognition,
        founderName,
        founderImage,
        productionImage,
        contact,
        establishedYear
    } = aboutData;

    return (
        <div className={styles.Grid}>
            {/* 1. Золотистый блок (RECOGNITION) */}
            <div className={`${styles.cell} ${styles.block__info}`}>
                <div className="container">
                    <div className={styles.block__info__title}>RECOGNITION</div>
                    <div className={styles.block__award__list}>
                        {recognition.map((award, index) => (
                            <div className={styles.block__award__list__item} key={index}>
                                <div className={styles.block__award__list__item__year}>{award.year}</div>
                                <div className={styles.block__award__list__item__title}>{award.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Блок с основателем */}
            <div className={`${styles.cell} ${styles.block__founder}`}>
                <img src={founderImage} alt={founderName} className={styles.block__founder__image} />
                <div className={styles.block__founder__box}>
                    <div className={styles.block__founder__label}>FOUNDER</div>
                    <span className={styles.block__founder__name}>{founderName}</span>
                    <div className={styles.block__founder__deco}></div>
                </div>
            </div>

            {/* 3. Черно-белое фото пивоварни */}
            <div className={`${styles.cell} ${styles.block__production}`}>
                <img src={productionImage} alt="Production" className={styles.block__production__image} />
            </div>

            {/* 4. Черный блок с контактами */}
            <div className={`${styles.cell} ${styles.block__contact}`}>
                <div className="container">
                    <div>
                        <div className={styles.block__contact__title}>CONTACT</div>
                        <div className={styles.block__contact__list}>
                            <div className={styles.block__contact__list__item}>
                                <span>PHONE</span>
                                <span>{contact.phone}</span>
                            </div>
                            <div className={styles.block__contact__list__item}>
                                <span>EMAIL</span>
                                <span>{contact.email}</span>
                            </div>
                            <div className={styles.block__contact__list__item}>
                                <span>SOCIAL</span>
                                <span>{contact.social}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.block__contact__est}>
                        <div className={styles.block__contact__est__text}>EST.{establishedYear}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
