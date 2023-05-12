// pages/myself/myself.js
const app = getApp()
Page({
  data: {
    nickname:"用户名",
    islogin:false
  },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.decide()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      this.decide()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  login(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  logout(){
    this.setData({
        nickname:"用户名",
        islogin:false
    })
    getApp().globalData.nickname="用户名"
    getApp().globalData.key=false
  },

  //封装函数
  decide(){
    if(getApp().globalData.key == true){
        this.setData({
            nickname:getApp().globalData.nickname,
            islogin:true
        })
    }else{
        this.setData({
            nickname:"用户名",
            islogin:false
        })
    }
  },
  indent(){
    wx.navigateTo({
      url:"../indent/indent",
    })
  }
})