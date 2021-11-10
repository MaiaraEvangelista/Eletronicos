using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using eletronicos_WebAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {
        private IComentarioRepository comentariosRepository { get; set; }
        public ComentarioController()
        {
            comentariosRepository = new ComentarioRepository();
        }

        /// <summary>
        /// Método get para a listagem de todos os comentários de uma loja 
        /// </summary>
        /// <returns>uma lista de comentarios</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(comentariosRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// método uitilizado para postar um comentário
        /// </summary>
        /// <param name="novoComentario">objeto que irá armazenar os dados do comentário</param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(Comentario novoComentario)
        {
            try
            {
                comentariosRepository.Cadastrar(novoComentario);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// deleta um comentário passando um id pela url
        /// </summary>
        /// <param name="id">id do comentário que será excluido</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                comentariosRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
