import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { todoListSlice } from '../../features/todoList/todoListSlice';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  //ЕСЛИ ХОТЯ БЫ 1 из данных флагов равен true, то будет показан индикатор загрузки
  const todoListIsLoading = useAppSelector(
    todoListSlice.selectors.getIsLoading,
  );
  const isLoading = todoListIsLoading;

  return isLoading ? <div className={styles.Spinner} /> : null;
};
