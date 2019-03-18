import VueRouter from 'vue-router'

// 导入对应的路由组件

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewInfo from './components/news/Newinfo.vue'
import photolist from './components/photos/Photolist.vue'

//3创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则
 { path:"/",redirect:'/home'},
 { path:'/home',component:HomeContainer },
 { path:'/member',component:MemberContainer },
 { path:'/shopcar',component:ShopcarContainer },
 { path:'/search',component:SearchContainer },
 { path:'/home/newslist',component:NewsList},
 { path:'/home/newsinfo/:id',component:NewInfo},
 {path:'/home/Photolist',component:photolist}

 


  ],
  linkActiveClass:'mui-active' //覆盖默认的路由的高亮的类，默认的类叫router-link-active
})

// 把路由对象暴露出去
export default router