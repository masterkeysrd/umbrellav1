using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UmbrellaV1.Models;
using UmbrellaV1.Utils;
using UmbrellaV1.ViewModels;

namespace UmbrellaV1.Controllers
{
    [Route("api/v1/auth")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration configuration;
        private readonly umbrella_v1Context _context;

        public AuthenticationController(IConfiguration configuration, umbrella_v1Context context)
        {
            this.configuration = configuration;
            _context = context;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] UserAuthVM user)
        {
            if (user == null)
            {
                return BadRequest("Solitud del cliente invalida.");
            }

            var userData = _context.User
                .Where(x => x.UserName == user.UserName && x.Password == user.Password)
                .First();

            if (userData != null)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration[ConfigurationConstants.JWT_KEY]));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: configuration[ConfigurationConstants.JWT_ISSUER],
                    audience: configuration[ConfigurationConstants.JWT_ISSUER],
                    claims: new List<Claim>() {
                        new Claim(ClaimTypes.Role, userData.Role.Description),
                        new Claim(ClaimTypes.Name, userData.UserName),
                        new Claim("userId", userData.UserId.ToString())
                    },
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signingCredentials
                    );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}