using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using eletronicos_WebAPI.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eletronicos_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TiposUsuarioController : ControllerBase
    {
        private ITiposUsuarioRepository tiposUsuarioRepository { get; set; }

        public TiposUsuarioController()
        {
            tiposUsuarioRepository = new TiposUsuarioRepository();
        }

        // GET: api/<TiposUsuarioController>
        /// <summary>
        /// método utilizado para listar os tipos de usuário do banco de dados
        /// </summary>
        /// <returns>StatusCode 200 - ok</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(tiposUsuarioRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        // GET api/<TiposUsuarioController>/5
        /// <summary>
        /// Método utilizado para buscar um tipo de usuário atravez do seu id na URL da requisição  
        /// </summary>
        /// <param name="id">id do tipo de usuário que será utilizado</param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                return Ok(tiposUsuarioRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        // POST api/<TiposUsuarioController>
        /// <summary>
        /// 
        /// </summary>
        /// <param name="novoTipoUsuario"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Cadastrar(TiposUsuario novoTipoUsuario)
        {
            try
            {
                tiposUsuarioRepository.Cadastrar(novoTipoUsuario);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // PUT api/<TiposUsuarioController>/5
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, TiposUsuario tipoUsuarioAtualizado)
        {
            try
            {
                tiposUsuarioRepository.Atualizar(id, tipoUsuarioAtualizado);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE api/<TiposUsuarioController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                // Faz a chamada para o método
                tiposUsuarioRepository.Deletar(id);

                // Retorna um status code
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
