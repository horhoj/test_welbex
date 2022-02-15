import React from 'react';
import { Router } from '../router';
import styles from './App.module.scss';
import { Spinner } from './Spinner';
import { Header } from './Header';

export const App: React.FC = () => {
  return (
    <>
      <Spinner />
      <div className={styles.wrap}>
        <Header />
        <div className={styles.routesWrap}>
          <Router />
        </div>
      </div>
    </>
  );
};
