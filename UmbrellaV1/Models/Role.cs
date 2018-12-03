using System.ComponentModel.DataAnnotations;

namespace UmbrellaV1.Models
{
    public class Role
    {
        public long RoleId { get; set; }

        [Required]
        public string Description { get; set; }
    }
}