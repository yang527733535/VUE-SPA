<template>
  <div class="app-container" >

      <!-- 顶部header区域 -->
        <mt-header fixed title="🐱第一个VUE项目😈"></mt-header>

      <!-- 中间路由 router-view 区域 -->

<transition>
 <router-view></router-view>
</transition>

	    

     <!-- 底部 tabber区域 -->
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item " to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters. getAllcount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

<script>


</script>
 
 <style lang="scss" scoped>
 .app-container{
   padding-top: 40px;
	 overflow-x: hidden;
	 padding-bottom: 50px;
 }

 .v-enter{
	 opacity: 0;
	 transform: translateX(100%);
	 position: absolute;
 }

.v-leave-to{
	 opacity: 0;
	 	 transform: translateX(-100%);
			position: absolute;
}

 .v-enter-active,
 .v-leave-active{
	 transition: all 0.5s ease;
 }
 .mint-header{
	 z-index:999;
 }
 </style>
 