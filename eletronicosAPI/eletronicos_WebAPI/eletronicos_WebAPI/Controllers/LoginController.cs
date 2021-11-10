using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using eletronicos_WebAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WallFertas.ViewModels;

namespace eletronicos_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        /// <summary>
        /// Instancia este objeto para que haja a referência aos métodos no repositório
        /// </summary>
        public LoginController()
        {
            usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="login">Objeto login que contém o e-mail e a senha do usuário</param>
        /// <returns>Retorna um token com as informações do usuário</returns>
        /// dominio/api/Login
        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = usuarioRepository.Login(login.Email, login.Senha);

                // Caso não encontre nenhum usuário com o e-mail e senha informados
                if (usuarioBuscado == null)
                {
                    // Retorna NotFound com uma mensagem de erro
                    return NotFound("E-mail ou senha inválidos!");
                }


                var claims = new[]
                {
                    // Armazena na Claim o e-mail do usuário autenticado
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Email, usuarioBuscado.Email),

                    // Armazena na Claim o ID do usuário autenticado
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuarios.ToString()),

                    // Armazena na Claim o tipo de usuário que foi autenticado (Administrador ou Comum)
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTiposUsuario.ToString()),

                    // Armazena na Claim o tipo de usuário que foi autenticado (Administrador ou Comum) de forma personalizada
                    new Claim("role", usuarioBuscado.IdTiposUsuario.ToString()),

                    // Armazena na Claim o nome do usuário que foi autenticado
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Name, usuarioBuscado.NomeCompleto)
                };

                // Define a chave de acesso ao token
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("eletronicos-chave-autenticacao"));

                // Define as credenciais do token - Header
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                // Gera o token
                var token = new JwtSecurityToken(
                    issuer: "eletronicos.WebApi",                 // emissor do token
                    audience: "eletronicos.WebApi",               // destinatário do token
                    claims: claims,                        // dados definidos acima
                    expires: DateTime.Now.AddMinutes(59),  // tempo de expiração
                    signingCredentials: creds              // credenciais do token
                );

                // Retorna Ok com o token
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
