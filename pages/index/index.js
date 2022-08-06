// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: [{
        name: "轮播1",
        id: '1',
        img_url: '../../images/carousel/swiper1.jpg'
      },
      {
        name: "轮播2",
        id: '2',
        img_url: '../../images/carousel/swiper2.png'
      },
      {
        name: "轮播3",
        id: '3',
        img_url: '../../images/carousel/swiper3.png'
      }
    ],
    categoryList: [{
        name: "热销",
        id: 'hot',
        img_url: '../../images/category/hot.gif',
        url: '/pages/goods_list/index',
        open_type: "navigate"
      },
      {
        name: "蔬菜",
        id: 'vegetables',
        img_url: '../../images/category/vegetables.gif',
        url: '/pages/goods_list/index',
        open_type: "navigate"
      },
      {
        name: "水果",
        id: 'fruits',
        img_url: '../../images/category/fruits.png',
        url: '/pages/goods_list/index',
        open_type: "navigate"
      },
      {
        name: "农家购",
        id: 'direct-purchasing',
        img_url: '../../images/category/direct-purchasing.png',
        url: '/pages/goods_list/index',
        open_type: "navigate"
      },
      {
        name: "全部",
        id: 'category',
        img_url: '../../images/category/all.png',
        url: '/pages/category/index',
        open_type: "switchTab"
      }
    ],
    recommendList: [{
        type: "1",
        product_title: {
          name: "热购",
          id: "0",
          img_url: "../../images/snap-up.jpg"
        },
        product_list: [{
            name: "西瓜",
            id: "0",
            img_url: "../../images/goods/xg/1.jpeg"
          },
          {
            name: "西瓜",
            id: "1",
            img_url: "../../images/goods/xg/2.jpeg"
          },
          {
            name: "西瓜",
            id: "2",
            img_url: "../../images/goods/xg/3.jpeg"
          },
          {
            name: "西瓜",
            id: "3",
            img_url: "../../images/goods/xg/4.jpeg"
          },
          {
            name: "西瓜",
            id: "4",
            img_url: "../../images/goods/xg/5.jpeg",
          },
        ]
      },
      {
        type: "2",
        product_title: {
          name: "热购",
          id: "0",
          img_url: "../../images/discounts.png",
        },
        product_list: [{
            name: "蜜瓜0",
            id: "0",
            img_url: "../../images/goods/blm/1.jpeg"
          },
          {
            name: "蜜瓜1",
            id: "1",
            img_url: "../../images/goods/blm/2.jpeg"
          },
          {
            name: "蜜瓜2",
            id: "2",
            img_url: "../../images/goods/blm/3.jpeg"
          },
          {
            name: "蜜瓜3",
            id: "3",
            img_url: "../../images/goods/blm/4.jpeg"
          },
          {
            name: "蜜瓜4",
            id: "4",
            img_url: "../../images/goods/blm/5.jpeg"
          },
        ]
      }
    ],
    choicenessList: [{
        name: "西瓜",
        id: "0",
        price: "19.9",
        unit: "￥",
        img_url: "../../images/goods/xg/1.jpeg"
      },
      {
        name: "波罗蜜",
        id: "0",
        price: "39.9",
        unit: "￥",
        img_url: "../../images/goods/blm/1.jpeg"
      },
      {
        name: "蜜瓜",
        id: "0",
        price: "19.9",
        unit: "￥",
        img_url: "../../images/category/fruits.png"
      },
      {
        name: "蜜瓜",
        id: "0",
        price: "19.9",
        unit: "￥",
        img_url: "../../images/category/fruits.png"
      }
    ]
  },
  onLoad: function (options) {

  }
})