using System;
using System.Collections.Generic;

namespace UmbrellaV1.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Advertisement = new HashSet<Advertisement>();
        }

        public long CategoryId { get; set; }
        public long SubCategoryId { get; set; }
        public string Description { get; set; }

        public Category Category { get; set; }
        public ICollection<Advertisement> Advertisement { get; set; }
    }
}
