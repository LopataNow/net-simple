using Microsoft.EntityFrameworkCore;
using NetSimple.Domain.Entities;


namespace NetSimple.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Name> Names { get; set; }
    }
}
