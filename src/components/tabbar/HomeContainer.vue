<template>
    <div>

  <!-- 这是轮播图区域 -->
  <mt-swipe :auto="4000">
      在组件中 使用
  <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index" >
    <!-- 好好了解一下这个v-bind到底有什么用 -->
      <img :src="item.img" alt="">
  </mt-swipe-item>
 
</mt-swipe>

         <h3>home</h3>
    </div>
</template>

<script>
 import { Toast} from 'mint-ui'
 export default {
     data(){
       return {
           lunbotuList:[]  //保存轮播图的数组
       }  
     },
     created(){
   this.getLunbotu()
     },
     methods:{
         getLunbotu(){ //获取轮播图数据的方法
         this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
            //  console.log(result.body);
            if(result.body.status===0){
               this.lunbotuList = result.body.message;
            
            }else{
                //获取失败
            Toast("加载失败")
            }

         })

         }
     }
 }

</script>

<style lang="scss" scoped>

 .mint-swipe{
 height: 200px;

  .mint-swipe-item{
   &:nth-child(1){
       background-color: red;
   }
   &:nth-child(2){
       background-color: cyan;
   }
   &:nth-child(3){
       background-color: hotpink;
   }
    
    img{
        width: 100%;
        height: 100%;
    }
  }
 }

</style>
