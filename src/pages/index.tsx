// 路由懒加载
import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const Home2 = lazy(() => import('./home2'));
const Jiemi = lazy(() => import('./jiemicss'));

export { Home, Home2, Jiemi };