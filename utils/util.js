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
function getData(cb,index){
  var url ="https://route.showapi.com/213-4";
  var index=index?index:26;
  wx.request({
    "url": url,
    "data":{
      "showapi_appid": 40670,
      "showapi_sign":"f822a3cfb88a44c0bf0ea4255adce981",
      "topid":index
    },
    "header":{
      'content-type': 'application/x-www-form-urlencoded'
    },
    "success": function (res) {
      if (res.data.showapi_res_code==0){
        console.log(res);
        var songlist = res.data.showapi_res_body.pagebean.songlist;
        var imglist = songlist.slice(0,5);
        cb(songlist,imglist);
      }else{
        getData(sonlist, imglist, index);
      }
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getData: getData
}
