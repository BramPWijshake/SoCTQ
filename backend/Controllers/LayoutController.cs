using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace KVTQ.Controllers
{
    [Route("/api/StandardLayout")]
    public class StandardLayoutController : ControllerBase
    {
        [HttpGet("/All")]
        public string GetAllLayouts()
        {
            string Slayouts = " ";

            return Slayouts;
        }

        [HttpGet("{id}")]
        public string GetLayout(int id)
        {
            string Slayout = " ";

            return Slayout;
        }
    }

    [Route("/api/GenerateLayout")]
    public class GenerateLayoutController : ControllerBase
    {
        [HttpGet("{type}/{size}")]
        public string GenerateLayout(string type, int id)
        {
            string Glayout = " ";

            return Glayout;
        }
    }
}
