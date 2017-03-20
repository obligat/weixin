var sort = require('../../utils/sort')

Page({
    data: {
        open: false,
        content: '未登录',
        courseMessage: []
    },
    tap_ch: function (e) {
        if (this.data.open) {
            this.setData({
                open: false
            });
        } else {
            this.setData({
                open: true
            });
        }
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)

        var that = this

        wx.request({
            url: 'https://wwwxinle.cn/schedule.php',
            data: {
                userName: e.detail.value.username,
                userPassword: e.detail.value.password
            },
            method: 'POST',
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                console.log(res)
                var filterResult = sort.filterByWeekNum(res.data.Obj)
                var sortResult = sort.sortByJT_NO(filterResult)
                wx.setStorageSync('courseMessage', sort.formatWeek(sortResult))
                wx.setStorageSync('userCourse', {
                    username: e.detail.value.username,
                    password: e.detail.value.password
                }
                )
                that.setData({
                    courseMessage: wx.getStorageSync('courseMessage')
                })
            },
            fail: function () {
                console.log('fail')
            },
            complete: function () {
            }
        })
    },
    formReset: function () {
        console.log('form发生了reset事件')
    },

    clearStorage: function () {
        wx.clearStorageSync("courseMessage")
        this.setData({
            courseMessage: null
        })
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
    }
})