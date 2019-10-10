using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KVTQ.Controllers
{
    [Route("api/v1/layouts")]
    [ApiController]
    public class LayoutController : ControllerBase
    {
        // GET: api/Layout
        [HttpGet]
        public IEnumerable<object> Get()
        {
            string domain = HttpContext.Request.Scheme + "://" + HttpContext.Request.Host.ToString() + HttpContext.Request.Path;
            return new object[] {
                new { id = 1, made = "2019-10-10T11:33:32", size = "4/5", link = domain + "/1" },
                new { id = 2, made = "2019-10-10T11:33:32", size = "5/6", link = domain + "/2" },
            };
        }

        // GET: api/Layout/5
        [HttpGet("{id}", Name = "Get")]
        public IEnumerable<object> Get(int id)
        {
            return new object[] {
                new { id = 1, tile = "Resource", type = "Sheep" },
                new { id = 2, tile = "Harbor", type = "Sheep" },
            };
        }

        // POST: api/Layout
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Layout/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
