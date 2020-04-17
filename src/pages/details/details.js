import { Block, View, Image, Navigator, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './details.scss'

@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    goods: {
      id: 1,
      image:
        'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg',
      title: '好喝⾼颜值MEOW莫斯卡托⽓泡葡萄酒甜型⾹槟少⼥粉猫起泡酒酒时浪',
      price: '￥25.00 - ￥88.00',
      detail: '这里是⽓泡葡萄酒详情。'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  addToCart() {
    const self = this
    const num = this.data.num
    let total = this.data.totalNum

    self.setData({
      show: true
    })
    setTimeout(function() {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function() {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
class _C extends Taro.Component {
  config = {}

  render() {
    const { goods, scaleCart, totalNum, hasCarts, show } = this.data
    return (
      <View className="main">
        <View className="goods-box">
          <Image src={goods.image} className="goods-thumb"></Image>
          <Navigator openType="switchTab" url="../cart/cart">
            <View className={'carts-icon ' + (scaleCart ? 'on' : '')}>
              <Image src={require('../../images/cart2.png')}></Image>
              {hasCarts && <Text className="carts-icon-num">{totalNum}</Text>}
            </View>
          </Navigator>
          {show && (
            <Image
              src={require('../../images/cart1.png')}
              className="to-carts-icon"
            ></Image>
          )}
          <View className="goods-title">{goods.title}</View>
          <View className="goods-price">{goods.price}</View>
        </View>
        <View className="goods-operation">
          <Text className="goods-to-cart" onClick={this.addToCart}>
            加入购物车
          </Text>
          <Image
            src={require('../../images/cart1.png')}
            className="goods-cart-img"
            onClick={this.addToCart}
          ></Image>
        </View>
        <View className="goods-tab-box">
          <View className="goods-tab-nav">商品详情</View>
          <Navigator url="../share/share">
            <View className={'carts-share  ' + (scaleCart ? 'on' : '')}>
              <Image
                src={require('../../images/图片.png')}
                className="share"
              ></Image>
            </View>
          </Navigator>
        </View>
      </View>
    )
  }
} // pages/details/details.js

export default _C
