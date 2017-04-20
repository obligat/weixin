//app.js
App({
  onLaunch: function () {

    wx.getSystemInfo({
      success: function (res) {
        wx.setStorageSync('modelMessage',res)
        console.log(wx.getStorageSync('modelMessage'))
      }
    })

    // wx.checkSession({
    //   success: function () {

    //   },
    //   fail: function () {
    //     wx.login({
    //       success: function (e) {
    //         var code = e.code
    //         if (code) {
    //           wx.request({
    //             url: 'https://wwwxinle.cn/wechatapp/get_session.php',
    //             data: {
    //               code: e.code
    //             },
    //             method: 'POST',
    //             header: {
    //               "content-type": "application/x-www-form-urlencoded"
    //             },
    //             success: function (res) {
    //               console.log('cccccccccccccccc ')
    //               console.log(res)
    //               wx.setStorageSync('session_3rd', res.data.session_3rd)
    //             },
    //             fail: function () {
    //               console.log("fail")
    //             }
    //           })

    //         } else {
    //           console.log('获取用户登录态失败！' + res.errMsg)
    //         }
    //       }
    //     })
    //   }
    // })

  },

  getUserInfo: function (cb) {
    var that = this;
    console.log("in app getUserInfo")
    console.log(this.globalData.userInfo)
    console.log(cb)
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: function (e) {
          var code = e.code
          if (code) {
            wx.request({
              url: 'https://wwwxinle.cn/wechatapp/get_session.php',
              data: {
                code: e.code
              },
              method: 'POST',
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              success: function (res) {
                console.log('wx wxgetUserInfo wwww ')

                wx.setStorageSync('session_3rd', res.data.session_3rd)
              },
              fail: function () {
                console.log("fail")
              }
            })

          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }

          wx.getUserInfo({
            success: function (res) {
              console.log('wxgetUserInfo successd........')

              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })

        }
      });

    }

  },

  globalData: {
    hasLogin: false,
    userInfo: null
  }

})