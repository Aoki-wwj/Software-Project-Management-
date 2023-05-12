// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      username:"",
      password:""
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

    },

    //拿到输入的账号密码
    syncUsername(e){
      this.setData({
        username:e.detail.value
      })
    },
    syncPassword(e){
      this.setData({
        password:e.detail.value
      })
    },

    // 点击登录后触发的方法
    login(e){
      //首先拿到账号密码
      var data={
          username:this.data.username,
          password:this.data.password
      }
      //发送请求给服务器
      wx.request({
        url: 'http://localhost:3000/login',
        method:'GET',
        data:data,
        success:function(result){
          if(result.data.code==1){
              wx.showModal({
                  title:result.data.msg,
                  success:function(){
                    //跳转到tabBar里面的页面不能用navigatorTo(能传参)
                    //swithchTab不能传参，引入全局变量
                    wx.switchTab({
                      url: '../myself/myself',
                    })
                  }
              })
              //全局变量key判断有没有登录
              getApp().globalData.key=true;
              getApp().globalData.nickname=result.data.data[0].nickname;
          }else{
              wx.showModal({
                  title:result.data.msg
              })
          }
        },
        fail:function(error){
            console.log(error);
        }
      })
  },

    //去注册页面
    goregister(){
        wx.redirectTo({
          url: '../register/register',
        })
    }
})