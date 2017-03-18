var host = 'https://libapi.changxiaoyuan.com';
var arr = {
    //请求接口（获取新的3rd_session和验证3rd_session）
    loginURI: host + '/index.php?do=user&username=S02142018&password=123456',
    sessionCheckURI: host + '/index.php?do=user&username=S02142018&password=123456'
}
function gets(arg) {
    return arr[arg];
}
module.exports = {
    gets: gets
}