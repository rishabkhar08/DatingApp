using System.ComponentModel.DataAnnotations;

namespace API.Entites
{
    public class AppUser
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
    }
}