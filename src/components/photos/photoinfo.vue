<template>
    <div class="photoinfo-container">
         <h3>{{photoinfo.title}}</h3>
         <p class="subtitle">
             <span>发表时间{{photoinfo.add_time | dataFormat}}</span>
             <span>点击：{{photoinfo.click}}次</span>
         </p>


     <!-- 缩略图区域 -->

   <!-- 图片内容区域 -->
      <div class="content" v-html="photoinfo.content" > </div>


     <!-- 放置一个现成的评论子组件 -->
         <hr>

        <cmt-box :id="this.id"></cmt-box>
    </div>
</template>

<script>
//1导入评论子组件

import comment from '../subcomponents/comment.vue'
export default {
     data(){
         return{
             id: this.$route.params.id,//从路由中获取到的图片id
             photoinfo:{} //图片详情
         }
     },
     created(){
     this.getPhotoinfo()
     },
     methods:{
         getPhotoinfo(){
             //获取图片的详情 
              this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/'+this.id)
              .then(data=>{
                  if(data.body.status===0){
                   this.photoinfo =data.body.message[0]
                  }
              })
         }
     },
     components:{
         //注册评论子组件
        'cmt-box':  comment
     }
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
     padding: 3px;
     h3{
         color:#26a2ff;
         font-size: 15px;
         text-align: center;
         margin:15px 0;
     }
     .subtitle{
         display: flex;
         justify-content: space-between;
         font-size: 13px;
     }
     .content{
        font-size:13px; 
        line-height:30px;
     }
}
</style>
