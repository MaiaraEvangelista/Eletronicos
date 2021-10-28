using eletronicos_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Interfaces
{
    interface IFormularioRepository
    {
        /// <summary>
        /// Faz a atualização dos formulários existentes
        /// </summary>
        /// <param name="id">Identificador do formulário</param>
        /// <param name="novoFormulario">Formulário atualizado com suas informações</param>
        void Atualizar(int id, Formulario novoFormulario);

        /// <summary>
        /// Faz o cadastro de um formulário
        /// </summary>
        /// <param name="formularioCriado">Novo formulário criado com suas informações</param>
        void Create(Formulario formularioCriado);

        /// <summary>
        /// Faz a listagem dos formulários
        /// </summary>
        /// <returns>Lista dos formulários com suas informações</returns>
        List<Formulario> Listar();
    }
}
