import { FC, useEffect, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { todoListSlice } from '../todoListSlice';

import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { Paginator } from './Paginator';
import styles from './TodoListForm.module.scss';
import {
  getFilteredTodoList,
  getNumberOfPages,
  getPaginatedTodoList,
  getTodoItemIndex,
} from './helpers';
import { TodoItemCard } from './TodoItemCard/TodoItemCard';
import deleteImg from './assets/img/delete.svg';

export const TodoListForm: FC = () => {
  const todoList = useAppSelector(todoListSlice.selectors.getTodoList);
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(todoListSlice.selectors.getCurrentPage);
  const searchStr = useAppSelector(todoListSlice.selectors.getSearchStr);

  const filteredTodoList =
    todoList === null ? [] : getFilteredTodoList(todoList, searchStr);

  const numberOfItemsPerPage = 5;

  const numberOfPages = getNumberOfPages(
    filteredTodoList,
    numberOfItemsPerPage,
  );

  const paginatedTodoList = getPaginatedTodoList(
    filteredTodoList,
    currentPage,
    numberOfItemsPerPage,
  );

  useEffect(() => {
    if (currentPage > numberOfPages) {
      dispatch(
        todoListSlice.actions.setCurrentPage(
          numberOfPages === 0 ? 1 : numberOfPages,
        ),
      );
    }
  }, [paginatedTodoList]);

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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(todoListSlice.actions.setSearchStr(value));
  };

  const handleClearSearchStr = () => {
    dispatch(todoListSlice.actions.setSearchStr(''));
  };

  return (
    <div className={styles.wrap}>
      <div>
        <button type={'button'} onClick={handleAdd}>
          Add new todo
        </button>
      </div>
      <div>
        <label>filter</label>
        <div className={styles.filterWrap}>
          <input
            type="text"
            placeholder={'Please input search text'}
            onChange={handleSearchChange}
            value={searchStr}
          />
          <button
            type={'button'}
            className={styles.controlPanelBtn}
            onClick={handleClearSearchStr}
          >
            <img src={deleteImg} alt="Filter clear" />
          </button>
        </div>
      </div>
      <div className="gap-20">
        {paginatedTodoList ? (
          <div>
            <span className="font-bold">tasks found:</span>{' '}
            {filteredTodoList.length}
          </div>
        ) : null}
        {paginatedTodoList
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
                searchStr={searchStr}
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
