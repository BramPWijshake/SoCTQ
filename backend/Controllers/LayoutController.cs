using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace KVTQ.Controllers
{
    [Route("/api/StandardLayout/All")]
    public class StandardLayoutAllController : ControllerBase
    {
        [HttpGet("")]
        public string GetAllLayouts()
        {
            string Slayouts = "Test All";

            return Slayouts;
        }
    }

    [Route("/api/StandardLayout/Specific")]
    public class StandardLayoutSpecificController : ControllerBase
    {
        [HttpGet("{id}")]
        public string GetLayout(int id)
        {
            string Slayout = "Test Specific";

            return Slayout;
        }
    }

    [Route("/api/GenerateLayout")]
    public class GenerateLayoutController : ControllerBase
    {
        [HttpGet("{type}/{size}")]
        public string GenerateLayout(string type, int id)
        {
            string Glayout = "Test Generate";

            return Glayout;
        }
    }
}
