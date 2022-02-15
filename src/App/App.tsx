import React, { useEffect } from 'react';
import { Router } from '../router';
import { todoListSlice } from '../features/todoList/todoListSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RequestErrorMSG } from '../components/RequestErrorMSG';
import styles from './App.module.scss';
import { Spinner } from './Spinner';
import { Header } from './Header';

const REQUEST_ERROR_TITLE = 'Failed to get list of todos';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const requestError = useAppSelector(todoListSlice.selectors.getRequestError);

  useEffect(() => {
    dispatch(todoListSlice.thunks.getTodoListRequest());
  }, []);
  return (
    <>
      <Spinner />
      <div className={styles.wrap}>
        <Header />
        {requestError ? (
          <RequestErrorMSG
            requestError={requestError}
            title={REQUEST_ERROR_TITLE}
          />
        ) : (
          <main className={styles.routesWrap}>
            <Router />
          </main>
        )}
      </div>
    </>
  );
};
