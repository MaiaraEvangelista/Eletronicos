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
    public class LojaController : ControllerBase
    {
        private ILojaRepository lojaRepository { get; set; }

        public LojaController()
        {
            lojaRepository = new LojaRepository();
        }

        /// <summary>
        /// Faz a listagem das lojas
        /// </summary>
        /// <returns>Retorna a loja listada com suas informações</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(lojaRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Faz a busca pelo identificador da loja
        /// </summary>
        /// <param name="id">Identificador da loja</param>
        /// <returns>Retorna as lojas procuradas pelo seu identificador</returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(lojaRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Faz o cadastro de uma nova loja
        /// </summary>
        /// <param name="novaLoja">Nomenclatura de um cadastro de loja</param>
        /// <returns>Loja cadastrada</returns>
        [HttpPost]
        public IActionResult Post(Loja novaLoja)
        {
            try
            {
                lojaRepository.Cadastrar(novaLoja);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        /// <summary>
        /// Faz a atualização de loja
        /// </summary>
        /// <param name="lojaAtualizada">Nomenclatura de loja atualizada</param>
        /// <param name="id">Identificador da loja</param>
        /// <returns>Loja atualizada com suas informações</returns>
        [HttpPut("{id}")]
        public IActionResult Put(Loja lojaAtualizada, int id)
        {
            try
            {
                lojaRepository.Atualizar(lojaAtualizada, id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Faz a exclusão de uma loja
        /// </summary>
        /// <param name="id">Identificador da loja</param>
        /// <returns>Loja deletada</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                lojaRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
