import {
  FiMapPin,
  FiDollarSign,
} from "react-icons/fi";

import { useForm } from 'react-hook-form'

import { FaMoneyBillAlt, FaRegCreditCard, FaUniversity } from 'react-icons/fa'

import { useNavigate } from "react-router-dom";

import ConfirmOrderButton from "../../components/ConfirmOrderButton";

import styles from './styles.module.scss';

import { Input } from "../../components/DataEntry/Input";
import { CartItem } from "./components/CartItem";
import { InfoPrice } from "./components/InfoPrice";
import { PaymentMethodButton } from "./components/PaymentMethodButton";
import { InputCep } from "../../components/DataEntry/InputCep";

export function Checkout() {
  // const { products, cleanCart } = useContext(AddCartContext);
  // const { newOrder } = useContext(OrderContext);
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  function handleCreateNewOrder(data: any) {
    // newOrder(data)
    // cleanCart()
    navigate('/confirmation')
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewOrder)}>
    <div className={styles['checkout-container']}>
      <div>
        <h2 className={styles['title-card']}>Complete seu pedido</h2>

        <div className={styles['address-card']}>
          <p><FiMapPin /> Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <form className={styles['form-address']}>
            <InputCep register={register} />
            {/* {errors.cep && <span style={{color: 'red'}}>* Campo obrigatório e só permite números</span>} */}
            <Input
              register={register}
              label="Rua"
            />
            {/* {errors.cep && <span style={{color: 'red'}}>* Campo obrigatório e só permite números</span>}   */}
            <div>
              <Input
                register={register}
                label="Número"
              />
              
              <Input
                register={register}
                label="Complemento"
              />
            </div>
            {/* <div>
              {errors.cep && <span style={{color: 'red'}}>* Campo obrigatório e só permite números</span>}  
              
              {errors.cep && <span style={{color: 'red'}}>* Campo obrigatório e só permite números</span>}  
            </div> */}
            <div>
              <Input
                register={register}
                label="Bairro"
              />
              <Input
                register={register}
                label="Cidade"
              />
              <Input 
                register={register}
                label="UF"
              />
            </div> 
          </form>
        </div>
        <div className={styles['payment-container']}>
          <p><FiDollarSign /> Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          <div>
            <PaymentMethodButton
              icon={<FaRegCreditCard />}
              label='Cartão de crédito'
              register={register}
            />
            <PaymentMethodButton
              icon={<FaUniversity />}
              label='Cartão de débito'
              register={register}
            />
            <PaymentMethodButton
              icon={<FaMoneyBillAlt />}
              label='Dinheiro'
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="product-select">
        <h2 className={styles['title-card']}>Cafés selecionados</h2>
        <div className={styles['cart-list']}>
          
          <CartItem
            imagePath='teste'
            title="teste"
            price={10}
          />
          <InfoPrice />
          <ConfirmOrderButton /> 
        </div>
      </div>
      </div>
    </form>
  );
}
