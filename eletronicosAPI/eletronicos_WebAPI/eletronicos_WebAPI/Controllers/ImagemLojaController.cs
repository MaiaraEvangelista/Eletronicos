using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using eletronicos_WebAPI.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagemLojaController : ControllerBase
    {
        private ILojaRepository _lojaRepository { get; set; }

        public ImagemLojaController()
        {
            _lojaRepository = new LojaRepository();
        }

        [Authorize(Roles = "1,2")]
        [HttpPost("imagem/bd")]
        public IActionResult PostBD(IFormFile arquivo)
        {
            try
            {
                if (arquivo.Length > 5000) //5MB
                    return BadRequest(new { mensagem = "o tamanho do arquivo é excedeu o limete(5MB)." });

                string extensao = arquivo.FileName.Split('.').Last();
                if (extensao != "png")
                    return BadRequest(new { mensagem = "Apenas arquivos PNG são Permitidos" });

                //int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(u => u.Type ==
                //JwtRegisteredClaimNames.Jti).Value);

                ImagemLoja id = new ImagemLoja(); 

                _lojaRepository.SalvarImagemBd(arquivo, idLoja);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("imagem/bd")]
        public IActionResult GetId()
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(u => u.Type ==
                JwtRegisteredClaimNames.Jti).Value);

                string base64 = _lojaRepository.ConsultarImagemBd(idUsuario);

                return Ok(base64);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
