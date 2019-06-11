using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
namespace Mango.SignalR.WeChat.Chat
{
    public class ChatCore
    {

        /// <summary>
        /// 发送聊天室消息
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="hub"></param>
        public static void SendMessage(ChatHub chatHub, MessageData messageData)
        {
            //
            var sendMsg = JsonConvert.SerializeObject(messageData);
            foreach (ConnectionUser user in ConnectionManager.ConnectionUsers)
            {
                chatHub.Clients.Client(user.ConnectionId).SendAsync("receive", sendMsg);
            }
        }
    }
}
