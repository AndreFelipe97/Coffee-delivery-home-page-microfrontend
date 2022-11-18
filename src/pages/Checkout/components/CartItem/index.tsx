import { useEffect, useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiTrash
} from "react-icons/fi";

import styles from './styles.module.scss'

interface CartItemProps {
  imagePath: string;
  title: string;
  price: number;
}

export function CartItem({imagePath, title, price}: CartItemProps) {
  const [priceFormat, setPriceFormat] = useState<string>('')
  
  useEffect(() => {
    let numberFormat = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' })
      .format(price)
    setPriceFormat(numberFormat)
  }, [])

  return (
    <div className={styles['cart-item']}>
      <img src={imagePath} alt='' />
      <div className={styles['amount']}>
        <span className={styles['product-title']}>{title}</span>
        <div className={styles['amount-item']}>
          <div className={styles['counter-item']}>
            <button><FiMinus /></button>
            <span>1</span>
            <button><FiPlus /></button>
          </div>
          <button className={styles['remove-button']}><FiTrash /> remover</button>
        </div>
      </div>
      <span className={styles['price-item']}>{priceFormat}</span>
    </div>
  );
}
