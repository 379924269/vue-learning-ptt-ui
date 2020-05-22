## vue代码的命名规范

1. 命名的方法有
    * PascalBase（帕斯卡命名法），首字母大写如：
        * public void DisplayInfo();
        * string UserName;
        
    * camelCase（驼峰命名法），如：
        * printEmployeePaychecks() 
    * kebab-case（短横线）,如：
        * post-title


### *.js文件命名规范

- 属于类的.js文件，除index.js外，使用PascalBase风格

- 其它类型的.js文件，使用kebab-case风格

- 属于api(应用程序接口)的，统一加上api后缀

### *.vue文件命名规范
- 除index.vue之外，其它.vue文件统一用PascalBase风格

### *scss/*.css/*
- 统一使用kebab-case命名风格

### vue，js的变量、方法用驼峰命名方式如：
- onSelectChange(currentData)

###  所有文件夹用kebab-case风格
