function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function toThousands(num) {
    return (num || "").replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}


var cfg_js=require('cfg.js');
//用户登录
function getNewSession(saveSesionOk){
    wx.login({
      success: function(res) {
          wx.request({
            url: cfg_js.gets('loginURI'),
            data: {code: res.code},
            success: function(res){
                var new_session=res.data.session;
                wx.setStorage({
                  key:"session",
                  data:new_session,
                  success:function(res){
                      saveSesionOk(res)
                  }
                })
            }
          })
      }
    });
}
//set本地存储
function setStrg(key,value,success){
  wx.setStorage({
    key:key,
    data:value,
    success: function(res){
      success(res)
    }
  })
}
//get本地存储
function getStrg(key,success,fail){
  wx.getStorage({
    key: key,
    success: function(res){
      success(res)
    },
    fail: function(res) {
      fail(res)
    }
  })
}
//封装post请求
function post(url,data,success){
   wx.request({
        url: url,
        data:data,
        method: 'POST',
        header: {'content-type': 'application/x-www-form-urlencoded'},
        success: function(res) {
          success(res)
        }
    })
}
//封装get请求
function got(url,data,success){
   wx.request({
        url: url,
        data:data,
        header: {'content-type': 'application/json'},
        success: function(res) {
          success(res)
        }
    })
}
//3rd_session检测
function sessionCheck(session,success){
    //0代表不合法，1代表ok
    var url= cfg_js.gets('sessionCheckURI')+"&session="+session;
    post(url,{},function(res){
        success(res)
    })
}
//第一次验证。一般情况下，登录只需要在程序开始的第页面验证一次就好
function firstReqest(sessionCheckOk){
        // ---------------------------------验证登录开始------------------------------
        getStrg("session",function(res){
          //获取本地seesin成功
            var session=res.data;
            sessionCheck(session,function(res){
                 var status=res.data;
                 status=1;//假设验证成功（本地的3rd_session和服务器的3rd_session一致）
                //与后台匹配失败
                if(status==0){
                      //重新登录
                      getNewSession(function(res){
                          getStrg("session",function(res){
                              //获取本地session成功
                                var session=res.data;
                                sessionCheckOk(session)
                          },null)
                      })
                }else{
                  sessionCheckOk(session)
                }
            })
        },function(res){
          //获取本地seesin失败
             getNewSession(function(res){
                  getStrg("session",function(res){
                        var session=res.data;
                        sessionCheckOk(session)
                  },null)
              })
        })
        // ---------------------------------结束---------------------------
}
module.exports = {
  getNewSession: getNewSession,
  setStrg:setStrg,
  getStrg:getStrg,
  post:post,
  got:got,
  sessionCheck:sessionCheck,
  firstReqest:firstReqest
}
