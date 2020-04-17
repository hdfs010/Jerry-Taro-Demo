import { Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import '@tarojs/async-await'
import withWeapp from '@tarojs/with-weapp'
import './app.scss'

@withWeapp({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = Taro.getStorageSync('logs') || []
    logs.unshift(Date.now())
    Taro.setStorageSync('logs', logs)

    // 登录
    Taro.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    Taro.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          Taro.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
class App extends Taro.Component {
  config = {
    pages: [
      'pages/cart/cart',
      'pages/home/home',
      'pages/index/index',
      'pages/logs/logs',
      
      'pages/classification/classification',
      'pages/details/details',
      'pages/share/share'
    ],
    window: {
      navigationBarTitleText: 'Welcome To Jerry Mall',
      navigationBarBackgroundColor: '#AB956D',
      backgroundColor: '#eeeeee',
      enablePullDownRefresh: true
    },
    tabBar: {
      backgroundColor: '#fff',
      borderStyle: 'black',
      color: '#333',
      selectedColor: '#b30000',
      list: [
        {
          pagePath: 'pages/home/home',
          iconPath: 'images/12.png',
          selectedIconPath: 'images/11.png',
          text: '首页'
        },
        {
          pagePath: 'pages/classification/classification',
          iconPath: 'images/22.png',
          selectedIconPath: 'images/21.png',
          text: '分类'
        },
        {
          pagePath: 'pages/cart/cart',
          iconPath: 'images/32.png',
          selectedIconPath: 'images/31.png',
          text: '购物车'
        },
        {
          pagePath: 'pages/index/index',
          iconPath: 'images/42.png',
          selectedIconPath: 'images/41.png',
          text: '我的'
        }
      ]
    },
    style: 'v2',
    sitemapLocation: 'sitemap.json'
  }

  render() {
    return null
  }
} //app.js

export default App
Taro.render(<App />, document.getElementById('app'))
