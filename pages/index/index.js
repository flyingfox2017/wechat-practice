// pages/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "msg":"flyingfox",
    "userInfo":{},
    "isShow":true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {      
    this.getUserInfo();
  },
  getUserInfo(){
    //判断用户是否授权  
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting['scope.userInfo']) {
          //用户已经授权
          this.setData({
            isShow: false
          });
        } else {
          //未授权
          this.setData({
            isShow: true
          });
        }
      }
    });
    wx.getUserInfo({
      success: (data) => {
        this.setData({
          userInfo: data.userInfo
        });
      },
      fail: () => {
        console.log("获取用户数据失败!");
      }
    });
  },
  handleGetUserInfo(data){   
    console.log(data);
    //判断用户点击的是不是允许
    if(data.detail.rawData){
      //用户点击的是允许,
      this.getUserInfo();
    }else{
      //用户点击的是拒绝
      console.log("拒绝");
    }
  },  
  handleClick() {
    wx.navigateTo({
      url: '/pages/list/list'
    });
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