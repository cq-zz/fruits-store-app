// pages/cart/index.js
import {
  getSetting,
  chooseAddress,
  openSetting,
  showModal,
  showToast
} from '../../utils/asyncWx.js';

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
    allChecked: false, // 全选
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
    const cartData = wx.getStorageSync("cart") || [];
    this.setCart(cartData);
    this.setData({
      address
    })
  },
  // 获取收货地址
  async handleChooseAddress() {
    try {
      const res1 = await getSetting();
      const scopeAddress = res1.authSetting["scope.address"];
      if (scopeAddress === false) {
        await openSetting();
      }
      let address = await chooseAddress();
      address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
      wx.setStorageSync("address", address);

    } catch (error) {
      console.log(error);
    }
  },
  // 商品选中事件
  handleItemChange(e) {
    const goods_id = e.currentTarget.dataset.id;
    let {
      cartData
    } = this.data;
    let index = cartData.findIndex(v => v.goods_id === goods_id);
    cartData[index].checked = !cartData[index].checked;
    this.setCart(cartData);
  },
  // 设置购物车状态
  setCart(cartData) {
    let allChecked = true;
    let totalPrice = 0;
    let totalNum = 0;
    cartData.forEach(item => {
      if (item.checked) {
        totalPrice += item.num * item.goods_price;
        totalNum += item.num;
      } else {
        allChecked = false;
      }
    });
    allChecked = cartData.length !== 0 ? allChecked : false;
    this.setData({
      cartData,
      allChecked,
      totalPrice,
      totalNum
    })
    wx.setStorageSync("cart", cartData);
  },
  // 商品全选/反选
  handleItemAllCheck(e) {
    let {
      cartData,
      allChecked
    } = this.data;
    allChecked = !allChecked;
    cartData.forEach(v => v.checked = allChecked);
    this.setCart(cartData);
  },
  // 商品数量编辑
  async handleItemNumEdit(e) {
    const { operation, id } = e.currentTarget.dataset;
    let { cartData } = this.data;
    const index = cartData.findIndex(v => v.goods_id === id);
    if (cartData[index].num === 1 && operation === -1) {
      const res = await showModal({
        content: '您是否要删除？'
      })
      if (res.confirm) {
        cartData.splice(index, 1);
        this.setCart(cartData);
      }
    } else {
      cartData[index].num += operation;
      this.setCart(cartData);
    }
  },
  async handlePay(e) {
    const { address, totalNum } = this.data;
    if(!address.userName) {
      await showToast({ title: "您还没有选择收货地址！" });
      return;
    }

    if(totalNum === 0) {
      await showToast({ title: "您还没有选购商品！" });
      return;
    }

    wx.navigateTo({
      url: '/pages/pay/index',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
})