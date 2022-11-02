import { FiShoppingCart, FiPackage, FiClock, FiCoffee } from 'react-icons/fi';

import banner from '../../assets/imgs/banner.svg';

import './styles.scss';

export function Home() {
  return (
    <div className='home-container'>
      <div className='description-container '>
        <h1 className='title'>Encontre o café perfeito para qualquer hora do dia</h1>
        <span className='subtitle'>Com o coffee Delivery você recebeu seu café onde estiver, a qualquer hora</span>

        <div className='service-description'>
          <div className='service-item'>
            <span className='icon cart-icon'><FiShoppingCart /></span>
            <span className='description'>Compra simples e segura</span>
          </div>
          <div className='service-item'>
            <span className='icon cart-package'><FiPackage /></span>
            <span className='description'>Entrega rápida e rastreada</span>
          </div>
          <div className='service-item'>
            <span className='icon cart-clock'><FiClock /></span>
            <span className='description'>Embalagem mantém o café intacto</span>
          </div>
          <div className='service-item'>
            <span className='icon cart-coffe'><FiCoffee /></span>
            <span className='description'>O café fresquinho até você</span>
          </div>
        </div>
      </div>
      <img src={banner} alt="Imagem de um copo de café com alguns graõs ao lado" data-testid="banner" />
    </div>
  );
}

