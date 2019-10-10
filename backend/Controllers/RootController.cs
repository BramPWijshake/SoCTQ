using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KVTQ.Controllers
{
    [ApiController]
    [Route("api/v1")]
    public class RootController : ControllerBase
    {

        private readonly ILogger<RootController> _logger;

        public RootController(ILogger<RootController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<object> Get()
        {
            string domain = HttpContext.Request.Scheme + "://" + HttpContext.Request.Host.ToString() + HttpContext.Request.Path;
            return new object[] {
                new { href = domain+"/boards", rel = "Boards" },
                new { href = domain+"/layouts", rel = "Layouts" }
            };
        }
    }
}
