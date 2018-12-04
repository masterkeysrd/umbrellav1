using Newtonsoft.Json;
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

        [JsonIgnore]
        public ICollection<Advertisement> Advertisement { get; set; }

        [JsonIgnore]
        public ICollection<User> User { get; set; }
    }
}
