using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UmbrellaV1.Models;

namespace UmbrellaV1.Models
{
    public class UmbrellaV1Context : DbContext
    {
        public UmbrellaV1Context (DbContextOptions<UmbrellaV1Context> options)
            : base(options)
        {
        }

        public DbSet<UmbrellaV1.Models.User> User { get; set; }

        public DbSet<UmbrellaV1.Models.Role> Role { get; set; }

        public DbSet<UmbrellaV1.Models.Advertisement> Advertisement { get; set; }
    }
}
