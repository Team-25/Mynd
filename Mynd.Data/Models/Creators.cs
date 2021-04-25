using System.ComponentModel.DataAnnotations.Schema;

namespace Mynd.Data.Models
{
    [Table("the_creators")]
    public class Creator
    {
        [Column("id")]
        public long Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("role")]
        public string Role { get; set; }

        [Column("big_pp?")]
        public bool BigPP { get; set; }


    }
}
