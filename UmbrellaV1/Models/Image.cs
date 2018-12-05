using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace UmbrellaV1.Models
{
    public partial class Image
    {
        public long ImageId { get; set; }
        public int Secuencial { get; set; }
        public long AdvertisementId { get; set; }
        public string ImageName { get; set; }

        [JsonIgnore]
        public Advertisement Advertisement { get; set; }
    }
}
