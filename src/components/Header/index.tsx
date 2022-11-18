import {useState, useEffect} from 'react';

import { FiMapPin, FiShoppingCart } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


import logo from '../../assets/imgs/logo.svg';

import './styles.scss';

export function Header() {
  const hasItem = localStorage.getItem("@CART");

  return (
    <header className='header-container'>
      <NavLink to="/" title='home'>
        <img data-testid="logo" src={logo} alt="Logo do projeto" />
      </NavLink>
      <div className='info-container'>
        <span className='locale' data-testid="info-locale"><FiMapPin /> Fortaleza, CE</span>
        <NavLink to="/checkout" title='Checkout' data-testid="cart-button" className={hasItem ? "cartItem" : "cart"}><FiShoppingCart /></NavLink>
      </div>
    </header>
  );
}
