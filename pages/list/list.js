Page({
    data: {
        title: "Loading ...",
        list: []
    },
    onLoad(params) {
        const that = this
        wx.request({
            url: 'https://api.douban.com/v2/movie/'+ params.type,
            data: {},
            header: { 'content-type': 'json' },
            success: function (res) {
                that.setData({
                    list: res.data.subjects,
                    title: res.data.title
                })
            }
        })
    }
})