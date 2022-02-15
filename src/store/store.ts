import { configureStore } from '@reduxjs/toolkit';
import { todoListSlice } from '../features/todoList/todoListSlice';
import { appSlice } from './app';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
