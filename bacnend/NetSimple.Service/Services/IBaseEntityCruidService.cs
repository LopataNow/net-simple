using Microsoft.EntityFrameworkCore;
using NetSimple.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace NetSimple.Service.Services
{
    public interface IBaseEntityCruidService<TEntity> where TEntity : class
    {
        TEntity? GeById(int id);

        TEntity[] GetMany(int from = 0, int to = -1);

        void DeleteById(int id);

        TEntity Update(TEntity entity);

        int GetCount();

        TEntity? Create(TEntity entity);
    }
}
