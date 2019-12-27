# vue-learning-ptt-ui

### 项目简介：用一两句话简单描述该项目所实现的业务功能
调用后端接口，对后端数据进行curd操作

### 技术选型：列出项目的技术栈，包括语言、框架和中间件等
* Vue.js + Element-ui
* Vuex 

* vue参考地址：https://cn.vuejs.org/v2/api
* Element参考地址：https://element.eleme.cn/#/zh-CN/component/installation
* Vuex参考地址：https://vuex.vuejs.org/zh/guide/

### 本地构建：列出本地开发过程中所用到的工具命令；
* yarn构建项目：
因为yarn速度开，且有本地缓存，只需要下载一次就可以在本地拉取了。

* vue中映入element引入命令，在项目目录下输入命令：
  ~~~~
  yarn add element-ui --save
  ~~~~
然后在main.js 中写入以下内容：
  ~~~~
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  ~~~~
  
* 引入js-cookie
~~~~
yarn add js-cookie
~~~~

* 引入vuex
~~~~
yarn add vuex
~~~~

* 引入axios
~~~~
yarn add axios
~~~~

* yarn

```
yarn add vee-validate
```




领域模型：核心的领域概念，比如对于示例电商系统来说有Order、Product等；

测试策略：自动化测试如何分类，哪些必须写测试，哪些没有必要写测试；

技术架构：技术架构图；

部署架构：部署架构图；

外部依赖：项目运行时所依赖的外部集成方，比如订单系统会依赖于会员系统；

环境信息：各个环境的访问方式，数据库连接等；

编码实践：统一的编码实践，比如异常处理原则、分页封装等；

### FAQ：开发过程中常见问题的解答。

* 不，了解es2015，参考地址：
https://babeljs.io/docs/en/learn

* 注意库要提前import引入，不然编写代码没有提示, 引入前用yard add libxxx  

* vee-validate 参考别人的是2.2.3，但是现在是3.2.1  用法不知道是不是一样的，需要看看(https://logaretm.github.io/vee-validate/overview.html)。
