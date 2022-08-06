// components/GoodsCrad/GoodsCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: {
      type: String,
      value: ''
    },
    id: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: ''
    },
    price: {
      type: Number,
      value: 0
    },
    unit: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCart(e) {
      console.log(e);
    }
  }
})
