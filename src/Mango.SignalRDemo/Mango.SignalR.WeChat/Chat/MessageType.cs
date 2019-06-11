using System;

namespace Mango.SignalR.WeChat.Chat
{
    /// <summary>
    /// 消息类型
    /// </summary>
    public enum MessageType
    {
        /// <summary>
        /// 连接消息
        /// </summary>
        Line=1,
        /// <summary>
        /// 文字消息
        /// </summary>
        Text=2,
        /// <summary>
        /// 连接回执消息
        /// </summary>
        LineReceipt = 98,
    }
}
