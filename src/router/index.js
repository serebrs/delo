import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "Auth" },
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/documents",
    name: "documents",
    meta: { layout: "Main", title: "Документы" },
    component: () => import(/* webpackChunkName: "documents" */ "../views/DocumentsView.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    meta: { layout: "Main", title: "Задачи" },
    component: () => import(/* webpackChunkName: "tasks" */ "../views/TasksView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
