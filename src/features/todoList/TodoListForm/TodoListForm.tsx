import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { todoListSlice } from '../todoListSlice';

import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { Paginator } from './Paginator';
import styles from './TodoListForm.module.scss';
import {
  getNumberOfPages,
  getPaginatedTodoList,
  getTodoItemIndex,
} from './helpers';
import { TodoItemCard } from './TodoItemCard/TodoItemCard';

export const TodoListForm: FC = () => {
  const todoList = useAppSelector(todoListSlice.selectors.getTodoList);
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(todoListSlice.selectors.getCurrentPage);

  useEffect(() => {
    //это нужно что бы исключить ситуацию, когда мы на странице удаляем последний todo и
    //получаем пустую страницу. Если такое произойдет то мы переключимся на последнюю страницу
    if (todoList !== null) {
      const numberOfPages = getNumberOfPages(todoList, numberOfItemsPerPage);
      if (currentPage > numberOfPages) {
        dispatch(todoListSlice.actions.setCurrentPage(numberOfPages));
      }
    }
  }, [todoList]);

  //если список todos с сервера мы не получили, то ничего не выводить
  if (todoList === null) {
    return null;
  }

  const numberOfItemsPerPage = 5;

  const numberOfPages = getNumberOfPages(todoList, numberOfItemsPerPage);

  const paginatedTodoList = getPaginatedTodoList(
    todoList,
    currentPage,
    numberOfItemsPerPage,
  );

  const handleSetCurrentPage = (page: number) => {
    dispatch(todoListSlice.actions.setCurrentPage(page));
  };

  const handleToggleCompleted = (id: number) => {
    dispatch(todoListSlice.actions.toggleCompleted(id));
  };

  const handleDelete = (id: number) => {
    const msg = `delete todoItem with id="${id}"?`;
    if (confirm(msg)) {
      dispatch(todoListSlice.actions.deleteTodoItem(id));
    }
  };

  const handleEdit = (id: number) => {
    const path = getRoutePath('TodoItemEditPage', id.toString());
    dispatch(appSlice.actions.redirect(path));
  };

  const handleAdd = () => {
    const path = getRoutePath('TodoItemNewPage');
    dispatch(appSlice.actions.redirect(path));
  };

  return (
    <div className={styles.wrap}>
      <div>
        <button type={'button'} onClick={handleAdd}>
          Add new todo
        </button>
      </div>
      <div className="gap-20">
        {todoList ? (
          <div>
            <span className="font-bold">number of todo:</span> {todoList.length}
          </div>
        ) : null}
        {todoList
          ? paginatedTodoList.map((todoItem, index) => (
              <TodoItemCard
                onToggleCompleted={handleToggleCompleted}
                todoItem={todoItem}
                key={todoItem.id}
                index={getTodoItemIndex(
                  index,
                  currentPage,
                  numberOfItemsPerPage,
                )}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          : null}
      </div>
      <div>
        {todoList ? (
          <Paginator
            numberOfPages={numberOfPages}
            currentPage={currentPage}
            onChange={handleSetCurrentPage}
          />
        ) : null}
      </div>
    </div>
  );
};
