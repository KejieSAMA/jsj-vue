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
import shopMyPage from '../views/shopPage.vue'
import shopMyPageInfo from '../views/shopPageInfo.vue'
import shopMyCartPage from '../views/shopCartPage.vue'
import EditProfile from '@/views/EditProfile.vue'
import ManagementBackground from '@/views/ManagementBackground.vue'
import UserProfile from '@/views/UserProfile.vue'
import PostMange from '@/views/PostMange.vue'
import UserMange from '@/views/UserMange.vue'
import DataDashboard from '@/views/DataDashboard.vue'
import security from '@/views/security.vue'

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
    path: '/shopPage',
    name: 'shopPage',
    component: shopMyPage
  },
  {
    path: '/shopPageInfo',
    name: 'shopPageInfo',
    component: shopMyPageInfo
  },
  {
    path: '/shopCartPage',
    name: 'shopCartPage',
    component: shopMyCartPage
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
  {
    path: '/edit-profile',
    name: 'editProfile',
    component: EditProfile
  },
  {
    path: '/management',
    name: 'management',
    component: ManagementBackground,
    children: [
      {
        path: 'user-profile',
        name: 'UserProfile',
        component: UserProfile
      },
      {
        path: 'topics',
        name: 'PostMange',
        component: PostMange
      }, 
      {
        path: 'users',
        name: 'UserMange',
        component: UserMange
      }, 
      {
        path: 'DataPanel',
        name: 'DataDashboard',
        component: DataDashboard
      },
      {
        path: 'security',
        name: 'security',
        component: security
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
