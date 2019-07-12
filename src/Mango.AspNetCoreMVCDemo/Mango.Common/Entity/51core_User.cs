using System;
using System.Data;
using System.ComponentModel.DataAnnotations;

namespace Mango.Common.Entity
{
    public class _51core_User
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        [Key]
        public int? UserId { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 年龄
        /// </summary>
        public int? Age { get; set; }
    }
}
