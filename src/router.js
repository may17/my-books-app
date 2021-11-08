import { createRouter, createWebHistory } from "vue-router";
import AllBooksPage from "@/views/AllBooksPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import BookmarksPage from "@/views/BookmarksPage.vue";
import BookDetailsPage from "@/views/BookDetailsPage.vue";
import CreateBook from "@/views/CreateBook.vue";

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
  {
    path: "/bookmarks",
    name: "BookmarksPage",
    component: BookmarksPage,
  },
  {
    path: "/books/:id",
    name: "BookDetailsPage",
    component: BookDetailsPage,
  },
  {
    path: "/create-book",
    name: "CreateBook",
    component: CreateBook,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
