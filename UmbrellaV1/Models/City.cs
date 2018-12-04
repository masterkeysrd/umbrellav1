using System;
using System.Collections.Generic;

namespace UmbrellaV1.Models
{
    public partial class City
    {
        public City()
        {
            Advertisement = new HashSet<Advertisement>();
            User = new HashSet<User>();
        }

        public long CityId { get; set; }
        public string Name { get; set; }

        public ICollection<Advertisement> Advertisement { get; set; }
        public ICollection<User> User { get; set; }
    }
}
