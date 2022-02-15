import { FC } from 'react';
import logoImg from './assets/img/logo.png';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.wrap}>
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <div className="gap-20">
        <div>
          <h1>Здравствуйте!</h1>
          <p>Это тестовое задание сделанное для Вашей компании.</p>
          <p>Все пункты задания выполнены успешно.</p>
        </div>
        <div>
          <h2>зависимости:</h2>
          <p>node 14, yarn</p>
        </div>
        <div>
          <h2>Стек:</h2>
          <p>
            react, react-router, redux-toolkit, redux-thunk, sass (scss), axios,
            formik, yup, eslint, prettier, docker
          </p>
        </div>
        <div>
          <h2>Запуск: </h2>
          <h3>В папке с проектом запустить: </h3>
          <p>yarn</p>
          <p>yarn start</p>
        </div>
      </div>
    </div>
  );
};
