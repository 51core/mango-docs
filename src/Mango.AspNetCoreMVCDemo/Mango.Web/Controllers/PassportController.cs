using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Mango.Web.Controllers
{
   
    public class PassportController : Controller
    {
        /// <summary>
        /// 自定义路由
        /// </summary>
        /// <returns></returns>
        [Route("/user/passport/login")]
        public IActionResult Login()
        {
            return View();
        }
        /// <summary>
        /// 自定义路由设置指定参数
        /// </summary>
        /// <param name="tag"></param>
        /// <param name="fromurl"></param>
        /// <returns></returns>
        [Route("/user/passport/register/{tag}/{fromurl}")]
        public IActionResult Register(string tag,string fromurl)
        {
            return View();
        }
    }
}