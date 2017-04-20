var sort = require('../../utils/sort')

Page({
    data: {
        courseMessage: null,
        bookName: "",
        userInfo: {}
    },

    bindSearchInput(e) {
        console.log("bindSearchInput" + e.detail.value)
        this.setData({
            bookName: e.detail.value
        })

    },

    searchBook() {
        var bookName = this.data.bookName
        console.log("searchBook" + bookName)
        wx.navigateTo({
            url: '../books/books?bookName=' + bookName,
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })

    },

    onLoad() {
        //     console.log('onLoad')

        //     if (wx.getStorageSync('courseMessage')) {
        //         this.setData({
        //             courseMessage: wx.getStorageSync('courseMessage')
        //         })
        //     } else {

        //         console.log("not exist")
        //     }

        //     var that = this
        //     console.log('**********')
        //     console.log(wx.getStorageSync('session_3rd'))
        //     wx.request({
        //         url: 'https://wwwxinle.cn/wechatapp/register.php',
        //         data: {
        //             id: '02142018',
        //             password: '142018',
        //             session_3rd: wx.getStorageSync('session_3rd')
        //         },
        //         method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        //         header: {
        //             "content-type": "application/x-www-form-urlencoded"
        //         },
        //         success: function (res) {
        //             // success
        //             console.log('index register')
        //             console.log(res)
        //         },
        //         fail: function (res) {
        //             // fail
        //         },
        //         complete: function (res) {
        //             // complete
        //         }
        //     })

        //     // app.getUserInfo(function (userInfo) {
        //     //     that.setData({
        //     //         userInfo: userInfo
        //     //     })
        //     // })
        // },
        // onReady: function () {
        //     console.log("onReady")

    },
    onShow: function () {
        console.log("onShow")

        var userInfo = wx.getStorageSync('userInfo')
        var courseMessage = wx.getStorageSync('courseMessage')
        console.log(userInfo)
        var that = this


        console.log('**********')
        console.log(wx.getStorageSync('session_3rd'))
        wx.request({
            url: 'https://wwwxinle.cn/wechatapp/register.php',
            data: {
                id: '02142018',
                password: '142018',
                session_3rd: wx.getStorageSync('session_3rd')
            },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
                // success
                console.log('index register')
                console.log(res)
                wx.request({
                    url: 'https://wwwxinle.cn/wechatapp/schedule.php',
                    data: {
                        session_3rd: wx.getStorageSync('session_3rd')
                    },
                    method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    }, // 设置请求的 header
                    success: function (res) {
                        console.log(res)
                    },
                    fail: function (res) {
                        // fail
                    },
                    complete: function (res) {
                        // complete
                    }
                })
            },
            fail: function (res) {
                // fail
            },
            complete: function (res) {
                // complete
            }
        })




        // if (courseMessage) {

        // } else if (userInfo) {

        //     wx.request({
        //         url: 'https://wwwxinle.cn/wechatapp/schedule.php',
        //         data: {
        //             session_3rd: wx.getStorageSync('session_3rd')
        //         },
        //         method: 'POST',
        //         header: {
        //             "content-type": "application/x-www-form-urlencoded"
        //         },
        //         success: function (res) {
        //             var filterResult = sort.filterByWeekNum(res.data.Obj)
        //             var sortResult = sort.sortByJT_NO(filterResult)

        //             wx.setStorageSync('courseMessage', sort.formatWeek(sortResult))

        //             that.setData({
        //                 courseMessage: wx.getStorageSync('courseMessage')
        //             })
        //         },
        //         fail: function () {
        //             // fail
        //         },
        //         complete: function () {
        //             // complete
        //         }
        //     })

        // } else {
        //     this.setData({
        //         courseMessage: null    //之前将 courseMessage 设置为 [] 不起作用
        //     })

        // }


    },
    onHide: function () {
        console.log("onHide")
    }
})