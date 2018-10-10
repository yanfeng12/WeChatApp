// pages/About/Strengths.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '话题详情',
    detail: {},
    hidden: false
  },
  fetchDetail: function (id) {
    var that = this;
    wx.request({
      url: 'http://m.hzyaoyi.cn/wx/guanyu_info.asp',
      data: { id: id },
      success: function (res) {
        console.log(res);
        //res.data[0].created = Util.formatTime(Util.transLocalTime(res.data[0].created));
        that.setData({
          //detail: JSON.parse(decodeURIComponent(JSON.stringify(res.data[0])))
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
    })
    //  <navigator url='Strengths?id={{999}}'>
    //id=999
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