import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import NoteList from "../views/note/List.vue";
import NoteAdd from "../views/note/Add.vue";
import NoteEdit from "../views/note/Edit.vue";
import NoteDetail from "../views/note/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/note/list",
    name: "noteList",
    component: NoteList
  },
  {
    path: "/note/detail/:number",
    name: "noteDetail",
    component: NoteDetail
  },
  {
    path: "/note/add",
    name: "noteAdd",
    component: NoteAdd
  },
  {
    path: "/note/edit/:number",
    name: "noteEdit",
    component: NoteEdit
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
