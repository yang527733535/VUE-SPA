<template>
    <div class="cmt-container">
        <h3 >发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容" maxlength="120" ></textarea>
         <mt-button type="primary" size="large" >发表评论</mt-button>
         <div class="cmt-list">
           <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
               <div class="cmt-tilte">
                   第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dataFormat}}
               </div>
                <div class="cmt-body">
                 {{item.content}}
                </div>
           </div>     
         </div>

         <mt-button @click="getmore" type="danger" plain size="large" >加载更多</mt-button>
    </div>
</template>

<script>
export default {
     data(){
         return {
             pageIndex:1, //默认展示第一页数
             comments:[]
         }
     },
     created(){
         this.getcomment() //获取评论
        
     },
     methods:{
         getcomment(){
             this.$http.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="
             +this.pageIndex).then(result=>{
                 if(result.body.status===0){
                    //  this.comments=result.body.message
                    //每当获取新评论数据的时候 不要把老数据清空，而是应该老数据拼接新数据
                     this.comments =this.comments.concat(result.body.message)
                 }else{
                     Toast('获取评论失败')
                 }
             })
         },
        getmore(){
       
            this.pageIndex++;
            this.getcomment();
        }
     },
     props:["id"]
}
</script>

<style lang="scss" scoped>

.cmt-container{
h3{
    font-size: 18px;
}
textarea {
   font-size: 14px;
   height: 85px;
   margin: 0;
}
.cmt-list{
    margin:5px 0;
  .cmt-item{
      font-size: 13px;
      .cmt-tilte{
          line-height: 30px;
         background-color: #ccc;
         
         }
     .cmt-body{
         line-height: 35px;
          text-indent: 2em;
    }

  }

}

}
</style>
