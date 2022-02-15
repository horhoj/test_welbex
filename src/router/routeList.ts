import { FC } from 'react';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import { TodoListPage } from '../pages/TodoListPage';

interface RouteItem {
  name: Routes;
  path: string;
  component: FC;
}

export type Routes = 'Home' | 'TodoListPage' | 'Page404';

export const routeList: RouteItem[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },

  {
    name: 'TodoListPage',
    path: '/todo-list',
    component: TodoListPage,
  },

  {
    name: 'Page404',
    path: '*',
    component: Page404,
  },
];
