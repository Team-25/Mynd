﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Mynd.Data.Models
{
    [Table("creators")]
    public class Creator
    {
        [Column("email")]
        public string Email { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("role")]
        public string Role { get; set; }

    }
}
