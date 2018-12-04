using System;
using System.Collections.Generic;

namespace UmbrellaV1.Models
{
    public partial class Category
    {
        public Category()
        {
            SubCategory = new HashSet<SubCategory>();
        }

        public long CategoryId { get; set; }
        public string Description { get; set; }

        public ICollection<SubCategory> SubCategory { get; set; }
    }
}
