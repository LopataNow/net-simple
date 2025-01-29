using NetSimple.Domain.Entities;
using NetSimple.Infrastructure;
using System.Linq;

namespace NetSimple.Service.Services
{
    public class NameService : BaseEntityCruidService<Name, AppDbContext>, INameService
    {
        public NameService(AppDbContext dbContext) : base(dbContext) { }
    }
}
