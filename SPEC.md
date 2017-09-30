> 制定开发代码规范，尽量保持代码风格的一致性，有助于在开发过程中代码的开发与维护，也能够帮助更快的了解项目的整体结构。

**team开发规范如下：**

> javascript部分

**javascript语法**
统一使用最新ES6/7语法来编写代码。

**组件规范**
 * 命名：简单，表意，export出的对象统一使用大驼峰式的命名规则，如：**Input**，**DatePicker**。html中引入的组件标签名的前缀统一使用“**vut-**”，比如： **<vut-button></vut-button>**
* 目录： 待讨论。
* 事件命名：统一使用 “**on-**”前缀，比如： **on-click**。

> CSS部分

**CSS预编译**
待讨论。

**CSS样式名前缀**
统一使用“**vut-**”前缀命名样式名，统一使用“**-**”分割，如： **vut-input-wrap**。

**目录**
待讨论。（规则：一个组件对应一个css文件）

> 其他

**icon图标**
采用阿里免费图标库。

**打包工具**
采用**webpack**编译。


**注：** 组件名称和css样式名前缀"**vut-**"中的v代表vue，u代表ui库，t代表team。