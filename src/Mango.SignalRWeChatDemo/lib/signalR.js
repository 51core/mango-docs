var signalR = (function () {
  let recordCode = 0x1e;
  let recordString = String.fromCharCode(recordCode);
  let isConnectioned = false;
  let _events=new Array();
  //初始化相关事件
  //消息发送事件
  _events['send'] = function (obj) {
    console.log(obj);
  };
  //消息接收事件
  _events['receive']=function(message){
    console.log(message);
  };
  //连接事件
  _events['connection']= function () {
    console.log(message);
  };
  //连接关闭事件
  _events['close']= function () {
    console.log('连接已经关闭');
  };
  //连接异常处理事件
  _events['error'] = function (ex) {
    console.log(ex);
  };
  return {
    //事件绑定
    on:function(eventName,eventMethod){
      if (_events[eventName] != null && _events[eventName]!=undefined){
        _events[eventName] = eventMethod;
      }
    },
    //连接方法
    connection: function (url) {
      let self = this;
      wx.connectSocket({
        url: url
      });
      wx.onSocketOpen(function () {
        let handshakeRequest = {
          protocol: 'json',
          version: 1
        };
        let senddata = `${JSON.stringify(handshakeRequest)}${recordString}`;
        self.isConnectioned = true;
        wx.sendSocketMessage({
          data: senddata,
        });
        _events['connection']();
      });
      wx.onSocketClose(function () {
        self.isConnectioned = false;
        _events['close']();
      });
      //接收到消息
      wx.onSocketMessage(function (res) {
        try {
          //console.log(res);
          let jsonstr = String(res.data).replace(recordString, '');
          if (jsonstr.indexOf('{}{') > -1){
            jsonstr = jsonstr.replace('{}', '');
          }
          let obj = JSON.parse(jsonstr);
          //当收到返回消息type=1（调用方法）
          if (obj.type == 1) {
            _events['receive'](obj.arguments[0]);
          }
        } catch (ex) {
          console.log('异常：' + ex);
          console.log('收到服务器内容：' + res.data);
        }
      });
      wx.onSocketError(function (ex) {
        self.isConnectioned = false;
        _events['error'](ex);
      });
    },
    abortConnection: function () {
      console.log(String(this.abortConnection.name));
      wx.closeSocket();
    },
    sendMessage: function (data) {
      let self = this;
      if (!self.isConnectioned) {
        _events['error']('未连接');
        return;
      }
      let args=new Array();
      args.push(data);
      let body = {
        arguments: args,   //SignalR服务端接收时必须为数组参数
        target: 'ServerTransferMessage',        //SignalR端方法
        type: 1,
      };
      //发送的数据，分隔符结尾：
      let senddata = `${JSON.stringify(body)}${recordString}`;
      wx.sendSocketMessage({
        data: senddata,
        success: function(res){
          _events['send'](res);
        },
        fail: function(ex){
          console.log(ex);
        }
      });
    }
  }
});
module.exports = {
  signalR: signalR
}