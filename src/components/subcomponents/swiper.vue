<template>
    <div>
<mt-swipe  :auto="4000">
    <!-- 将来 谁用这个轮播图 组件 谁为我们传递lunbotuList -->
  <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index" >
    <!-- 好好了解一下这个v-bind到底有什么用 -->
      <img :src="item.img"  :class="{full:isfull}"  alt="">
  </mt-swipe-item>
</mt-swipe>

    </div>
</template>

<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>


<style lang="scss" scoped>

 .mint-swipe{
 height: 200px;

  .mint-swipe-item{
     text-align: center;
   
    
    img{
        // width: 100%;
        height: 100%;
    }
  }
 }
 .full{
     width: 100%;
 }

</style>
