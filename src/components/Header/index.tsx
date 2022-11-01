import { FiMapPin, FiShoppingCart } from "react-icons/fi";

import logo from '../../assets/imgs/logo.svg';

import './styles.scss';

export function Header() {
  return (
    <div className='header-container'>
      <img data-testid="logo" src={logo} alt="Logo do projeto" />
      <div className='info-container'>
        <span className='locale' data-testid="info-locale"><FiMapPin /> Porto Alegre, RS</span>
        <a href="#" data-testid="cart-button" className="cart"><FiShoppingCart /></a>
      </div>
    </div>
  );
}
