using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FireSharp.Config;
using FireSharp.Response;
using FireSharp.Interfaces;


namespace Mynd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FirebaseTestController : ControllerBase
    {


        IFirebaseConfig form = new FirebaseConfig();

        [HttpGet("creators")]
        public async Task<List<Creator>> GetCreators(bool PPisBig)
        {

            return null;

        }
    }
}
