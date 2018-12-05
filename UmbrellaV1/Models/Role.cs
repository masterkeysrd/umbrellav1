using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace UmbrellaV1.Models
{
    public partial class Role
    {
        public Role()
        {
            User = new HashSet<User>();
        }

        public long RoleId { get; set; }
        public string Description { get; set; }

        [JsonIgnore]
        public ICollection<User> User { get; set; }
    }
}
