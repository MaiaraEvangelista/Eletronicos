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
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuariosRepository { get; set; }

        public UsuarioController()
        {
            usuariosRepository = new UsuarioRepository();
        }

        //Listar
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(usuariosRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //Buscar Por Id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método
                return Ok(usuariosRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// método para cadastrar usuário
        /// </summary>
        /// <param name="novoUsuario">objeto que irá armazenar as informações do novo usuário</param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(Usuario novoUsuario)
        {
            try
            {
                usuariosRepository.Cadastrar(novoUsuario);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// método para atualizar o usuário passando seu id pela URL
        /// </summary>
        /// <param name="id">id do usuário que será atualizado</param>
        /// <param name="usuarioAtualizado">objeto que irá armazenar as novas informações do usuário</param>
        /// <returns>StatusCode204- no content</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Usuario usuarioAtualizado)
        {
            try
            {
                usuariosRepository.Atualizar(id, usuarioAtualizado);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Método utilizado para deletar um usuário passando seu id pela URL da requisição
        /// </summary>
        /// <param name="id">id do usuário que será deletado</param>
        /// <returns>statusCode 204 - no content</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                usuariosRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

    }
}
