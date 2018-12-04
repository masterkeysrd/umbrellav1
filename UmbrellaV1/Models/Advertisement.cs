using System;
using System.Collections.Generic;

namespace UmbrellaV1.Models
{
    public partial class Advertisement
    {
        public long AdvertisementId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public long UserId { get; set; }
        public long CityId { get; set; }
        public DateTime CreatedDate { get; set; }
        public long SubCategoryId { get; set; }

        public City City { get; set; }
        public SubCategory SubCategory { get; set; }
        public User User { get; set; }
    }
}
