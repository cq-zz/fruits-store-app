// pages/goods_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodInfo: {
      goods_name: '波罗蜜(69.9元/500g)，使用有机肥栽培，无农药，产地江苏省盐城市滨海县滨海港镇振东乡扁担港村孟二胖果园',
      goods_id: 'blm',
      goods_price: '69.9',
      goods_small_pic: '../../images/goods/blm/1.jpeg',
      goods_pics: [
        {
          p_id: '',
          p_url: '../../images/goods/blm/1.jpeg'
        },
        {
          p_id: '',
          p_url: '../../images/goods/blm/2.jpeg'
        },
        {
          p_id: '',
          p_url: '../../images/goods/blm/3.jpeg'
        },
        {
          p_id: '',
          p_url: '../../images/goods/blm/4.jpeg'
        }
      ],
      goods_comment: [
        {
          comment_id: '',
          comment_name: '孟二胖是肥子',
          comment_content: '非常新鲜，好吃,非常新鲜，好吃非常新鲜，好吃非常新鲜，好吃非常新鲜，好吃非常新鲜，好吃非常新鲜，好吃非常新鲜，好吃非常新鲜，好吃非常新鲜，好吃非常新鲜'
        },
        {
          comment_id: '',
          comment_name: '孟二胖',
          comment_content: '非常新鲜，好吃'
        },
        {
          comment_id: '',
          comment_name: '孟二胖',
          comment_content: '非常新鲜，好吃'
        }
      ]
    }
  },
  GoodsInfo: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.GoodsInfo = this.data.goodInfo;
  },
  /**
   * 预览图片
   * @param {*} e 
   */
  handlePreivew(e) {
    const urls = this.data.goodInfo.goods_pics.map(item => item.p_url);
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
       current,
       urls
     });
  },
  /**
   * 添加到购物车
   * @param {*} e 
   */
  handleAddCart(e) {
    let cart = wx.getStorageSync("cart") || [];
    let index = cart.findIndex(item => item.goods_id === this.data.goodInfo.goods_id);
    if(index===-1){
      // 不存在第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    }else {
      // 已经存在
      cart[index].num++
    }

    wx.setStorageSync("cart", cart);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true // true 防止用户疯狂点击按钮
    })
  }
})