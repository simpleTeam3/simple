# 开发更新日志
### 2018.07

#### 07.14 by sauce
开发loading圈圈组件，后续开发蒙板和服务调用方式

#### 07.24 by sauce
增加蒙板和全屏显示

#### 07.28 by sauce
loading组件引用与自定义指令调用方式基本完成
待完善：指令方式缺乏样式初始化

#### 07.30 by sauce
loading增加服务调用方法
```
let l = this.$loading({
    attrText : '哈哈',
    fullscreen:true
});
setTimeout(_ => {
    l.close();
})
```

Loading组件完结撒花:clap: