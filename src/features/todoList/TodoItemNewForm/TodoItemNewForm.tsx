import { FC } from 'react';
import { TodoItem } from '../types';
import { TodoItemForm } from '../TodoItemForm';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { useAppDispatch } from '../../../store/hooks';
import { todoListSlice } from '../todoListSlice';

export const TodoItemNewForm: FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: TodoItem = {
    id: 0,
    title: '',
    completed: false,
    userId: 0,
  };

  const goToTodoList = () => {
    const path = getRoutePath('TodoListPage');
    dispatch(appSlice.actions.redirect(path));
  };

  const handleSubmit = (values: TodoItem) => {
    // console.log(values);
    dispatch(todoListSlice.actions.addTodoItem(values));
    goToTodoList();
  };

  const handleCancel = () => {
    goToTodoList();
  };

  return (
    <div className="w-100 gap-20">
      <div>Add new todo item</div>
      <TodoItemForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};
