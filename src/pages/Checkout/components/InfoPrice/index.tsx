import { useContext, useEffect, useState } from 'react';
// import { AddCartContext } from '../../../../hooks/useAddCart';

import styles from './styles.module.scss'

export function InfoPrice() {
  // const { totalPrice, totPrice } = useContext(AddCartContext);
  // const [totalPriceProductsFormat, setTotalPriceProductsFormat] = useState<string>('');
  // const [totalPriceFormat, setTotalPriceFormat] = useState<string>('');

  // useEffect(() => {
  //   totPrice()
  // }, []);

  // useEffect(() => {
  //   console.log('totalPrice')
  //   console.log(totalPrice)
  //   let numberTotalProductFormat = new Intl.NumberFormat(
  //     'pt-BR', { style: 'currency', currency: 'BRL' })
  //     .format(totalPrice ? totalPrice : 0)
  //   setTotalPriceProductsFormat(numberTotalProductFormat);

  //   let numberTotalFormat = new Intl.NumberFormat(
  //     'pt-BR', { style: 'currency', currency: 'BRL' })
  //     .format(totalPrice ? totalPrice + 3.5 : 0 + 3.5);
  //   setTotalPriceFormat(numberTotalFormat);
  // }, [totalPrice])

  return (
    <div className={styles['info-prices']}>
      <div className={styles['base-total-price-product-and-delivery']}>
        <span className="label">Total de itens</span>
        <span className="price">R$ 1000</span>
      </div>
      <div className={styles['base-total-price-product-and-delivery']}>
        <span className="label">Entrega</span>
        <span className="price">R$ 3,50</span>
      </div>
      <div className={styles['total']}>
        <span className="label-total">Total</span>
        <span className="price-total">R$ 1000</span>
      </div>
    </div>
  );
}
