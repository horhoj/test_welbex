import { FC } from 'react';
import { HomePage } from '../pages/HomePage';
import { Page404 } from '../pages/Page404';
import { TodoListPage } from '../pages/TodoListPage';
import { TodoItemEditPage } from '../pages/TodoItemEditPage';
import { TodoItemNewPage } from '../pages/TodoItemNewPage';

interface RouteItem {
  name: Routes;
  path: string;
  component: FC;
}

export type Routes =
  | 'HomePage'
  | 'TodoListPage'
  | 'TodoItemEditPage'
  | 'TodoItemNewPage'
  | 'Page404';

export const routeList: RouteItem[] = [
  {
    name: 'HomePage',
    path: '/',
    component: HomePage,
  },

  {
    name: 'TodoListPage',
    path: '/todo-list',
    component: TodoListPage,
  },

  {
    name: 'TodoItemEditPage',
    path: '/todo-edit-item/:id',
    component: TodoItemEditPage,
  },

  {
    name: 'TodoItemNewPage',
    path: '/todo-new-item',
    component: TodoItemNewPage,
  },

  {
    name: 'Page404',
    path: '*',
    component: Page404,
  },
];
