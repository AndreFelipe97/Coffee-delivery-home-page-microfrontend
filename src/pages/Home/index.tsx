import { FiShoppingCart, FiPackage, FiClock, FiCoffee } from 'react-icons/fi';

import banner from '../../assets/imgs/banner.svg';

// @ts-ignore
import Products from 'products/App';

import './styles.scss';

export function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='description-container '>
          <h1 className='title'>Encontre o café perfeito para qualquer hora do dia</h1>
          <span className='subtitle'>Com o coffee Delivery você recebeu seu café onde estiver, a qualquer hora</span>

          <div className='service-description'>
            <div className='column-service'>
              <div className='service-item'>
                <span className='cart-icon'><FiShoppingCart /></span>
                <span className='description'>Compra simples e segura</span>
              </div>
              <div className='service-item'>
                <span className='clock-icon'><FiClock /></span>
                <span className='description'>Entrega rápida e rastreada</span>
              </div>
            </div>
            <div className='column-service'>
              <div className='service-item'>
                <span className='package-icon'><FiPackage /></span>
                <span className='description'>Embalagem mantém o café intacto</span>
              </div>
              <div className='service-item'>
                <span className='coffe-icon'><FiCoffee /></span>
                <span className='description'>O café fresquinho até você</span>
              </div>
            </div>
          </div>
        </div>
        <img src={banner} alt="Imagem de um copo de café com alguns graõs ao lado" data-testid="banner" />
      </div>
      <Products />
    </>
  );
}

