import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/task',
      name: 'tak',
      component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
    },
    {
      path: '/taskDoing',
      name: 'taskDoing',
      component: () => import(/* webpackChunkName: "about" */ '../views/task/TaskDoing.vue')
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import(/* webpackChunkName: "about" */ '../views/Notice.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "about" */ '../views/My.vue')
    },
    {
      path: '/accountManage',
      name: 'accountManage',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/AccountManage.vue')
    },
    {
      path: '/myAccount',
      name: 'myAccount',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/MyAccount.vue')
    },
    {
      path: '/cardModify',
      name: 'cardModify',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/CardModify.vue')
    },
    {
      path: '/realNameInfo',
      name: 'realNameInfo',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/RealNameInfo.vue')
    },
    {
      path: '/QRcodeModify',
      name: 'QRcodeModify',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/QRcodeModify.vue')
    },
    {
      path: '/myFans',
      name: 'myFans',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/MyFans.vue')
    },
    {
      path: '/agentCenter',
      name: 'agentCenter',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/AgentCenter.vue')
    },
    {
      path: '/fansCheck',
      name: 'fansCheck',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/FansCheck.vue')
    },
    {
      path: '/registeredFans',
      name: 'registeredFans',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/RegisteredFans.vue')
    },
    {
      path: '/noobCourse',
      name: 'noobCourse',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/NoobCourse.vue')
    },
    {
      path: '/serviceCenter',
      name: 'serviceCenter',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/ServiceCenter.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
