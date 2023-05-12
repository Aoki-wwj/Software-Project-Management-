// pages/indent/indent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        arrayList:[]
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
    decide(){
        var that=this;
        wx.request({
            url:'http://localhost:3000/indent',
            method:'GET',
            success:function(result){
                // console.log(result)
                // that.setData(result.data)

                // console.log(that.data) 
                if(result.data.code==1){
                    that.setData({
                        arrayList:result.data.data
                    })
                }else{
                    wx.showModal({
                        title:'没有订单',
                        success:function(){
                            //跳转到tabBar里面的页面不能用navigatorTo(能传参)
                            //swithchTab不能传参，引入全局变量
                            wx.switchTab({
                              url: '../myself/myself',
                            })
                          }
                    })
                }
            },
            fail:function(error){
                console.log(error);
            }
        })
    },
    delete(e){
        let that=this
        // console.log(e.target.dataset.id)
        var data={
            id:e.target.dataset.id
        }
        wx.request({
          
          url: 'http://localhost:3000/delete',
          method:"GET",
          data:data,
          success:function(result){
            if(result.data.code==1){
                that.onShow()
            }else{
                wx.showModal({
                    title:'删除失败'
                })
            }
          },
          fail:function(error){
            console.log(error);
        }
        })
    }
})