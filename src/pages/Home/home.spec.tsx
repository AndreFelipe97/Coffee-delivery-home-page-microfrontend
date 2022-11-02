import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './index'

describe('Home page', () => {
  it('render home', () => {
    render(<Home />);
    const title = screen.getByText('Encontre o café perfeito para qualquer hora do dia');
    const subtitle = screen.getByText('Com o coffee Delivery você recebeu seu café onde estiver, a qualquer hora');
    const serviceCart = screen.getByText('Compra simples e segura');
    const ServiceClock = screen.getByText('Embalagem mantém o café intacto');
    const servicePackage = screen.getByText('Entrega rápida e rastreada');
    const serviceCoffee = screen.getByText('O café fresquinho até você');
    const bannerElement = screen.getByTestId('banner');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(serviceCart).toBeInTheDocument();
    expect(ServiceClock).toBeInTheDocument();
    expect(servicePackage).toBeInTheDocument();
    expect(serviceCoffee).toBeInTheDocument();
    expect(bannerElement).toBeInTheDocument();
  })
})
