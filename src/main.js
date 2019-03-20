import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{  //this.$store.state.xxx
    car:[]// 将购物车中的数据用一个数组存储起来，在car数组中存储一些商品的对象，
    // 我们可以暂时将这个商品对象设计成这个样子
    // { id:商品的id，count:购买数量,price:商品价格,selecetd:false }
  },
  mutations:{  //this.$store.commit('methodName','参数1')

  },
  getters:{    //this.$store.getters.xxx

  }
})


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
 import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
 Vue.component(Header.name,Header)
 Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

 //这是安装图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

//导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

 //导入app根组件
 import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render: c=>c(app),
  router,//1.4挂载路由对象在VM实例上
  store  //挂载store状态管理 

})