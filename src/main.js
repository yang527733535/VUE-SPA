import Vue from 'vue'

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)


//每次刚进入网站 肯定会调用main.js 在刚调用的时候，先从本地存储中把购物车总的
//数据读取出来 放在store中
var car = JSON.parse(localStorage.getItem('car')||'[]')

var store = new Vuex.Store({
  state:{  //this.$store.state.xxx
    car:car// 将购物车中的数据用一个数组存储起来，在car数组中存储一些商品的对象，
    // 我们可以暂时将这个商品对象设计成这个样子
    // { id:商品的id，count:购买数量,price:商品价格,selecetd:false }
  },
  mutations:{  //this.$store.commit('methodName','参数1')
   
  updateGoodsSelected(state,info){
    state.car.some(item=>{
      if(item.id==info.id){
        console.log(info.id)
        console.log(info.selected)
        item.selected=info.selected
      }
    })
    //把最新的所有购物车状态保存在store中 
    localStorage.setItem('car', JSON.stringify(state.car))
  },
  removefromCar(state,id){
  //根据id，从store中的购物车中删除对应的那条商品数据
   state.car.some((item,i)=>{
     if(item.id==id){
        state.car.splice(i,1)
        return true;
     }
   })
   //将删除完毕后的最新的购物车数据同步在本地存储中
   localStorage.setItem('car', JSON.stringify(state.car))

  },
  updateGoodsInfo(state, goodsinfo) {
    // 修改购物车中商品的数量值
    // 分析： 
    state.car.some(item => {
      if (item.id == goodsinfo.id) {
        item.count = parseInt(goodsinfo.count)
        return true
      }
    })
    // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
    localStorage.setItem('car', JSON.stringify(state.car))
  },
     addToCar(state,goodsinfo){
         //点击加入购物车，把商品信息，保存到store中的car上
         //分析：1如果购物车中之前就已经有这个对应的商品，只要更新数量
         //2 如果没有，直接把商品数据直接push到car即可
    
        //假设 在购物车中没有找到对应的商品 
         var flag =false; 
         state.car.some(item=>{
           if(item.id===goodsinfo.id){
                
              item.count += parseInt(goodsinfo.count)
              console.log(item.count)
              flag=true
              return true
           }
         })
           //store里的数据找不到 再PUSH进去
         if(flag===false){
             state.car.push(goodsinfo)
         }

         //当更新car之后，把car数组存储到本地的localStorage 
         localStorage.setItem('car',JSON.stringify(state.car))

     }
  },
  getters:{    //this.$store.getters.xxx
    //相当于计算属性，也相当于过滤器 
    getAllcount(state){
      var c=0 ;
      state.car.forEach(item=>{
        c += item.count;
      })
       return c;
      
    },
    getGoodsCount(state){
      var o={}
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o
    },
    getGoodSelected(state){
      var o={}
      state.car.forEach(item=>{
        o[item.id] =item.selected;
      })
      return o
    }
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