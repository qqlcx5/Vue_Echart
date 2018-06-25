import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import index from './views/index'
import chartColumn from './views/chartColumn'
import chartLine from './views/chartLine'
import chartPie from './views/chartPie'
import chartTable from './views/chartTable'
import chartTree from './views/chartTree'
import chartBar from './views/chartBar'

const routes = [
  {path: '/', component: index},
  {path: '/chartColumn', component: chartColumn},
  {path: '/chartLine', component: chartLine},
  {path: '/chartPie', component: chartPie},
  {path: '/chartTable', component: chartTable},
  {path: '/chartTree', component: chartTree},
  {path: '/chartBar', component: chartBar}
]

const router = new VueRouter({routes})
export default router
