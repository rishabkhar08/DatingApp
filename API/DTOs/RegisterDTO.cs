using System.ComponentModel.DataAnnotations;

namespace API;

public class RegisterDTO
{

    [Required]
    public string UserName { get; set; }
    
    [Required]
    [StringLength(128,MinimumLength = 8)]
    public string Password { get; set; }
}
