import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "Auth" },
    component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/",
    name: "documents",
    meta: { layout: "Main", title: "Документы" },
    component: () => import(/* webpackChunkName: "documents" */ "../views/DocumentsView.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    meta: { layout: "Main", title: "Задачи" },
    component: () => import(/* webpackChunkName: "tasks" */ "../views/TasksView.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    meta: { layout: "Main", title: "Статистика" },
    component: () => import(/* webpackChunkName: "tasks" */ "../views/StatsView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
