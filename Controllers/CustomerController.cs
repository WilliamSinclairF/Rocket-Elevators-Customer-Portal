using Customer_Portal.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Customer_Portal.Controllers
{
    public class CustomerController : Controller
    {

        public IActionResult Information()
        {
            return View();
        }

    }
}
