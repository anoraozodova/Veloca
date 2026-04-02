import React from 'react';
import styles from './FeaturedProduct.module.scss';
import btn from '../../../assets/icons/new.svg';

interface FeaturedProductProps {
    product: {
        name: string;
        imageUrl: string;
        description: string;
    };
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
    return (
        <section
            className={styles.featured}
            style={{ '--bg-image': `url(${product.imageUrl})` } as React.CSSProperties}
        >
            <div className='container'>
                <div className={styles.featured__content}>
                    <div className={styles.featured__badge_wrapper}>
                        <img src={btn} alt="New Product" />
                    </div>
                    <h3 className={styles.featured__title}>{product.name}</h3>
                    <p className={styles.featured__subtitle}>{product.description}</p>
                </div>
            </div>
        </section>
    );
};
