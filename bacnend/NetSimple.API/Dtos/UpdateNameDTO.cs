using System.ComponentModel.DataAnnotations;

namespace NetSimple.API.Dtos
{
    public class UpdateNameDTO
    {
        [Required]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        public string LastName { get; set; } = string.Empty;
    }
}
