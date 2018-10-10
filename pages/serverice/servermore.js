// pages/serverice/servermore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    hidden: false
  },
  fetchDetail: function (id) {
    var that = this;
    wx.request({
      url: 'http://m.hzyaoyi.cn/wx/fuwu_xinxi.asp',
      data: { id: id },
      success: function (res) {
        console.log(res);
        that.setData({
          detail: res.data[0]
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hidden: false
    });
    this.fetchDetail(options.id);
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