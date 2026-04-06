import { useEffect, useState } from 'react';
import styles from './FindUsBanner.module.scss';
import { getStockists, type Stockist } from '../../../shared/Home/stockistsApi';

export const FindUsBanner = () => {
    const [stockists, setStockists] = useState<Stockist[]>([]);
    const [bgImage, setBgImage] = useState<string>('');

    useEffect(() => {
        getStockists().then((data) => {
            setStockists(data.stockists);
            setBgImage(data.backgroundImage);
        });
    }, []);

    return (
        <section className={styles.banner}>
            {/* The fixed background image */}
            <div className={styles.bgImage} style={{ backgroundImage: `url(${bgImage})` }}></div>

            <div className={styles.content}>
                <h4 className={styles.title}>OUR STOCK LISTS</h4>
                <div className={styles.list}>
                    {stockists.map((item, index) => (
                        <div
                            key={index}
                            className={styles.item}
                            style={{ borderBottom: index === stockists.length - 1 ? '1px solid #000' : 'none' }}
                        >
                            <div className={styles.itemRegion}>{item.region}</div>
                            <div className={styles.itemDetails}>
                                <span>{item.companyName}</span>
                                <span>{item.email}</span>
                                <span>{item.phone}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
