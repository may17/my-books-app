import { createRouter, createWebHistory } from "vue-router";
import AllBooksPage from "@/views/AllBooksPage.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    path: "/",
    name: "AllBooksPage",
    component: AllBooksPage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
