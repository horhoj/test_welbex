import React, { FC } from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  //ЕСЛИ ХОТЯ БЫ 1 из данных флагов равен true, то будет показан индикатор загрузки

  const isLoading = false;

  return isLoading ? <div className={styles.Spinner} /> : null;
};
