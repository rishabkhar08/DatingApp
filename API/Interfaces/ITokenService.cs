using API.Entities;

namespace API;

public interface ITokenService
{
    string CreateTokem(AppUser appUser);
}
