import { useEffect, useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiTrash
} from "react-icons/fi";

import styles from './styles.module.scss'

interface CartItemProps {
  id: number;
  imagePath: string;
  title: string;
  price: number;
  amount: number
  removeProduct: () => void;
}

export function CartItem({id, imagePath, title, price, amount, removeProduct}: CartItemProps) {
  const [priceFormat, setPriceFormat] = useState<string>('')
  const [amountProduct, setAmountProduct] = useState<number>(0);
  
  useEffect(() => {
    let numberFormat = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' })
      .format(price)
    setPriceFormat(numberFormat)
    setAmountProduct(amount)
  }, [])

  return (
    <div className={styles['cart-item']}>
      <img src={imagePath} alt='' />
      <div className={styles['amount']}>
        <span className={styles['product-title']}>{title}</span>
        <div className={styles['amount-item']}>
          <div className={styles['counter-item']}>
            QTD. <span>{amountProduct}</span>
          </div>
          <button
            type="button"
            className={styles['remove-button']}
            onClick={removeProduct}
          >
            <FiTrash /> remover
          </button>
        </div>
      </div>
      <span className={styles['price-item']}>{priceFormat}</span>
    </div>
  );
}
