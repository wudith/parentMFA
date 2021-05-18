# parentMFA
基于single-spa配置的angular9主应用


## 
* 主应用：parentMFA，监听端口4202，基于single-spa配置的angular9主应用
* 子应用：childMFA，监听端口4200，基于纯angular配置的angular9子应用



## 运行步骤：

* npm install
* npm run start



## 运行效果：

在子应用加载时，浏览器console报以下错误：

main-es2015.2595739ad5e506470d3e.js:118 ERROR Error: Expected to not be in Angular Zone, but it is!

![Image text](https://github.com/wudith/parentMFA/blob/main/error.PNG)
