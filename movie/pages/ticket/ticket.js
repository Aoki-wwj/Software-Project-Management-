// pages/ticket/ticket.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:"",
        name:"",
        url:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id:options.id,
            name:options.name,
            url:options.url
        })
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
    gopiao(){
        var data={
            id:this.data.id,
            name:this.data.name
        }
        wx.request({
          url: 'http://localhost:3000/piao',
          method:'GET',
          data:data,
          success:function(result){
            if(result.data.code==1){
                wx.showModal({
                    title:result.data.msg
                })
            }else{
                wx.showModal({
                    title:"购票失败"
                })
            }
          }
        })
    }
})