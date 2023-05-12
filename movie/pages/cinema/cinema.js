// pages/cinema/cinema.js
// longitude: 115.44269, // 地图中心点经度
//       latitude: 33.859165, // 地图中心点纬度
Page({

    /**
     * 页面的初始数据
     */
    data: {
        longitude: 121.90361189682005, // 地图中心点经度
        latitude: 30.879824655726082, // 地图中心点纬度
        scale: '18',
      markers:[{
          iconPath:'../../images/cinema01.png',
          id:0,
          
          longitude: 121.90361189682005, 
          latitude: 30.879824655726082,
          width:50,
          height:50
      }]
    },
    markerTap(){
      wx.openLocation({   //打开微信小程序内部地图
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        name:'木槿校园影院（海事大学店）',
        address:'浦东新区临港新城海港大道1550号大礼堂'
      })
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
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
  
    }
  })