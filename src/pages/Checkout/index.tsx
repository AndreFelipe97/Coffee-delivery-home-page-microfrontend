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
import { useEffect, useState } from "react";

type Products = {
  amount: number;
  id: number;
  imgPath:string;
  price: number
  title: string;
}

export function Checkout() {
  const [products, setProducts] = useState<Array<Products>>([]);
  const [totalPriceProductsFormat, setTotalPriceProductsFormat] = useState<string>('');
  const [totalPriceFormat, setTotalPriceFormat] = useState<string>('');
  // const { newOrder } = useContext(OrderContext);
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const reducer = (accumulator: Products, product: Products) => {
    return (accumulator.price * accumulator.amount) + (product.price *product.amount)
  };

  useEffect(() => {
    const getProducts = localStorage.getItem('@CART') ? JSON.parse(String(localStorage.getItem('@CART'))):[]
    setProducts(getProducts);

    let totalItems;

    if (getProducts.length > 0) {
      if (getProducts.length > 1) {
        totalItems = getProducts.reduce(reducer)
      } else {
        totalItems = getProducts[0].price * getProducts[0].amount
      }
    } else {
      totalItems = 0
    }

    let numberTotalProductFormat = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' })
      .format(Number(totalItems))
    setTotalPriceProductsFormat(numberTotalProductFormat);

    let numberTotalFormat = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' })
      .format(totalItems + 3.5);
    setTotalPriceFormat(numberTotalFormat);
  }, [])

  function handleCreateNewOrder(data: any) {
    // newOrder(data)
    // cleanCart()
    navigate('/confirmation')
  }

  function removeProduct(id: number) {
    const cart = localStorage.getItem("@CART") ? JSON.parse(String(localStorage.getItem("@CART"))) : [];
    let indexProduct = cart.findIndex((prod: Products) => prod.id === id);
    while(indexProduct >= 0){
      cart.splice(indexProduct, 1);
      indexProduct = cart.indexOf(id);
    }

    localStorage.setItem("@CART", JSON.stringify(cart))

    setProducts(cart)

    let totalItems;

    if (cart.length > 0) {
      if (cart.length > 1) {
        totalItems = cart.reduce(reducer)
      } else {
        totalItems = cart[0].price * cart[0].amount
      }
    } else {
      totalItems = 0
    }

    let numberTotalProductFormat = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' })
      .format(Number(totalItems))
    setTotalPriceProductsFormat(numberTotalProductFormat);

    let numberTotalFormat = new Intl.NumberFormat(
      'pt-BR', { style: 'currency', currency: 'BRL' })
      .format(totalItems + 3.5);
    setTotalPriceFormat(numberTotalFormat);
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
            <Input
              register={register}
              label="Rua"
            />
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
          {
            products.map(product => (
              <CartItem
                key={product.id}
                id={product.id}
                imagePath={product.imgPath}
                title={product.title}
                price={product.price * product.amount}
                amount={product.amount}
                removeProduct={() => removeProduct(product.id)}
              />
            ))
          }
          <InfoPrice totalPriceProductsFormat={totalPriceProductsFormat} totalPriceFormat={totalPriceFormat} />
          <ConfirmOrderButton /> 
        </div>
      </div>
      </div>
    </form>
  );
}
