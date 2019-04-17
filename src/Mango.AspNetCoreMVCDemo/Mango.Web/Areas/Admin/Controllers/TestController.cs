using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Mango.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 在区域的控制器中必须要使用Area特性标识为Admin区域中的控制器
    /// </summary>
    [Area("Admin")]
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}