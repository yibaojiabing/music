import { createRouter, createWebHistory } from 'vue-router'
import recommend from "../views/recommend.vue"
import singer from "../views/singer.vue"
import topList from "../views/topList.vue"  
import search from "../views/search.vue"
const routes = [
  {
    path: "/",
    redirect: "/recommend"
  },
  {
    path: "/recommend",
    component: recommend
  },
  {
    path: "/singer",
    component: singer
  },
  {
    path: "/top-list",
    component: topList
  },
  {
    path: "/search",
    component: search
  }
]

const router = createRouter({
  linkActiveClass: "active",//更改router-link被激活时的类，设置这个类样式使得router-link激活时显示样式
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
