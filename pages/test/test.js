// pages/test/test.js
Page({
  data: {
    imageUrl: [
      'http://dev.wemart.cn/console/images/card/card3.png',
      'http://dev.wemart.cn/console/images/card/card2.png',
      'http://dev.wemart.cn/console/images/card/card1.png',
      'http://dev.wemart.cn/console/images/card/card3.png',
      'http://dev.wemart.cn/console/images/card/card2.png',
      'http://dev.wemart.cn/console/images/card/card1.png'
    ],
    startX: 0,
    endX: 0,
    current: 0,
    animationData: {},
    initPlace: []
  },

  handleTouchMove: function (event) {
    console.log('movinginging....')
    var left = this.data.initPlace[0]
    var margin = this.data.initPlace[1]
    var right = this.data.initPlace[2]
    var startX = this.data.startX
    this.setData({
      endX: event.touches[0].clientX
    })
    var endX = this.data.endX
    var current = this.data.current
    console.log('touch move current' + current)

    if (current > 6) {
      this.setData({
        current: 5
      })
    }
    if (current < 0) {
      this.setData({
        current: 0
      })
    }

    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
    })
    this.animation = animation

    if (endX < startX) {
      console.log(this.data.current)
      if (current == 0) {
        animation.scaleY(1).translateX(left).step()
      } else if (current == 5) {
        animation.scaleY(1.2).translateX(left).step()
      } else {
        animation.scaleY(1).translateX(left * 2).step()
      }
    } if (endX > startX) {
      if (current == 0) {
        animation.scaleY(1.2).translateX(0).step()
      } else {
        animation.scaleY(1).translateX(margin).step()
      }
    }

    this.setData({
      animationData: this.animation.export()
    })
  },
  handleTouchStart: function (event) {


    this.data.startX = event.touches[0].clientX

  },
  handleTouchEnd(event) {
    var current = this.data.current
    var startX = this.data.startX
    var endX = this.data.endX
    var left = this.data.initPlace[0]
    var margin = this.data.initPlace[1]
    var right = this.data.initPlace[2]


    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
    })
    this.animation = animation
    if (endX < startX) {
      animation.scaleY(1.2).translateX(left).step()
    } if (endX > startX) {
      if (current == 1) {
        animation.scaleY(1.2).translateX(0).step()
      } else {
        animation.scaleY(1.2).translateX(left).step()
      }
    }
    this.setData({
      current: endX < startX ? ++current : --current,
      animationData: this.animation
    })
    console.log('touch end current' + this.data.current)
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var modelMessage = wx.getStorageSync('modelMessage')
    var pixelRatio = modelMessage.pixelRatio
    var windowWidth = modelMessage.windowWidth
    var windowHeight = modelMessage.windowHeight
    console.log('windowHeight' + windowHeight + 'windowWidth' + windowWidth)
    var left = -windowWidth * 0.8
    var margin = windowWidth * 0.01
    var right = windowWidth * 0.9
    this.setData({
      initPlace: [left, margin, right]
    })
    console.log(this.data.initPlace)
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