// app.js

App({
  globalData: {
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],
    userInfo: null,
    share: false, // 分享默认为false
    height: 0 // 顶部高度
  },
  // 判断是否由分享进入小程序
  onShow: function(e){
    if (e.scene == 1007 || e.scene == 1008) {
      this.globalData.share = true
    } else {
      this.globalData.share = false
      wx.getSystemInfo({
        success: (res) => {
          this.globalData.height = res.statusBarHeight
        }
      })
    }
  },
})
