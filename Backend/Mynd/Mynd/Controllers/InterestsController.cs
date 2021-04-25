using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mynd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InterestsController : ControllerBase
    {
        
        
        [HttpGet]
        public Dictionary<string, List<string>> getInterests(string category)
        {
            Dictionary<string, List<string>> test = new Dictionary<string, List<string>>();

            List<string> sports = new List<string>();

            test.Add("sports", sports);


            return test;    
        }
    }
}
