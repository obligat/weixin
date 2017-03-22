//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },


  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {

    } else {

    }
  },


  // getUserInfo: function (cb) {
  //   var that = this;
  //   if (this.globalData.userInfo) {
  //     typeof cb == "function" && cb(this.globalData.userInfo)
  //   } else {
  //     //调用登录接口

  //     wx.login({
  //       success: function (e) {
  //         console.log('wxlogin successd........' + e)
  //         var code = e.code
  //         if (code) {
  //           //发起网络请求
  //           console.log("code" + code)
  //           wx.getUserInfo({
  //             success: function (res) {
  //               console.log('wxgetUserInfo successd........' + res);
  //               var encryptedData = encodeURIComponent(res.encryptedData)
  //             }
  //           })
  //         } else {
  //           console.log('获取用户登录态失败！' + res.errMsg)
  //         }
  //       }
  //     });

  //   }
  // },
  globalData: {
    hasLogin: false,
    userInfo: null
  }

})