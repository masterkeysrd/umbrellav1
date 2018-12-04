using System;
using System.Collections.Generic;

namespace UmbrellaV1.Models
{
    public partial class User
    {
        public User()
        {
            Advertisement = new HashSet<Advertisement>();
        }

        public long UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Mail { get; set; }
        public string Phone { get; set; }
        public string Cell { get; set; }
        public string Address { get; set; }
        public long RoleId { get; set; }
        public long CityId { get; set; }

        public City City { get; set; }
        public Role Role { get; set; }
        public ICollection<Advertisement> Advertisement { get; set; }
    }
}
