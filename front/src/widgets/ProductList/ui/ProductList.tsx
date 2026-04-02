import React from 'react';
import styles from './ProductList.module.scss';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='container'>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.card__visual}>
              <h3 className={styles.card__name}>{product.name}</h3>
              <img
                src={product.imageUrl}
                alt={product.name}
                className={styles.card__image}
              />
            </div>

            <div className={styles.card__descr__container}>
              <p className={styles.card__description}>{product.description}</p>
              <a href="#" className={styles.card__link}>FIND NEAR YOU</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
