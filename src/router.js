import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './components/PaginaPrincipal.vue';
import Login from './components/LoginVista.vue';
import SeriesList from './components/SeriesUsuario.vue';

const routes = [
  {
    name:'Login',
    path:'/login',
    component: Login,
  },{
    name: 'Home',
    path: '/',
    component: Home,
  },{
    name: 'Series',
    path: '/Series',
    component: SeriesList,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;