
// 主路由
const mainRoutes = [
  {
    path: '/',
    name: 'jay',
    redirect: '/jay',
    component: () => import('../views/jay'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index')
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('../views/mall/index')
      }, {
        path: '/music',
        name: 'music',
        component: () => import('../views/music/index')
      }, {
        path: '/news',
        name: 'news',
        component: () => import('../views/news/index')
      }, {
        path: '/video',
        name: 'video',
        component: () => import('../views/video/index')
      }

    ]
  },
  {
    path: '*',
    component: () => import('../views/jay')
  }
]

export default [
  ...mainRoutes
]
