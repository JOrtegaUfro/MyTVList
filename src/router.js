import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './pages/PaginaPrincipal.vue';
import Login from './pages/LoginVista.vue';
import SeriesList from './pages/SeriesUsuario.vue';
import Registro from './pages/RegistroVista.vue';
import AgregarSerieUsuario from './pages/AgregarSerieUsuario.vue';
import SeriesAdmin from './pages/SeriesAdmin.vue';
import AgSeriesGen from './pages/AgregarSerieAdmin.vue';


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
  {
    name: 'Registro',
    path: '/Registro',
    component: Registro,
  },
  {
    name: 'AgregarSerieUsuario',
    path: '/AgSerieUs',
    component: AgregarSerieUsuario,
  },
  {
    name: 'SeriesAdmin',
    path: '/SeriesAdmin',
    component: SeriesAdmin,
  },
  {
    name: 'AgSeriesGeneral',
    path: '/AgSeriesGeneral',
    component: AgSeriesGen,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;