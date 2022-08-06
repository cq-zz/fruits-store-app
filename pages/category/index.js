// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryData: [{
        id: '1',
        pid: null,
        name: '蔬菜',
        level: 1,
        icon: '',
        children: [{
            id: '1-1',
            pid: '1',
            name: '叶菜类',
            level: 2,
            icon: '',
            children: [{
                id: '1-1-1',
                pid: '1-1',
                name: '芥菜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-1-2',
                pid: '1-1',
                name: '菠菜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-1-3',
                pid: '1-1',
                name: '香菜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-1-4',
                pid: '1-1',
                name: '茼蒿',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-1-5',
                pid: '1-1',
                name: '苋菜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-1-6',
                pid: '1-1',
                name: '小白菜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-1-7',
                pid: '1-1',
                name: '芹菜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-1-8',
                pid: '1-1',
                name: '空心菜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
            ]
          },
          {
            id: '1-2',
            pid: '1',
            name: '根菜类',
            level: 2,
            icon: '',
            children: [{
                id: '1-2-1',
                pid: '1-2',
                name: '芦笋',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-2-2',
                pid: '1-2',
                name: '茭白',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-2-3',
                pid: '1-2',
                name: '胡萝卜',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-2-4',
                pid: '1-2',
                name: '牛蒡',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-2-5',
                pid: '1-2',
                name: '竹笋',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-2-6',
                pid: '1-2',
                name: '冬笋',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '1-2-7',
                pid: '1-2',
                name: '莴苣',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
            ]
          },
        ]
      },
      {
        id: '2',
        pid: null,
        name: '水果',
        level: 1,
        icon: '',
        children: [{
            id: '2-1',
            pid: '2',
            name: '蔷薇科',
            level: 2,
            icon: '',
            children: [{
                id: '2-1-1',
                pid: '2-1',
                name: '苹果',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '2-1-2',
                pid: '2-1',
                name: '琵琶',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '2-1-3',
                pid: '2-1',
                name: '梨',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '2-1-4',
                pid: '2-1',
                name: '桃',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              }
            ]
          },
          {
            id: '2-2',
            pid: '2',
            name: '茄科',
            level: 2,
            icon: '',
            children: [{
                id: '2-2-1',
                pid: '2-2',
                name: '枸杞',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '2-2-2',
                pid: '2-2',
                name: '圣女果',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              },
              {
                id: '2-2-3',
                pid: '2-2',
                name: '人参果',
                level: 3,
                icon: '../../images/goods/xg/1.jpeg',
              }
            ]
          }
        ]
      }
    ],
    // 左侧类型菜单
    leftMenuData: [],
    // 右侧内容
    rightContentData: [],
    // 当前选中类型
    activeCategory: '',
    // 滚动条位置
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      categoryData
    } = this.data;
    let leftMenuData = [];
    categoryData.forEach(item => leftMenuData.push({
      id: item.id,
      name: item.name
    }));
    this.setData({
      leftMenuData
    })
    this.settingCurContent(categoryData, '蔬菜');
  },
  /**
   * 设置选中项与右侧内容
   * @param {*} data 
   * @param {*} activeName 当前选中类型名称
   */
  settingCurContent: function (data, activeName) {
    let rightContentData = [];
    data.forEach(item => {
      if (item.name === activeName) {
        rightContentData = item?.children;
      }
    });
    this.setData({
      activeCategory: activeName,
      scrollTop: 0,
      rightContentData
    })
  },
  /**
   * 选择类型
   * @param {*} e 
   */
  changeCategory: function(e) {
    const { categoryData } = this.data;
    const { categorytype } = e.currentTarget.dataset;
    this.settingCurContent(categoryData, categorytype);
  }
})