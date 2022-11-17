import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Home } from './pages/Home';

// @ts-ignore
import Products from 'products/App';

function App() {
  return (
    <div className='container'>
      <Header />
      <Home />
      <Products />
    </div>
  );
}

export default App;
