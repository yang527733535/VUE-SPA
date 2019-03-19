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
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					     <p class="price">
                          市场价：￥<del>{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
                          <span class="now_price">￥{{goodsinfo.sell_price}}</span>
                         </p>
                         <p>购买数量: <numbox ></numbox> </p>
                         <p>
                    <mt-button size="small" type="primary">立即购买</mt-button>
                    <mt-button size="small" type="danger">加入购物车</mt-button>
                         </p>
					</div>
				</div>
			</div>




            	<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					   <p>商品货号:{{goodsinfo.goods_no}}</p>
                       <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
                       <p>上架时间:{{goodsinfo.add_time|dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <div> 
       <mt-button plain  type="primary" size="large" @click="go1(id)" >图文介绍</mt-button></div>
        
       <mt-button plian type="danger" size="large" @click="go2(id)">商品评论</mt-button>
                </div>
			</div>


   </div>
</template>

<script>

import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numberbox.vue'
export default {
    data(){
        return {
            //将路由参数对象中的id挂载到data上，方便后期调用
            id:this.$route.params.id,
            lunbotu:[] ,//轮播图的数据
            goodsinfo:{}
        }
    },
    created(){
        this.getlunbotu();
       this.getGoodsInfo();
    },
    components:{
     swiper,
     numbox
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
        },
        getGoodsInfo(){
             //获取商品的信息
            this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id)
            .then(data=>{
                if(data.body.status===0){
                    this.goodsinfo =data.body.message[0]
                }
            })
        },
        go1(id){
           this.$router.push({name:'jieshao',params:{id}})
        },
        go2(id){
         this.$router.push({name:'pinglun',params:{id}})
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
      .mui-card-footer{
          display: block;
          button{
               margin: 15px 0;
          }
      }
</style>
