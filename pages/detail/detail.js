// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist:[],
    url:"",
    simg:"",
    songname:'',
    author:'',
    bimg:'',
    percent:10,
    playIndex:0,
    playclass:''
  },
  play:false,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    this.audioCtx = wx.createAudioContext('myAudio')
    wx.getStorage({
      key: 'playlist',
      success: function (res) {
        that.setData({
          url: options.url.replace("http", "https"),
          simg: options.sImg.replace("http", "https"),
          songname: options.name,
          author: options.singer,
          bimg: options.bImg,
          playlist:res.data
        })
      }
    });
  },

  upSong:function(){
    var playIndex=this.data.playIndex-1;
    playIndex = playIndex>0?playIndex:0;
    console.log(this.data.playlist[playIndex]);
    this.setData({
      url: this.data.playlist[playIndex].url.replace("http", "https"),
      simg: this.data.playlist[playIndex].albumpic_small.replace("http", "https"),
      songname: this.data.playlist[playIndex].songname,
      author: this.data.playlist[playIndex].singername,
      bimg: this.data.playlist[playIndex].albumpic_big,
      playIndex: playIndex 
    });
    this.audioCtx.play();
  },
  downSong:function(){
    var playIndex = this.data.playIndex +1;
    playIndex = playIndex > 9 ? 9 : playIndex;
    console.log(this.data.playlist[playIndex]);
    this.setData({
      url: this.data.playlist[playIndex].url.replace("http", "https"),
      simg: this.data.playlist[playIndex].albumpic_small.replace("http", "https"),
      songname: this.data.playlist[playIndex].songname,
      author: this.data.playlist[playIndex].singername,
      bimg: this.data.playlist[playIndex].albumpic_big,
      playIndex: playIndex
    });
    this.audioCtx.play();
  },
  playPause: function (event) {
    console.log(event);
    this.play = !this.play;
    if (this.play) {
      this.audioCtx.play();
      this.setData({
        playclass:'play'
      })
    } else {
      this.audioCtx.pause();
      this.setData({
        playclass: ''
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})