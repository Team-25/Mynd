using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;


namespace Mynd.Data.Models
{
    public class MyndDbContext : DbContext
    {
        public MyndDbContext(DbContextOptions<MyndDbContext> options)
          : base(options)
        {
        }


    }
}
