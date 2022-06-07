using System;
using System.Collections.Generic;

namespace UpmeetEventSystem.Models
{
    public partial class User
    {
        public User()
        {
            Favorites = new HashSet<Favorite>();
        }

        public int UserId { get; set; }
        public string? UserName { get; set; }

        public virtual ICollection<Favorite> Favorites { get; set; }
    }
}
