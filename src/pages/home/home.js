import {
  Block,
  View,
  Swiper,
  SwiperItem,
  Image,
  Text,
  Navigator
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './home.scss'

@withWeapp({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg',
      'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg',
      'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800
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
    const { interval, duration, imgUrls } = this.data
    return (
      <View className="main">
        <Swiper
          indicatorDots="true"
          autoplay="true"
          interval={interval}
          duration={duration}
          circular="true"
        >
          {imgUrls.map((item, index) => {
            return (
              <Block key={index}>
                <SwiperItem>
                  <Image
                    src={item}
                    className="slide-image"
                    width="100%"
                  ></Image>
                </SwiperItem>
              </Block>
            )
          })}
        </Swiper>
        <View className="newest">
          <View className="newest-title">
            <Text>最近新品</Text>
          </View>
          <View className="newest-box">
            <View className="newest-list">
              <Navigator url="../details/details">
                <Image src="https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg"></Image>
                <View className="newest-text">
                  <Text>大祥哥起泡酒</Text>
                </View>
                <View className="newest-text">
                  <Text>￥88</Text>
                </View>
              </Navigator>
            </View>
            <View className="newest-list">
              <Navigator url="../details/details">
                <Image src="https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg"></Image>
                <View className="newest-text">
                  <Text>小祥哥挑子酒</Text>
                </View>
                <View className="newest-text">
                  <Text>￥78</Text>
                </View>
              </Navigator>
            </View>
          </View>
        </View>
      </View>
    )
  }
} // pages/home/home.js

export default _C
