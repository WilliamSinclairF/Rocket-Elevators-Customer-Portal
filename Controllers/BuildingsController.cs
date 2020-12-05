using Customer_Portal.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Customer_Portal.Controllers
{
    public class BuildingsController : Controller
    {
        private readonly ILogger<BuildingsController> _logger;

        public BuildingsController(ILogger<BuildingsController> logger)
        {
            _logger = logger;
        }

        public IActionResult MyBuildings()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
