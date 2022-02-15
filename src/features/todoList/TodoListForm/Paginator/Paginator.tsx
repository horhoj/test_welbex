import { FC } from 'react';
import { getBtnsData } from './helpers';
import styles from './Paginator.module.scss';

interface PaginatorProps {
  numberOfPages: number;
  currentPage: number;
  onChange(page: number): void;
}

export const Paginator: FC<PaginatorProps> = ({
  currentPage,
  numberOfPages,
  onChange,
}) => {
  const btnsData: number[] = getBtnsData(numberOfPages);

  return (
    <div className={styles.wrap}>
      {btnsData.map((item) => (
        <button
          className={`${styles.btn} ${
            currentPage === item ? styles.btnActive : ''
          }`}
          key={item}
          type={'button'}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
