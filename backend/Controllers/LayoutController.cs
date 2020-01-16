using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using KVTQ.DAL;


namespace KVTQ.Controllers
{
    [Route("/api/StandardLayout/All")]
    public class StandardLayoutAllController : ControllerBase
    {
        [HttpGet]
        public string GetAllStandardLayouts()
        {
            string Slayouts = "Test All";

            return Slayouts;
        }
    }

    [Route("/api/StandardLayout/Specific")]
    public class StandardLayoutSpecificController : ControllerBase
    {
        [HttpGet("{id}")]
        public string GetStandardLayout(int id)
        {
            LayoutDA layoutDA = new LayoutDA();
            string Slayout;
            try 
            {
                Slayout = layoutDA.getLayout(id);
            }
            catch(Exception e)
            {
                return e.ToString();
            }
            return Slayout;
        }
    }

    [Route("/api/Layout/Filtered")]
    public class LayoutFiltererdController : ControllerBase
    {
        [HttpGet("{name}/{size}/{order}")]
        public string GetFilteredLayouts(string name, int size, string order)
        {
            string Flayout = "Test Filtered";

            return Flayout;
        }
    }

    [Route("/api/Layout/Specific")]
    public class LayoutSpecificController : ControllerBase
    {
        [HttpGet("{id}")]
        public string GetLayout(int id)
        {
            
            string Slayout = "Test Specific";
            if (id == 3)
                return Slayout;
            else
                return "Leuk Geprobeert";
        }
    }

    [Route("/api/Layout/Save")]
    public class LayoutSaveControlller : ControllerBase
    {
        [HttpPost("{json}")]
        public string SaveLayout(string json)
        {
            string confirmed = "false";

            return confirmed;
        }
    }
}
