<template>
    <div class="cmt-container">
        <h3 >发表评论</h3>
        <hr>
        <textarea v-model="msg" placeholder="请输入要BB的内容" maxlength="120" ></textarea>
         <mt-button type="primary" size="large" @click="postComment"  >发表评论</mt-button>
         <div class="cmt-list">
           <div class="cmt-item" v-for="(item,i) in comments"  :key="i">
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
 import { Toast} from 'mint-ui'
export default {
     data(){
         return {
             pageIndex:1, //默认展示第一页数
             comments:[],
             msg:'' //评论输入的内容
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
        },
         postComment(){
   //校验是否为空评论
   if(this.msg.trim().length===0){
       Toast("评论不能为空");
       return
   }
             //发表评论
             //参数1 请求的url地址
             //参数2 提交给服务器的数据对象
             //参数3 定义提交时候，表单中数据的格式 {emulateJSON:true}
             this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,
               { content:this.msg.trim()},{emulateJSON:true}).then(function(data){
                    if(data.body.status===0){
                        //1 拼接处一个评论对象 
                        var cmt={user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()};
                        this.comments.unshift(cmt)
                        this.msg=''
                    }
               })
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
