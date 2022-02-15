import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { getRoutePath } from '../../router';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.wrap}>
      <nav className={styles.nav}>
        <NavLink to={getRoutePath('Home')}>Home</NavLink>
        <NavLink to={getRoutePath('TodoListPage')}>TodoList</NavLink>
      </nav>
    </div>
  );
};
