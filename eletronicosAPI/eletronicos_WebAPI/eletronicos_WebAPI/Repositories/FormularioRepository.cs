using eletronicos_WebAPI.Contexts;
using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Repositories
{
    //Faz a herança com a interface
    public class FormularioRepository : IFormularioRepository
    {
        //Faz a implementação do context
        Eletronicos_CTX ctx = new Eletronicos_CTX();

        /// <summary>
        /// Faz a atuaização dos formulários
        /// </summary>
        /// <param name="id">Identificador do formulário</param>
        /// <param name="novoFormulario">Formulário atualizado com suas informações</param>
        public void Atualizar(int id, Formulario novoFormulario)
        {
            ctx.Formularios.Update(novoFormulario);
            ctx.SaveChanges();
        }

        /// <summary>
        /// Faz a criação do formulário
        /// </summary>
        /// <param name="formularioCriado">Novo formulário com suas informações</param>
        public void Create(Formulario formularioCriado)
        {
            ctx.Add(formularioCriado);

            ctx.SaveChanges();
        }

        /// <summary>
        /// Faz a listagem dos formulários
        /// </summary>
        /// <returns>Listagem dos formulários com suas informações</returns>
        public List<Formulario> Listar()
        {
            return ctx.Formularios.ToList();
        }
    }
}
