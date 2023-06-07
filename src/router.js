import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './components/PaginaPrincipal.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;