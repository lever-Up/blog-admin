import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/Home');
const Article = () => import('../components/Article');
const Category = () => import('../components/Category');
const User = () => import('../components/User');
const Login = () => import('../components/Login');

const ArticleAdd = () => import('../components/ArticleAdd');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/login', name: 'login', component: Login},
    {path: '/article', name: 'articles', component: Article},
    {path: '/article/add', name: 'articleAdd', component: ArticleAdd},
    {path: '/article/:id', name: 'article', component: ArticleAdd},
    {path: '/category', name: 'category', component: Category},
    {path: '/user', name: 'user', component: User}
  ]
})
