# 这是我的第一个项目 基于VUE框架的SPA应用 
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