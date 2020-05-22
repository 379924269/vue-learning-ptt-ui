## vue-learning-ptt-ui
通过vue.js + element-ui实现前端的一些通用的功能。  

### 项目相关文档
* [本项目所有技术参考文档](./doc/TECHNOLOGY_INTRODUCTION.md)  
* [vue中的名称规则](doc/NAME_SPECIFICATION.md)
* [前端技术推荐](./doc/TECHNICAL_RECOMMDENDATION.md) 

* [基础技术推荐](./doc/BASIC_TECHNOLOGY.md)看看

### vue常用验证参考
* [vuejs 简单的官方验证](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)
* [elementui form 验证](https://element.eleme.cn/#/zh-CN/component/form)

    * [1、常见自定义验证信息参考](https://www.jianshu.com/p/8f1f8b5aa8a1)看看
    * [2、常见自定义验证信息参考](https://www.cnblogs.com/wgy0528/p/11866000.html)
    * [3、常见自定义验证信息参考](https://www.cnblogs.com/lieone/p/11856330.html)
  
### 项目的工作原理参考
* [guide](http://vuejs-templates.github.io/webpack/)
* [docs for vue-loader](http://vuejs.github.io/vue-loader)  
  
   
### 参考的github项目 
* [参考项目1](https://github.com/PanJiaChen/vue-element-admin.git)
* [参考项目2](https://github.com/ggwork/book.git)


### 技术选型：
* axios:  0.19.0 [发送请求] 
* element-ui:  2.13.0  [前段界面]
* js-cookie:  2.2.1  [操作cookie]
* mockjs:  1.1.0  [前段测试]
* normalize.css:  8.0.1 
* vee-validate:  3.2.1 [vue 验证框架] 
* vue:  2.5.2 
* vue-router:  3.0.1 [vue 路由]
* vuex:  3.1.2
* promise  
  
### 项目构建

### 注意:
#### 这些属性的定义、用法、写法：
name、data、props、method等很多属性，要了解，干什么用的
````
export default {
  name: 'Layout',
  data () {
    return {
      tableData: Array(20).fill(this.item)
    }
  },
  props: {
  }
}
````

#### 主键（component）调用

### FAQ：
1、[Node中没搞明白require和import，你会被坑的很惨](https://imweb.io/topic/582293894067ce9726778be9)
