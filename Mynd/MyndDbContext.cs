using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;


namespace Mynd
{
    public class MyndDbContext : DbContext
    {
        public MyndDbContext(DbContextOptions<MyndDbContext> options)
          : base(options)
        {
        }
        public DbSet<Creator> Creators { get; set; }

        public static readonly ILoggerFactory MyLoggerFactory
           = LoggerFactory.Create(builder => { builder.AddConsole(); });

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
           => optionsBuilder.UseLoggerFactory(MyLoggerFactory);

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Creator>(entity =>
            {
                entity.HasKey(x => x.Id);
            });
        }
    }
}
