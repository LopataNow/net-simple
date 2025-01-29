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
    public class BaseEntityCruidService<TEntity, TContext> : IBaseEntityCruidService<TEntity>
        where TEntity : class
        where TContext : DbContext
    {
        protected readonly TContext dbContext;
        protected readonly DbSet<TEntity> dbSet;

        public BaseEntityCruidService(TContext dbContext)
        {
            this.dbContext = dbContext;
            this.dbSet = dbContext.Set<TEntity>();
        }

        public virtual void DeleteById(int id)
        {
            var entity = GeById(id);
            if (entity == null)
            {
                throw new KeyNotFoundException($"Entity with ID {id} not found.");
            }
            dbSet.Remove(entity);
            dbContext.SaveChanges();
        }

        public virtual TEntity? GeById(int id)
        {
            return dbSet.Find(id);
        }

        public virtual TEntity[] GetMany(int from = 0, int limit = -1)
        {
            if(limit < 0)
            {
                return dbSet.ToArray();
            }

            return dbSet.Skip(from).Take(limit).ToArray();
        }

        public virtual TEntity Update(TEntity entity)
        {
            if (entity == null) throw new ArgumentNullException(nameof(entity));

            dbSet.Attach(entity);
            dbContext.Entry(entity).State = EntityState.Modified;

            dbContext.SaveChanges();

            return entity;
        }

        public virtual int GetCount()
        {
            return dbSet.Count();
        }

        public virtual TEntity? Create(TEntity entity)
        {
            dbSet.Add(entity);

            if (dbContext.SaveChanges() <= 0)
            {
                throw new KeyNotFoundException($"Cant create entity");
            }

            return entity;
        }
    }
}
