import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

const Login = React.lazy(() => import('@/pages/Login'))
const ArticleManage = React.lazy(() =>
  import('@/pages/admin/article/ArticleManage')
)
const ArticleAdd = React.lazy(() => import('@/pages/admin/article/ArticleAdd'))
const ArticleEdit = React.lazy(() =>
  import('@/pages/admin/article/ArticleEdit')
)
const ClassifyManage = React.lazy(() =>
  import('@/pages/admin/classify/ClssifyManage')
)
const ClassifyAdd = React.lazy(() =>
  import('@/pages/admin/classify/ClassifyAdd')
)
const ClassifyEdit = React.lazy(() =>
  import('@/pages/admin/classify/ClassifyEdit')
)
const Home = React.lazy(() => import('@/pages/home/Home'))
const CodeShare = React.lazy(() => import('@/pages/home/CodeShare'))
const HappyWriting = React.lazy(() => import('@/pages/home/HappyWriting'))
const PersonalFiles = React.lazy(() => import('@/pages/home/PersonalFiles'))
const AboutMe = React.lazy(() => import('@/pages/home/AboutMe'))
const Article = React.lazy(() => import('@/pages/home/Article'))

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/codeshare',
    component: CodeShare,
  },
  {
    path: '/happywriting',
    component: HappyWriting,
  },
  {
    path: '/personalfiles',
    component: PersonalFiles,
  },
  {
    path: '/aboutme',
    component: AboutMe,
  },
  {
    path: '/article',
    component: Article,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/admin',
    exact: true,
    render: () => <Redirect to="/admin/article" />,
  },
  {
    path: '/admin/article',
    exact: true,
    component: ArticleManage,
  },
  {
    path: '/admin/article/add',
    exact: true,
    component: ArticleAdd,
  },
  {
    path: '/admin/article/edit',
    exact: true,
    component: ArticleEdit,
  },
  {
    path: '/admin/classify',
    exact: true,
    component: ClassifyManage,
  },
  {
    path: '/admin/classify/add',
    exact: true,
    component: ClassifyAdd,
  },
  {
    path: '/admin/classify/edit',
    exact: true,
    component: ClassifyEdit,
  },
]

export default routes
