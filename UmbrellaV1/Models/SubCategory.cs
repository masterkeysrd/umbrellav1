namespace UmbrellaV1.Models
{
    public class SubCategory
    {
        public int SubCategoryId { get; set; }
        public string Description { get; set; }

        public Category Category { get; set; }
    }
}