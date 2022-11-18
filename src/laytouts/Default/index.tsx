import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';

import styles from './styles.module.scss';

export function LayoutDefault() {
  return (
    <div className={styles['container']}>
      <Header />
      <Outlet />
    </div>
  );
}
