<template>
    <div class="goods-list">
       
  <router-link tag="div" :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in gooslist" :key="item.id">
     <img :src="item.img_url" alt="">
      <h1>{{item.title}}</h1>
      <div class="info">
          <p class="price">
            <span class="now">￥{{item.sell_price}}</span>
            <span class="old">￥{{item.market_price}}</span>
          </p>
          <p class="sell">
              <span>热卖中</span>
              <span>剩{{item.stock_quantity}}件</span>
          </p>
      </div>
  </router-link>

     <mt-button @click="getmore"  type="danger" size='large'>加载更多</mt-button>
    </div>
</template>

<script>
export default {
     data(){
         //data是往自己组件内部，挂载一些私有数据的
         return {
             pageindex:1 , //分页的页数
             gooslist:[]  //存放商品列表的数组
         }
     },
     created(){
         this. getGoodsList()
     },
    methods:{
        getGoodsList(){
            // 获取商品列表
            this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageindex)
            .then(data=>{
                if(data.body.status === 0){
                    // this.gooslist =data.body.message;
                    this.gooslist = this.gooslist.concat(data.body.message)
                }
            })
        },
        getmore(){
            this.pageindex++;
            this. getGoodsList();
        }
    }



        // http://www.liulongbin.top:3005/api/
}
</script>

<style lang="scss" scoped>
    
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img{
                width: 100%;
            }
            h1{
               font-size: 14px;
            }
            .info{
                background-color: #eee;
                  p{
                      margin: 0;
                      padding: 5px;
                  }
                   .price{
                       .now{
                           color: red;
                           font-weight: bold;
                           font-size: 16px;
                       }
                       .old{
                           text-decoration: line-through;
                              font-size: 12px;
                              margin-left: 10px;
                       }
                   }
                   .sell{
                       display: flex;
                       justify-content: space-between;
                       font-size: 13px;
                   }
            }
        }
    }
</style>