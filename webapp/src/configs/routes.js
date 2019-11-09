import Home from '@/views/index';

import NotFound from '@/views/404';
import Test from '@/views/test';
import Forbidden from '@/views/403';

const Router = [
  {
    path: 'test',
    name: 'test',
    component: Test,
    meta: {
      title: '测试',
      icon: 'iconfont icon-reconciliation-fill',
      show: true
    },
    children: [
      {
        path: 'test-1',
        name: 'test-1',
        component: Home,
        meta: {
          title: '测试1',
          show: false
        }
      }
    ]
  },
  {
    path: '403',
    name: 'forbidden',
    meta: {
      title: '403'
    },
    component: Forbidden
  },
  {
    path: '404',
    name: 'notFound',
    meta: {
      title: '404'
    },
    component: NotFound
  },
  {
    path: 'test',
    name: 'TEST',
    meta: {
      title: 'TEST'
    },
    component: Test
  },
  {
    path: '*',
    redirect: '404'
  }
];

Router.unshift({
  path: '',
  redirect: Router.find(route => route.meta && route.meta.show).path
});

const RouterList = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    },
    children: Router
  }
];

export default RouterList;
