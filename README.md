# Jerry-Taro-Demo
Taro 实现的小程序商城的购物车功能、小程序分享图片功能
 
##检查本地电脑taro的版本，电脑需要和项目的taro版本号相同，否则发送编译错误，该项目的taro CLI版本为v2.1.1


##如果因taro 版本不对应出现编译错误，官方提供的两个解决方案：
##1、	对电脑的taro进行升级
## taro
##$ taro update self [version]
## npm
##npm i -g @tarojs/cli@[version]
## yarn
##yarn global add @tarojs/cli@[version]

##2、	对项目的taro进行升级
##$ taro update project [version]
##version 为选填，如：1.x.x/latest 等，将会直接更新到指定版本

1、安装依赖
# 使用 yarn 安装依赖
$ yarn
# OR 使用 cnpm 安装依赖
$ cnpm install
# OR 使用 npm 安装依赖
$ npm install
   2、启动项目
taro build --type weapp --watch
编译完成使用微信开发者工具打开dist文件即可
