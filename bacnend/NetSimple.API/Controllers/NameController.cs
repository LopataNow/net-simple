using Microsoft.AspNetCore.Mvc;
using NetSimple.API.Dtos;
using NetSimple.API.Presenter;
using NetSimple.Domain.Entities;
using NetSimple.Service.Services;

namespace NetSimple.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NameController : ControllerBase
    {
        INameService nameService;

        public NameController(INameService nameService)
        {
            this.nameService = nameService;
        }

        [HttpGet]
        public PaginatedPresenter<Name> Get([FromQuery] PaginationParameters pagination)
        {
            var data = nameService.GetMany(pagination.From, pagination.To);
            var count = nameService.GetCount();

            return new PaginatedPresenter<Name>
            {
                Data = data,
                TotalCount = count
            };
        }

        [HttpGet("{id}")]
        public Name? Get(int id)
        {
            return nameService.GeById(id);
        }

        [HttpPost]
        public Name? Post([FromBody] CreateNameDTO name)
        {
            return nameService.Create(new Name
            {
                FirstName = name.FirstName,
                LastName = name.LastName
            });
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] UpdateNameDTO name)
        {
            nameService.Update(new Name { 
                FirstName = name.FirstName,
                LastName = name.LastName
            });
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            nameService.DeleteById(id);
        }
    }
}
