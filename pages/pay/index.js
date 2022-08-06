// pages/pay/index.js
import { requestPayment, showToast } from '../../utils/asyncWx.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cartData: [
      // {
      //   goods_id: '',
      //   goods_name: '波罗蜜(69.9元/500g)，使用有机肥栽培，无农药，产地江苏省盐城市滨海县滨海港镇振东乡扁担港村孟二胖果园',
      //   goods_price: '69.9',
      //   goods_small_pic: '../../images/goods/blm/1.jpeg',
      //   goods_num: '1'
      // },
    ],
    totalPrice: 0, // 总价
    totalNum: 0 // 总数量
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onShow() {
    const address = wx.getStorageSync("address");
    let cartData = wx.getStorageSync("cart") || [];
    cartData = cartData.filter(v => v.checked);

    let totalPrice = 0;
    let totalNum = 0;
    cartData.forEach(item => {
      totalPrice += item.num * item.goods_price;
      totalNum += item.num;
    });
    this.setData({
      address,
      cartData,
      totalPrice,
      totalNum
    });
  },
  // 支付
  async handlePay(e) {
    try {
      const token = wx.getStorageSync('token');
      if (!token) {
        wx.navigateTo({
          url: '/pages/auth/index'
        });
        return;
      }

      // 1 创建订单接口，获取订单编号
      // ...

      // 2 发起支付接口
      // await requestPayment({
      //   timeStamp: '',
      //   nonceStr: '',
      //   package: '',
      //   signType: '',
      //   paySign: ''
      // });

      // 3 查询订单状态
      // ...

      // 4 支付成功跳转到订单页面
      await showToast({ title: "支付成功" });

      // 删除缓存中已经支付的商品
      let newCartData = wx.getStorageSync("cart");
      newCartData = newCartData.filter(v => !v.checked);
      wx.setStorageSync("cart", newCartData);
        
      wx.navigateTo({
        url: "/pages/order/index"
      })
    } catch (err) {
      await showToast({ title: "支付失败" });
      console.log(err)
    }
  }
})