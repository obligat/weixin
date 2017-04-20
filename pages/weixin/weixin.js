// pages/weixin/weixin.js

var app = getApp()

Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      console.log("userInfojjjjjjjjjjj")
      console.log(userInfo)
      that.setData({
        userInfo: userInfo
      })
      console.log("userInfo")
      console.log(userInfo)
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})