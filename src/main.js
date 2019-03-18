import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)


//2.1导入 VUE-RESOURCE
import VueResource from 'vue-resource'
//2.2安装VueResource
Vue.use(VueResource)

import moment from 'moment'
//定义全局的过滤器
Vue.filter('dataFormat',function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(datastr).format(pattern)
})



//1.3导入自己的router.js路由模块
import router from './router.js'

 //按需要导入mint组件
 import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
 Vue.component(Header.name,Header)
 Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

 //导入app根组件
 import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render: c=>c(app),
  router //1.4挂载路由对象在VM实例上

})