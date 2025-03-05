import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '@/views/Home/Home.vue'
import Article from '@/views/Article/Article.vue'
import ArticleList from '@/views/Article/ArticleList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
    },
    {
      path: '/article-list',
      name: 'articlelist',
      component: ArticleList,
    }
  ]
})

export default router
