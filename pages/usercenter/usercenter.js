// pages/usercenter/usercenter.js

Page({
  data: {
    isValidUsername: false,
    isValidLogin: ""
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    var isValidUsername = this.data.isValidUsername

    if (isValidUsername) {

      wx.request({
        url: 'https://www.corefuture.cn/creatshare_zhxy/user/login.action',
        data: {
          userName: e.detail.value.username,
          userPassword: e.detail.value.password
        },
        method: 'POST',
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (res) {

          wx.setStorageSync('userInfo', {
            username: e.detail.value.username,
            password: e.detail.value.password
          })

          that.setData({
            isValidLogin: res.data.Msg
          })

        },
        fail: function () {
          console.log('fail')
        },
        complete: function () {
        }
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  clearStorage: function () {
    wx.clearStorageSync("courseMessage")
  },

  clearUserStorage: function () {
    wx.clearStorageSync("userInfo")
  },

  bindKeyInput: function (e) {

    if ((/^\d{8}$/g).test(e.detail.value)) {
      this.setData({
        isValidUsername: true
      })
    } else {
      this.setData({
        isValidUsername: false
      })
    }
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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