# 😈这是我的第一个项目 基于VUE框架的SPA应用  对应的是VUE-电商项目spa

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

## 发表评论 
1. 把文本框做双向数据绑定，
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空 则Toast提示用户 内容不能为空
4. 通过VUE-RESOURCE 发送一个请求，把评论内容提交给服务器
5. 当发表评论后，重新刷新列表，查看最新的评论
 + 如果调用getcomments，重新刷新列表的话，可能只能得到最后 最后一页的评论，前几页的评论获取不到，
 + 换一种思路，当评论成功后，在客户端手动拼接一个最新的评论对象，然后调用数组的unshift追加到
 data中的comments的开头，这样就完美实现刷新评论列表的需求

 ## 改造图片分析 按钮为 路由的链接并显示对应组件的页面

 ## 绘制 图片列表 组件页面结构并美化样式
 1. 顶部的滑动条
 2. 制作 底部的图片列表
 
 ### 制作顶部滑动条的坑：
 1. 需要借助MUI中的tab-top-webview-main.html
 2. 需要把slider区域的mui-fullscreen 这个类去掉
 3. 滑动条无法正常的被触发滑动，通过检查官方文档，发现这是一个JS文件，需要被初始化一下
  + 导入MIN.JS
  + 调用官方提供的方式去初始化：
   ```
   mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  ```
 4. 我们在初始化 滑动条的时候，导入了MUI.js报错
  + 经过我们推测 觉得可能是MUi.js用到了那三个东西，但是，webpakc打包好的bundle.js中，默认是启用严格模式的，所以这样就冲突了；
  + 解决方案：1.把MUI.JS中的非严格模式的代码改掉，但是不现实；2. 把webpack打包时候的严格模式禁用
  
5. 无法解决横向滑动问题，有点尴尬
7. 获取所有分类，并渲染分类列表

### 制作图片列表区域
1. 图片列表需要懒加载技术 我们可以使用mint-ui现成的组件 lazy-load
2. 根据'lazy-load'的使用文档 尝试使用
3. 渲染图片列表数据



### 实现了 图片列表的懒加载改造和样式美化

##实现了 点击图片跳转到图片详情页面
1. 在改造li 成 router-link的时候，需要使用tag属性 指定要渲染为 哪种元素

## 实现详情页面的布局和美化，同时 获取数据渲染页面

##实现 图片详情中 缩略图的功能 
1. vue2-preview 这个缩略图插件
2. 获取到所有的图片列表， 然后使用v-for指令渲
3. img属性的class不能去掉
4. 每个图片数据对象中，必须有w和h属性


## 绘制 商品列表 页面基本结构并美化
 经典的两列flex布局

 ## 尝试在手机上去进行项目的预览和测试
 1. 要保证自己的手机可以正常运行
 2. 要保证手机和电脑处以同一个WIFI中
 3. 打开自己的 项目中 package.json 文件 在 dev 脚本中，添加一个 -- host 指令，把当前
 电脑的主机WIFI IP地址为 --host的指令值
 + 怎么查看自己电脑所处WIFI的ID呢 在终端上运行 ifconfig, 查看无线网的IP地址
 

 ##VUEX的使用

  1. 运行 cnpm i vuex -S
  2. 在main.js导入包
  3. 注册vuex在vue中
  4. new Vuex.Store(这个实例里面有两个配置属性 ，一个存数据，一个存方法)
  5. 如果在组件中想要访问全局的公共数据，只能通过this.$store.state.commment_name

  ###总结
  1. state中的数据.不能直接修改，必须通过mutations
  2. 如果组件想要直接从state中获取数据，需要this.$store.state.xxx
  3. 如果组件想要修改数据，必须使用mutations提供的方法，防止公共数据的紊乱，要查的时候好查，
  通过this.$store.commit(方法的名称,参数1,[参数2])
  4. 如果store中的state上的数据，在对外提供的时候，需要包装，那么，推荐使用getters，如果需要
  使用getters，则用this.$store.getters.xxx