using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using eletronicos_WebAPI.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Controllers
{
    //Reposta em json
    [Produces("application/json")]

    //Define a rota
    [Route("api/[controller]")]

    //definindo que é um controlador
    [ApiController]
    public class EspecialidadeController : ControllerBase
    {

        private IEspecialidadeRepository especialidadeRepository { get; set; }

        public EspecialidadeController()
        {
            especialidadeRepository = new EspecialidadeRepository();
        }

        /// <summary>
        /// Faz a listagem das entidades
        /// </summary>
        /// <returns>As entidades com suas informações</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(especialidadeRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Faz a busca de entidades pelo identificador
        /// </summary>
        /// <param name="id">Identificador das entidades</param>
        /// <returns>Entidades buscada com suas informações</returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                return Ok(especialidadeRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Faz o cadastro de especialidade
        /// </summary>
        /// <param name="novaEspecialidade">Especialidade cadastrada</param>
        /// <returns>Especialidade cadastrada</returns>
        [HttpPost]
        public IActionResult Cadastrar(Especialidade novaEspecialidade)
        {
            try
            {
                especialidadeRepository.Cadastrar(novaEspecialidade);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Faz a atualização da especialidade
        /// </summary>
        /// <param name="id">Identificador da especialidade atualizada</param>
        /// <param name="especialidadeAtualizada">Nomenclatura da especialidade atualizada</param>
        /// <returns>A especialidade atualizada com suas informações</returns>
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Especialidade especialidadeAtualizada)
        {
            try
            {
                especialidadeRepository.Atualizar(id, especialidadeAtualizada);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Faz a exclusão das entidades
        /// </summary>
        /// <param name="id">Identificador da especialidade deletada</param>
        /// <returns>A especialidade deletada</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                especialidadeRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
