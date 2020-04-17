import { View, Icon, Navigator, Image, Text, } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './cart.less'

class Cart extends Taro.Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  state = {
    carts: [
      {
        id: 1,
        title: '好喝⾼颜值MEOW莫斯卡托⽓泡葡萄酒甜型⾹槟少⼥粉猫起泡酒(v1)',
        image:
          'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg',
        num: 3,
        price: '88.00',
        selected: true
      },
      {
        id: 2,
        title: '好喝⾼颜值MEOW莫斯卡托⽓泡葡萄酒甜型⾹槟少⼥粉猫起泡酒(v2)',
        image:
          'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg',
        num: 1,
        price: '188.00',
        selected: true
      },
      {
        id: 3,
        title: '好喝⾼颜值MEOW莫斯卡托⽓泡葡萄酒甜型⾹槟少⼥粉猫起泡酒(v3)',
        image:
          'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg',
        num: 2,
        price: '288.00',
        selected: false
      },
      {
        id: 4,
        title: '好喝⾼颜值MEOW莫斯卡托⽓泡葡萄酒甜型⾹槟少⼥粉猫起泡酒(v4)',
        image:
          'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg',
        num: 2,
        price: '388.00',
        selected: false
      }
    ], // 购物车列表
    hascheckList: [], 
    totalPrice: 0, // 总价，初始为0
    selectAllStatus: true // 全选状态，默认全选
  }

  componentDidShow() {
    const cart = [
      
    ]
    this.setState({
      carts: cart
    })
    this.getTotalPrice();
  }

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.state.carts // 获取购物车列表
    let total = 0
    for (let i = 0; i < carts.length; i++) {
      // 循环列表得到每个数据
      if (carts[i].selected) {
        // 判断选中才会计算价格
        total += carts[i].num * carts[i].price // 所有价格加起来
      }
    }
    this.setState({
      // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    })
  }


  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.state.carts
    let num = carts[index].num
    num = num + 1
    carts[index].num = num
    this.setState({
      carts: carts
    })
    this.getTotalPrice()
  }

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.state.carts
    let num = carts[index].num
    if (num <= 1) {
      return false
    }
    num = num - 1
    carts[index].num = num
    this.setState({
      carts: carts
    })
    this.getTotalPrice()
  }

    /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.state.carts
    carts.splice(index, 1)
    this.setState({
      carts: carts
    })
    if (!carts.length) {
      this.setState({
        hasList: false
      })
    } else {
      this.getTotalPrice()
    }
  }

   /**
   * 当前商品选中事件
   */
  selectList(id,e) {
    const index = e.currentTarget.dataset.index
    let carts = this.state.carts
    // const selected = carts[index].selected
    // carts[index].selected = !selected

    carts.forEach(item => {
      if (id == item.id) {
        item.selected = !item.selected
      }
    })
    // const checkall = this.data.selectAllStatus === true ? false : false
    this.setState({
      carts: carts, 
      // selectAllStatus: false
    })

    const selectAllStatus = carts.every(item => item.selected)
    this.setState({
      selectAllStatus: selectAllStatus
    })
    this.getTotalPrice()
  }

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.state.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.state.carts

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus
    }
    this.setState({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
    this.getTotalPrice()
  }

  // 结算
  closeFun() {
    let list = []
    let listTotal = []
    this.state.carts.map((v, k) => {
      console.log('购物车数据', v)
      if (v.select) {
        list.push(v)
      } else {
        listTotal.push(v)
      }
    })
  }

  render() {
    const { carts, selectAllStatus, totalPrice, hasList } = this.state;
    let count = 0;
    carts.map(it => {
      if(it.selected === true) {
        count++;
      }
    })
    return (
      <View className="main">
        {carts.length > 0 ? (
          <View>
            <View className="cart-box">
              {carts.map((item, index) => {
                return (
                  <View className="cart-list" key={index}>
                    {item.selected ? (
                      <Icon
                        type="success"
                        color="#b30000"
                        data-index={index}
                        className="cart-pro-select"
                        onClick={this.selectList.bind(this,item.id)}
                      ></Icon>
                    ) : (
                      <Icon
                        type="circle"
                        className="cart-pro-select"
                        data-index={index}
                        onClick={this.selectList.bind(this,item.id)}
                      ></Icon>
                    )}
                    <Navigator url={'../details/details?id=' + item.id}>
                      <Image className="cart-thumb" src={item.image}></Image>
                    </Navigator>
                    <Text className="cart-pro-name">{item.title}</Text>
                    <Text className="cart-pro-price">{'￥' + item.price}</Text>
                    <View className="cart-count-box">
                      <Text
                        className="cart-count-down"
                        onClick={this.minusCount}
                        data-index={index}
                      >
                        -
                      </Text>
                      <Text className="cart-count-num">{item.num}</Text>
                      <Text
                        className="cart-count-add"
                        onClick={this.addCount}
                        data-index={index}
                      >
                        +
                      </Text>
                    </View>
                    <Text
                      className="cart-del"
                      onClick={this.deleteList}
                      data-index={index}
                    >
                      删除
                    </Text>
                  </View>
                )
              })}
            </View>
            <View className="cart-footer">
              {selectAllStatus ? (
                <Icon
                  type="success_circle"
                  color="#b30000"
                  className="total-select"
                  onClick={this.selectAll}
                ></Icon>
              ) : (
                <Icon
                  type="circle"
                  color="#b30000"
                  className="total-select"
                  onClick={this.selectAll}
                ></Icon>
              )}
              <Navigator url="../orders/orders">
                <View className="order-icon"></View>
              </Navigator>
              <Text >{count> 0? `已选(${count})`: '全选'}</Text>
              <Text className="cart-toatl-price">{'合计￥' + totalPrice}</Text>
              <Text className="pay" onClick={this.closeFun} data-index={index}>
               立即下单
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <View className="cart-no-data">购物车是空的哦~</View>
          </View>
        )}
      </View>
    )
  }
} 

export default Cart
