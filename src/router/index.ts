import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue';
import Pagination from '../views/Pagination.vue';


Vue.use(Router);
const routes = [
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/pagination',
    component: Pagination,
  },
]
const router = new Router({
  routes
});

export default router;