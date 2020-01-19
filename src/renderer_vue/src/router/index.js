import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import NoteIndex from "../views/note/Index.vue";
import NoteSetting from "../views/note/Setting.vue";
import NoteList from "../views/note/List.vue";
import NoteAdd from "../views/note/Add.vue";
import NoteEdit from "../views/note/Edit.vue";
import NoteDetail from "../views/note/Detail.vue";
import NoteTags from "../views/note/Tags.vue";
import NoteImages from "../views/note/Images.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/note",
    name: "noteIndex",
    component: NoteIndex,
    children: [
      {
        path: "list/:tag?",
        name: "noteList",
        component: NoteList
      },
      {
        path: "tags",
        name: "noteTags",
        component: NoteTags
      },
      {
        path: "images",
        name: "noteImages",
        component: NoteImages
      },
      {
        path: "detail/:number",
        name: "noteDetail",
        component: NoteDetail
      },
      {
        path: "add",
        name: "noteAdd",
        component: NoteAdd
      },
      {
        path: "edit/:number",
        name: "noteEdit",
        component: NoteEdit
      },
      {
        path: "setting",
        name: "noteSetting",
        component: NoteSetting
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
