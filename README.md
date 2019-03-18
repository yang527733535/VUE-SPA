# 这是我的第一个项目 基于VUE框架的SPA应用  对应的是VUE-电商项目spa

##刚刚学会了git 的使用操作
1.git add
2.git commit -m '提交信息'
3.git push


 ##制作首页APP组件 
 1.完成Header 区域 使用的是 Mint-uI中的header组件
 2.制作底部的tabbar区域，使用的是MUI中的tabbar.html
  + 在制作购物车小图标的时候，操作会多一下
  + 先把扩展图标的CSS样式，拷贝到项目中的CSS文件夹
  + 拷贝 扩展字体库 TTF文件，到项目中
  + 为购物车小图标添加如下样式 mui-icon-extra mui-icon-extra-cart
 3.要在中间区域放置一个router-view来展示路由匹配到的组件

##改造 tabbar 为router-link 

##设置路由高亮 

## 点击tabbar中的路由链接，展示对应的路由组件
+ 我遇到了问题是 路径不能带./ 找了半天

## 加载首页轮播图数据
1. 获取数据 如何获取 使用vue-resource 
2. 使用vue-resource 的this.$http.get获取数据
3. 获取到的数据要保存到 data 身上
4. 使用v-for 循环渲染 每个item 项目 

##改造九宫格 区域的样式 

##改造 新闻资讯路由链接 

##新闻资讯 页面制作 

1.绘制界面 使用 MUI中的  media-list.html
2.使用vue-resource获取数据 
3.选择真是数据


## 实现 新闻资讯列表 点击跳转到新闻详情 
1. 把列表中的每一项 改造为router-link，同时，在跳转的时候应该提供唯一的ID标识符
2. 创建新闻详情的组件页面， NewInfo.vue 
3. 在路由模块中，将新闻详情的 路由地址 和组件页面对应起来


##实现 新闻详情 的页面布局 和数据渲染

## 单独封装一个 comment.vue评论子组件
1. 先创建一个单独的comment.vue组件末班
2. 在先需要comment组件的页面中，先手动导入comment 组件
 + `import comment from './comment.vue`
3. 在父组件中，使用`components`属性，将刚才导入的 comment组件，注册为自己的子组件
4. 将注册子组件时候的，注册名称，以标签形式，在页面中引用即可

## 获取所有的评论数据显示到页面中 


## 实现点击加载更多评论的功能
1. 为加载更过按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让pageindex加一，然后重新调用 this.getcomments()方法重新获取最新一夜的数据
3. 为了防止 新数据 覆盖老数据的情况，我们在点击加载更多的时候，每当获取新数据，应该让老数据调用数组的
concat方法，拼接上新数组