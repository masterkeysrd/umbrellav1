using System.ComponentModel.DataAnnotations;

namespace UmbrellaV1.Models
{
    public class User
    {
        public long UserId { get; set; }

        [Required, MinLength(5), MaxLength(20)]
        public string UserName { get; set; }

        [Required, MinLength(8)]
        public string Password { get; set; }

        [Required]
        public string Name { get; set; }

        [Required, EmailAddress]
        public string Mail { get; set; }

        [Required, Phone]
        public string Phone { get; set; }

        [Required, Phone]
        public string Cell { get; set; }

        [Required]
        public string Address { get; set; }

        public Role Role { get; set; }
    }
}