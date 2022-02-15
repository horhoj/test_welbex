import { FC } from 'react';
import { TodoItem } from '../../types';
import editImg from '../assets/img/edit.svg';
import deleteImg from '../assets/img/delete.svg';
import styles from './TodoItemCard.module.scss';

interface TodoItemCardProps {
  todoItem: TodoItem;
  index: number;
  onToggleCompleted(id: number): void;
  onDelete(id: number): void;
  onEdit(id: number): void;
}

export const TodoItemCard: FC<TodoItemCardProps> = ({
  todoItem,
  index,
  onToggleCompleted,
  onDelete,
  onEdit,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.dataWrap}>
        <button
          type={'button'}
          className={todoItem.completed ? styles.doneBtn : styles.notDoneBtn}
          onClick={() => onToggleCompleted(todoItem.id)}
        >
          {todoItem.completed ? 'done' : 'not done'}
        </button>
        <div className={styles.controlPanelWrap}>
          <button
            type={'button'}
            className={styles.controlPanelBtn}
            onClick={() => onEdit(todoItem.id)}
          >
            <img src={editImg} alt={'edit btn'} />
          </button>
          <button
            type={'button'}
            className={styles.controlPanelBtn}
            onClick={() => onDelete(todoItem.id)}
          >
            <img src={deleteImg} alt={'edit btn'} />
          </button>
        </div>
      </div>

      <div>
        <span className="font-bold">№:</span> {index} (
        <span className="font-bold">ID:</span> {todoItem.id})
      </div>
      <div>{todoItem.title}</div>
    </div>
  );
};
