using System;
using System.Collections.Generic;

namespace UpmeetEventSystem.Models
{
    public partial class Event
    {
        public Event()
        {
            Favorites = new HashSet<Favorite>();
        }

        public int EventId { get; set; }
        public string? EventName { get; set; }
        public DateTime? EventDate { get; set; }
        public string? EventLocation { get; set; }
        public bool? IsFavorite { get; set; }

        public virtual ICollection<Favorite> Favorites { get; set; }
    }
}
