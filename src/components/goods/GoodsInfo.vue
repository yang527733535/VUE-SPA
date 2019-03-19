<template>
    <div class="goodsinfo-container">

        
 <!-- 商品轮播图区域 -->
     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swiper  :isfull="false" :lunbotuList="lunbotu" ></swiper>
					</div>
				</div>
			</div>




<!-- 商品购买区域 -->
	<div class="mui-card">
				<div class="mui-card-header">商品的名称标题</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					     <p class="price">
                          市场价：￥<del>2399</del>&nbsp;&nbsp;销售价：
                          <span class="now_price">￥2199</span>
                         </p>
                         <p>购买数量:</p>
                         <p>
                    <mt-button size="small" type="primary">立即购买</mt-button>
                    <mt-button size="small" type="danger">加入购物车</mt-button>
                         </p>
					</div>
				</div>
			</div>




            	<div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>


   </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'

export default {
    data(){
        return {
            //将路由参数对象中的id挂载到data上，方便后期调用
            id:this.$route.params.id,
            lunbotu:[] //轮播图的数据
        }
    },
    created(){
        this.getlunbotu()
    },
    components:{
     swiper
    },
    methods:{
        getlunbotu(){
  this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id)
        .then(data=>{
             
            if(data.body.status ===0){
                data.body.message.forEach(i=>{
                    i.img=i.src;
                })
                 this.lunbotu =data.body.message
            }
        })
        }
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
} 
  .now_price{
      color: red;
      font-size: 16px;
      font-weight: bold;
      }
</style>
