# vue-learning-ptt-ui

调用后端接口，对后端数据进行curd操作

### 项目学习文档
[我的文档地址](doc/项目学习文档.md)

### 技术选型：[文档简单介绍](doc/文档简单介绍.md)
- axios:  0.19.0 [发送请求] 
- element-ui:  2.13.0  [前段界面]
- js-cookie:  2.2.1  [操作cookie]
- mockjs:  1.1.0  [前段测试]
- normalize.css:  8.0.1 
- vee-validate:  3.2.1 [vue 验证框架] 
- vue:  2.5.2 
- vue-router:  3.0.1 [vue 路由]
- vuex:  3.1.2
- promise  

### 常用指令缩理解

- 冒号(:)
    - 冒号(：)是绑定(v-bind)的缩写, :xxx="xx" 相当于给子组件赋值，xxx必须在自主检的prop里面声明

- 艾特（@）
    - 艾特（@）是v-on 的缩写
    
- 井号（#）   
    - 井号（#）v-solt 的缩写

### yarn构建项目：
感觉cnpm还是蛮快的，所以去掉了yarn

### 前段项目一般要做的：
http请求（前后连接）、登录超时操作、路由、全局参数配置

### FAQ：开发过程中常见问题的解答。
- vee-validate 参考别人的是2.2.3，但是现在是3.2.1  用法不知道是不是一样的，[vee-validate参考地址](https://logaretm.github.io/vee-validate/overview.html)


- 完美解决Webstorm不支持nodejs等语法提示和补全
    - 处理[参考地址](https://blog.csdn.net/Dobility/article/details/87563057)

- 引用路径问题：
    - “ ./ ”  点反斜杠引用当前目录下的文件
    - “ ../ ” 点点反斜杠引用其他目录下的文件

- 组件的映入问题
可以直接在<templete>中写组件他会自动引入
