using System;
using System.Collections.Generic;
using System.Text;

namespace Mango.SignalR.WeChat.Chat
{
    public class ConnectionUser
    {
        /// <summary>
        /// 用户标识
        /// </summary>
        public string UserId { get; set; }
        /// <summary>
        /// SignalR连接ID
        /// </summary>
        public string ConnectionId { get; set; }
    }
}
