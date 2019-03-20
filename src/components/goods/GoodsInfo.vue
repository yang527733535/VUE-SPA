<template>
    <div class="goodsinfo-container">

        <transition
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter"
        >
         <div class="ball" v-show="ballflag"></div>
        </transition>
   
        
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
                         <p>购买数量: <numbox :max="goodsinfo.stock_quantity" @getconut="getSeletedCount" ></numbox> </p>
                         <p>
                    <mt-button size="small" type="primary">立即购买</mt-button>
                  <mt-button size="small" @click='addToshopcar' type="danger">加入购物车</mt-button>
                <!-- 分析 如何实现加入购物车时候，拿到选择的数量 -->
                    <!-- 1 经过分析发现，按钮属于goodsinfo页面，数字属于numberbox组件
                    2 由于涉及到了父子福建的嵌套了，所以，无法直接在goodsinfo页面中获取选中的商品数量 -->
                    <!-- 3 怎么解决 涉及到了子传父  （时间调用机制） -->
                    <!-- 4  事件调用的本质，父向子传递方法， 子调用这个方法，同时把数据当做参数传给这个方法 -->
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
                       <p>上架时间:{{goodsinfo.add_time}}</p>
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
            goodsinfo:{},
            ballflag:false ,//控制小球隐藏和显示的表示
            selecedCount:1  //保存用户选中的商品数量   认为用户买一个
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
        },
        addToshopcar(){
            //添加到购物车
            this.ballflag= ! this.ballflag;
// { id:商品的id，count:购买数量,price:商品价格,selecetd:false }
            //拼接处一个到保存在store中car数组里的商品信息对象
            var goodsinfo={id:this.id,
              count:this.selecedCount,
              price:this.goodsinfo.sell_price,
              selected:true
                          };
         //调用store中的mutations来将商品加入购物车
          this.$store.commit('addToCar',goodsinfo);
            
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            el.style.transform="translate(93px,230px)";
            el.style.transiton="all 1s ease";
            done();
        },
        afterEnter(el){
            this.ballflag =!this.ballflag;
        },
        getSeletedCount(count){
            //当子组件把选中的数量传递给父组件的时候  把选中的值保存到 data上
        this.selecedCount =count;
        console.log(this.selecedCount)
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
      .ball{
          width: 15px;
          height: 15px;
          border-radius:50%;
          background-color: red;
          position: absolute;
          z-index: 999;
          top: 400px;
          left: 146px;
      }
</style>
