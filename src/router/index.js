import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import EnHomeView from '../views/EnHomeView.vue'
import UserLoginView from '../views/UserLoginView.vue'
import UserRegisterView from '../views/UserRegisterView.vue'
import LearnView from '../views/LearnView.vue'
import LearnNewView from '../views/LearnNewView.vue'
import WordSpelling from '../views/WordSpelling.vue'
import WordSpellingIncomplete from '../views/WordSpellingIncomplete.vue'
import EnList from '../views/EnListView.vue'
import QueryEnView from '../views/QueryEnView.vue'
import ReadSen from '../views/ReadSen.vue'
import userHomePage from '../views/homePage.vue'
import ReadSenSelect from '../views/ReadSenSelect.vue'
import tieziPage from '../views/communityPage.vue'
import Community from '../views/schoolCommunity.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: EnHomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/learn',
    name: 'LearnView',
    component: LearnView
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/community/Page',
    name: 'CommunityPage',
    component: tieziPage
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: userHomePage
  },
  {
    path: '/enList',
    name: 'enList',
    component: EnList
  },
  {
    path: '/learnNew',
    name: 'LearnNewView',
    component: LearnNewView
  },
  {
    path: '/learn/queryEn',
    name: 'QueryEnView',
    component: QueryEnView
  },
  {
    path: '/learn/wordSpelling',
    name: 'WordSpelling',
    component: WordSpelling
  },
  {
    path: '/learn/ReadSen',
    name: 'ReadSen',
    component: ReadSen
  },
  {
    path: '/learn/ReadSenSelect',
    name: 'ReadSenSelect',
    component: ReadSenSelect
  },
  {
    path: '/learn/wordSpellingIncomplete',
    name: 'WordSpellingIncomplete',
    component: WordSpellingIncomplete
  },
  {
    path: '/pc/login',
    name: 'useLogin',
    component: UserLoginView
  },
  {
    path: '/pc/register',
    name: 'useRegister',
    component: UserRegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
