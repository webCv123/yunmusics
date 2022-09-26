import { createRouter, createWebHistory ,createWebHashHistory } from 'vue-router'
import store from '@/store/index'
const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {path:'/home',name:'home',component: ()=> import('@/views/layout'), children:[
    {path:'/home',component:()=> import('@/components/app-banner')},
    {path:'/search:name',component:()=> import('@/components/app-search')},
    {path:'/recommend',component:()=> import('@/components/app-recommend')},
    {path:'/cli:id',component:()=> import('@/components/app-Cli')},
    {path:'/story',component:()=> import('@/components/app-guofeng')},
    {path:'/mylove',component:()=> import('@/components/app-mylove')},
  ]},
  {path:'/Gologin',name:'login',component:()=> import('@/components/app-login')}
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path==='/mylove'&&store.state.mylike.user.data.userPoint.userId!==327512661){
    router.push({path:'/Gologin'})
  }
  if(to.path==='/home'){
    store.state.index.index = 0
  }
  if(to.path==='/recommend'){
    store.state.index.index = 1
  }
  if(to.path==='/story'){
    store.state.index.index = 2
  }  
  if(to.path==='/mylove'){
    store.state.index.index = 3
  } 
  if(to.path.includes('cli')){
    store.state.index.index = 1
  }
  if(to.path.includes('search')){
    store.state.index.index = 666
  }
  next()
})
export default router
