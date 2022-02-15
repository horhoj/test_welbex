import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { todoListSlice } from '../todoListSlice';
import { TodoItem } from '../types';
import { TodoItemForm } from '../TodoItemForm';
import { appSlice } from '../../../store/app';
import { getRoutePath } from '../../../router';

interface TodoItemEditFormProps {
  id: string;
}

export const TodoItemEditForm: FC<TodoItemEditFormProps> = ({ id }) => {
  const todoList = useAppSelector(todoListSlice.selectors.getTodoList);
  const dispatch = useAppDispatch();
  //если не удалось загрузить данные с сервера, то ничего не выводим
  if (todoList === null) {
    return null;
  }

  const todoItemIndex: number = todoList.findIndex(
    (todoItem) => todoItem.id === Number.parseInt(id),
  );

  const goToTodoList = () => {
    const path = getRoutePath('TodoListPage');
    dispatch(appSlice.actions.redirect(path));
  };

  const handleSubmit = (values: TodoItem) => {
    dispatch(todoListSlice.actions.patchTodoItem(values));
    goToTodoList();
  };

  const handleCancel = () => {
    goToTodoList();
  };

  return (
    <div className="w-100 gap-20">
      {todoItemIndex > -1 ? (
        <>
          <div>Edit todo with ID={id}</div>
          <TodoItemForm
            initialValues={todoList[todoItemIndex]}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </>
      ) : (
        <div className="msg-error">Not found todo with ID={id}</div>
      )}
    </div>
  );
};
