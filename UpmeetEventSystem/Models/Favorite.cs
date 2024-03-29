﻿using System;
using System.Collections.Generic;

namespace UpmeetEventSystem.Models
{
    public partial class Favorite
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? EventId { get; set; }

        public virtual Event? Event { get; set; }
        public virtual User? User { get; set; }
    }
}
