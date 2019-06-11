//index.js
///引入这个类库
var signalR = require('../../lib/signalR.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '微信连接SignalR的Demo'
  },
  onLoad: function () {
    //测试WebSocket
    ///实例化一个对象
    let _signalR = new signalR.signalR();
    _signalR.on("receive", function (message) {
      console.log('服务器返回消息回调方法:' + message);
    });
    _signalR.on("connection", function () {
      //消息格式
      var msg = {
        messageType: 1,//消息类型 1.发送连接消息 2.普通内容消息 98.连接回执消息
        sendUserId: '1',//消息发送人(登录用户ID)
        messageBody: 'online'//消息内容
      };
      _signalR.sendMessage(JSON.stringify(msg));
    });
    _signalR.connection('wss://123.51core.net/ChatHub');
  }
})
