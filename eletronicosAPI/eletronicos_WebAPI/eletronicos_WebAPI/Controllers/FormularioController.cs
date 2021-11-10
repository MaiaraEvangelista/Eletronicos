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
    //Define a resposta em json
    [Produces("application/json")]

    //Define a rota
    [Route("api/[controller]")]

    //Define que é um controlador
    [ApiController]
    public class FormularioController : ControllerBase
    {
        //Faz a instanciação da interface e atribuição a nomenclatura
        private IFormularioRepository formulariorepository { get; set; }


        //Faz atribuição do repository
        public FormularioController()
        {
            formulariorepository = new FormularioRepository();
        }

        /// <summary>
        /// Faz a listagem
        /// </summary>
        /// <returns>Lista com os formulários</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(formulariorepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }


        /// <summary>
        /// Faz o cadastro 
        /// </summary>
        /// <param name="formularioCriado"> objeto que irá carregar a descrição do Formulário cadastrado</param>
        /// <returns>Novo formulário com suas informações</returns>
        [HttpPost]
        public IActionResult Cadastrar(Formulario formularioCriado)
        {
            try
            {
                formulariorepository.Create(formularioCriado);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        /// <summary>
        /// Faz atualização
        /// </summary>
        /// <param name="id">Identificador</param>
        /// <param name="novoFormulario">Formulário atualizado</param>
        /// <returns>Formulário atualizado com suas infrmações</returns>
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Formulario novoFormulario)
        {
            try
            {
                formulariorepository.Atualizar(id, novoFormulario);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                formulariorepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
