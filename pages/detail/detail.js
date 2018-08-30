// pages/detail/detail.js
let datas = require("../../datas/list-data.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailArr:[],
    index: null,
    isCollected:false
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index;
    this.setData({
      detailArr: datas.list_data[index],
      index // k-v同名可以不用写.
    });
    //页面加载的时候,读取缓存数据,这是为了处理第一次进入该页面的时候,页面本身是没有任何缓存的.
    //在这里就给缓存赋值为空. 后面点击事件里读取缓存的时候就不会失败了.
    wx.getStorage({
      key:'isCollected',
      success:(storageDatas)=>{
        console.log(storageDatas);
        if (storageDatas.data[index]){
          this.setData({
            isCollected: true
          });
        }else{
          this.setData({
            isCollected: false
          });
        }    
      },
      fail:()=>{
        wx.setStorage({
          key: 'isCollected',
          data: {}
        });
      }
    });   
  },
  handleCollection(){
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    });
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success' 
    });
    //缓存数据到本地
    let {index} = this.data;    
    wx.getStorage({
      key:'isCollected',
      success:(storageData)=>{      
        let obj = storageData.data;        
        obj[index] = isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          sucess: () => {
            console.log("缓存数据成功");
          }
        });
      }
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