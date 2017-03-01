Page({
    data: {
        movies: [],
        imgUrls: ['https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2411622136.jpg', 'https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2413341026.jpg', 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2417948347.jpg']
    },
    onLoad() {
        var _this = this
        wx.request({
            url: 'https://api.douban.com/v2/movie/coming_soon',
            data: {},
            header: { 'content-type': 'json' },
            success: function (res) {
                _this.setData({
                    movies: res.data.subjects
                })
            },
            fail: function () {
                console.log('fail')
            },
            complete: function () {
                console.log('complete')
            }
        })

    }
})