// pages/books/books.js
Page({
  data: {
    bookName: "",
    bookMsg: ""
  },

  bindSearchInput(e) {
    this.setData({
      bookName: e.detail.value
    })
  },

  searchBook() {
    var that = this
    var bookName = that.data.bookName
    console.log("bookName " + bookName)
    wx.request({
      url: 'https://libapi.changxiaoyuan.com/index.php?do=search&keyword=' + encodeURIComponent(bookName),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res)
        that.setData({
          bookMsg: res.data
        })

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log("books onLoad" + options.bookName)
    this.setData({
      bookName: options.bookName
    })
    var that = this
    wx.request({
      url: 'https://libapi.changxiaoyuan.com/index.php?do=search&keyword=' + encodeURIComponent(options.bookName),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res)
        that.setData({
          bookMsg: res.data
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
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