using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Qabristan_BE.Controllers;

[Route("api/{controller}")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    [HttpPost("verifyToken")]
    public async Task<IActionResult> VerifyToken([FromBody] TokenRequest request)
    {
        try
        {
            var decodedToken = await FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(request.Token);
            var uid = decodedToken.Uid; // Firebase UID for the authenticated user
            return Ok(new { message = "User authenticated", uid });
        }
        catch (Exception ex)
        {
            return Unauthorized(new { message = "Invalid token", error = ex.Message });
        }
    }
}

public class TokenRequest
{
    public string Token { get; set; }
}