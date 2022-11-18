// import { useContext } from "react";
import {FaMapMarkerAlt, FaClock, FaDollarSign } from "react-icons/fa"
// import { OrderContext } from "../../hooks/useOrder";

import deliveryImage from "../../assets/imgs/delivery.svg"

import styles from './styles.module.scss';

export function OrderConfirmation() {
  // const { order } = useContext(OrderContext);

  return (
    <div className={styles['order-confirmation-container']}>
      <div className={styles['info-delivery']}>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <div className={styles['delivery-datail']}>
          <div className="address">
            <div><FaMapMarkerAlt /></div> <p>Entrega em <span>Julio Cesar, 1143 casa 04</span> Járdim América - Fortaleza, ce</p>
          </div>
          <div className={styles['delivery-time']}>
            <div className="icon">
              <FaClock />
            </div>
            <div className="content">
              <span>Previsão de entrega</span>
              <span className="info">20 min - 30 min</span>
            </div>
          </div>
          <div className={styles['payment-method']}>
            <div className="icon">
              <FaDollarSign />
            </div>
            <div className='content'>
              <span>Pagamento na entrega</span>
              <span className="info">Crédito</span>
            </div>
          </div>
        </div>
      </div>
      <img src={deliveryImage} />
    </div>
  );
}
