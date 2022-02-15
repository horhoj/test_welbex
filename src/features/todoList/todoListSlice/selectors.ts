import { RequestError, RootState } from '../../../store/types';
import { TodoItem } from '../types';

export const getIsLoading = (state: RootState): boolean =>
  state.todoList.isLoading;

export const getRequestError = (state: RootState): RequestError | null =>
  state.todoList.error;

export const getTodoList = (state: RootState): TodoItem[] | null =>
  state.todoList.todoList;

export const getCurrentPage = (state: RootState): number =>
  state.todoList.currentPage;

export const getSearchStr = (state: RootState): string =>
  state.todoList.searchStr;
