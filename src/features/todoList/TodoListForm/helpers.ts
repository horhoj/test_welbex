import { TodoItem } from '../types';

export const getNumberOfPages = (
  data: unknown[],
  numberOfItemsPerPage: number,
): number => {
  return Math.ceil(data.length / numberOfItemsPerPage);
};

export const getPaginatedTodoList = (
  todoList: TodoItem[],
  currentPage: number,
  numberOfItemsPerPage: number,
): TodoItem[] => {
  const startIndex = (currentPage - 1) * numberOfItemsPerPage;
  const endIndex = startIndex + numberOfItemsPerPage;

  return todoList.filter(
    (item, index) => index >= startIndex && index < endIndex,
  );
};

export const getTodoItemIndex = (
  index: number,
  currentPage: number,
  numberOfItemsPerPage: number,
): number => index + 1 + (currentPage - 1) * numberOfItemsPerPage;

export const getFilteredTodoList = (
  todoList: TodoItem[],
  searchStr: string,
): TodoItem[] => {
  return todoList.filter((todoItem) =>
    todoItem.title.toLowerCase().includes(searchStr.trim().toLowerCase()),
  );
};
