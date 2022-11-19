import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

type Products = {
  amount: number;
  id: number;
  imgPath:string;
  price: number
  title: string;
}

interface InfoPriceProps {
  totalPriceProductsFormat: string;
  totalPriceFormat: string;
}

export function InfoPrice( {totalPriceProductsFormat, totalPriceFormat }: InfoPriceProps) {

  // useEffect(() => {
  //   totPrice()
  // }, []);

  return (
    <div className={styles['info-prices']}>
      <div className={styles['base-total-price-product-and-delivery']}>
        <span className="label">Total de itens</span>
        <span className="price">{totalPriceProductsFormat}</span>
      </div>
      <div className={styles['base-total-price-product-and-delivery']}>
        <span className="label">Entrega</span>
        <span className="price">R$ 3,50</span>
      </div>
      <div className={styles['total']}>
        <span className="label-total">Total</span>
        <span className="price-total">{totalPriceFormat}`</span>
      </div>
    </div>
  );
}
