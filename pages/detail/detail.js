// pages/detail/detail.js
Page({
  data: {
    bookDetail: {},
    summary:"",
    image:""
  },
  onLoad: function (options) {
    this.setData({
      bookDetail: {
        title: options.title,
        author: options.author,
        isbn: options.isbn,
        allNum: options.allNum,
        on: options.on,
        press: options.press,
        year: options.year,
        searchId: options.searchId
      }
    })

    var that = this
    if (options.isbn) {
      wx.request({
        url: 'https://api.douban.com/v2/book/isbn/' + options.isbn,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          console.log("douban isbn res : " + res.data.summary)
          that.setData({
           summary:res.data.summary,
           image:res.data.image
          })
  
        },
        fail: function (res) {
          // fail
          console.log("douban isbn fetch fail: " + res.msg)
        },
        complete: function (res) {
          // complete
        }
      })
    }


    console.log("bookDetail " + this.data.bookDetail.title)
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