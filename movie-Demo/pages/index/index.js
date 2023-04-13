// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    // 导航头组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '木槿校园', //导航栏 中间的标题
      white: true, // 是就显示白的，不是就显示黑的。
      address: '../../images/index01.png' // 加个背景 不加就是没有
    },
    // 导航头的高度
    height: app.globalData.height * 2 + 20,
    item:0
  },
  changeItem(e){
    this.setData({
     item: e.currentTarget.id
    })
  },
  ying(e){
    wx.navigateTo({
      url: '../ticket/ticket?id='+e.target.dataset.id+'&name='+e.target.dataset.name+'&url='+e.target.dataset.url,
    })
  }
})