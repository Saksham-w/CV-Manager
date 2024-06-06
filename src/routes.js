import { createRouter, createWebHistory } from "vue-router";
import Main from "./components/Main.vue";
import SignUp from "./components/SignUp.vue";
import Upload from "./components/Upload.vue";
import Dashboard from "./components/Dashboard.vue";
import Individual from "./components/Individual.vue";
import Login from "./components/Login.vue";
import Update from "./components/Update.vue";
import Home from "./components/Home.vue";
import Calendar from "./components/Calendar.vue";

const routes = [
  {
    name: "Login",
    component: Login,
    path: "/",
    meta: { requiresGuest: true },
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
    meta: { requiresGuest: true },
  },
  {
    path: "/",
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        name: "Home",
        component: Home,
        path: "home",
      },
      {
        name: "Upload",
        component: Upload,
        path: "upload",
      },
      {
        name: "Dashboard",
        component: Dashboard,
        path: "dashboard",
      },
      {
        name: "Individual",
        component: Individual,
        path: "individual/:id",
      },
      {
        name: "Update",
        component: Update,
        path: "update/:id",
      },
      {
        name: "Calendar",
        component: Calendar,
        path: "calendar",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("auth-token");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (isAuthenticated) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("auth-token");
  localStorage.removeItem("name");
});

export default router;
