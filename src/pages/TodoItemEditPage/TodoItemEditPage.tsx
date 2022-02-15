import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TodoItemEditForm } from '../../features/todoList/TodoItemEditForm';

export const TodoItemEditPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <TodoItemEditForm id={String(id)} />
    </>
  );
};
