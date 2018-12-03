using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UmbrellaV1.Models
{
    public class Advertisement
    {
        public long AdvertisementId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public User user { get; set; }                  
    }
}
