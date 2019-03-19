<template>
    <div>

  <!-- 这是轮播图区域 -->
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index" >
    <!-- 好好了解一下这个v-bind到底有什么用 -->
      <img :src="item.img" alt="">
  </mt-swipe-item>
 
</mt-swipe>

   <!-- 九宫格到6宫格的改造  -->
     <ul class="mui-table-view mui-grid-view mui-grid-9"  >
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                     <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                     <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                  <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                          <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 

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

 .mui-grid-view.mui-grid-9{

   background-color: white;
   border: none;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 14px;
    }
 }
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
     border:none;
}
</style>
