using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mynd.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mynd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreatorsController : ControllerBase
    {

        private readonly MyndDbContext _dbContext;

        public CreatorsController(MyndDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("creators")]
        public async Task<List<Creator>> GetCreators()
        {
            var creators = await _dbContext.Creators.ToListAsync();

            return creators;

        }
    }
}
