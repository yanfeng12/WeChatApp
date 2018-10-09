# WeChatApp
# 微信小程序开发，家政类应用。
## 1.[官方开发文档](https://developers.weixin.qq.com/miniprogram/dev/)
## 2.运行前要保存
## 3.小程序目前video,cavas是原生框架，微信强制要求层别最高，只能在上面覆盖图片、文字和按钮，无法添加render.element,也就是说
## 目前无法使用小程序开发AR类应用。小游戏应该可以，但是需要软著。
## 4.小程序结构类似webpack，只是不需要指定入口文件，app.json中在 pages 字段的第一个页面就是这个小程序的首页（打开小程序看到的第一个页面）。
## 5.每一个小程序页面也可以使用.json文件来对本页面的窗口表现进行配置。页面的配置只能设置 app.json 中部分 window 配置项的内容，
## 页面中配置项会覆盖 app.json 的 window 中相同的配置项。
## 