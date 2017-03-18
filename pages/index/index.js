
Page({
    data: {
        open: false,
        content: '未登录'
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

    onLoad() {
        console.log('onLoad')

    }
})