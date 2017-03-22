var sort = require('../../utils/sort')

Page({
    data: {
        courseMessage: []
    },

    onLoad() {
        console.log('onLoad')

        if (wx.getStorageSync('courseMessage')) {
            this.setData({
                courseMessage: wx.getStorageSync('courseMessage')
            })
        } else {

            console.log("not exist")
        }
    },
    onReady: function () {
        console.log("onReady")

    },
    onShow: function () {
        console.log("onShow")

        var userInfo = wx.getStorageSync('userInfo')
        console.log(userInfo)
        var that = this
        if (userInfo) {

            wx.request({
                url: 'https://wwwxinle.cn/schedule.php',
                data: {
                    userName: userInfo.username,
                    userPassword: userInfo.password
                },
                method: 'POST',
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function (res) {
                    var filterResult = sort.filterByWeekNum(res.data.Obj)
                    var sortResult = sort.sortByJT_NO(filterResult)

                    wx.setStorageSync('courseMessage', sort.formatWeek(sortResult))

                    that.setData({
                        courseMessage: wx.getStorageSync('courseMessage')
                    })
                },
                fail: function () {
                    // fail
                },
                complete: function () {
                    // complete
                }
            })

        } else {
            this.setData({
                courseMessage: null    //之前将 courseMessage 设置为 [] 不起作用
            })

        }


    },
    onHide: function () {
        console.log("onHide")
    }
})