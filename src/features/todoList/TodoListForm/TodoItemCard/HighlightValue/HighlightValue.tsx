import React from 'react';
import { HighlightValueProps } from './types';
import styles from './HighlightValue.module.scss';

export const HighlightValue: React.FC<HighlightValueProps> = ({
  value,
  searchStr,
}) => {
  //если значение ячейки не задано
  if (value === null) {
    return <></>;
  }
  //если строка поиска не задана то возвращаем value
  if (searchStr.trim() === '') {
    return <>{value}</>;
  }
  const regexp = new RegExp(searchStr.trim(), 'ig');

  // const ms = String(value).split(searchStr);
  const ms = String(value).match(regexp);
  const slices = String(value).split(regexp);

  //если value не содержит в себе подстрок со значением searchStr
  //то возвращаем исходное значение
  if (!ms) {
    return <>{value}</>;
  }

  return (
    <span>
      {slices.map((item, index) => (
        <span key={index}>
          {item}
          {index < slices.length - 1 ? (
            <span className={styles.searchStrWrap}>{ms[index]}</span>
          ) : null}
        </span>
      ))}
    </span>
  );
};
