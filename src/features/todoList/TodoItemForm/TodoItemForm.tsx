import { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TodoItem } from '../types';
import styles from './TodoItemForm.module.scss';

interface FormProps {
  initialValues: TodoItem;
  onSubmit(values: TodoItem): void;
  onCancel(): void;
}

const validationSchema = yup.object({
  title: yup.string().required('Must not be empty!!!'),
});

export const TodoItemForm: FC<FormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik<TodoItem>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete={'off'}
      className={styles.wrap}
    >
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder={'please input title'}
          {...formik.getFieldProps('title')}
        />
        {Boolean(formik.touched.title) && Boolean(formik.errors.title) ? (
          <div className="msg-error">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className={styles.controlPanelWrap}>
        <button type={'submit'}>save</button>
        <button type={'button'} onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
};
