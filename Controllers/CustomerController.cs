using Microsoft.AspNetCore.Mvc;

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
