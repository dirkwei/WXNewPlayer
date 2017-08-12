//index.js
//获取应用实例
import {getData} from "../../utils/util.js"
var app = getApp()
Page({
  data: {
    showlist:[],
    songlist:[],
    imglist:[],
    slectlist:[
      { name:'欧美',value:3},
      { naem:"流行榜",value:4},
      { name:"内地",value: 5},
      { name: "港台", value: 6},
      { name: "韩国", value: 16},
      { name: "日本", value:17},
      { name: "新歌", value:27},
      { name: "网络歌曲", value:28},
      { name: "音乐人", value:32},
      { name: "K歌金曲", value:36},
      { name: "热门", value:26}
    ],
    isShow:false,
    title:"热门",
    page:1,
    pageNumber:10,
  },
  //事件处理函数
  changeShow:function(){
    this.setData({
      isShow:!this.data.isShow 
    })
  },


  change:function(event){
    var index=event.target.dataset.index;
    var name = event.target.dataset.name;
    var that=this;
    this.setData({
      isShow: !this.data.isShow,
      title:name
    })
    function setData(songlist, imglist){
      that.setData({
        'songlist': songlist,
        "imglist": imglist,
        'showlist': songlist.slice(0, 10)
      })
    };
    getData(setData, index);
  },

  goToListen:function(event){
    console.log(event);
    var index=event.currentTarget.dataset.index;
    var id = event.currentTarget.dataset.songid;
    var url = event.currentTarget.dataset.songurl;
    var time=event.currentTarget.dataset.time;
    var bImg=event.currentTarget.dataset.bimg;
    var sImg=event.currentTarget.dataset.simg;
    var singer=event.currentTarget.dataset.songer;
    var name=event.currentTarget.dataset.name;
    wx.setStorage({
      key: "playlist",
      data: this.data.songlist.slice(index,index+10) 
    })
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id + "&time=" + time + "&bImg=" + bImg + "&sImg=" + sImg + "&singer=" + singer + "&name=" + name +"&url=" + url 
    })
  },

  onReachBottom:function(){
    this.setData({
      page:this.data.page+1,
      showlist: this.data.songlist.slice(0, (this.data.page + 1)*10)
    })
  },
  onLoad: function () {
    var that=this;
    function setData(songlist, imglist){
      that.setData({
        'songlist':songlist,
        "imglist":imglist,
        'showlist':songlist.slice(0,10)
      })
    };
    getData(setData);
  }
})
