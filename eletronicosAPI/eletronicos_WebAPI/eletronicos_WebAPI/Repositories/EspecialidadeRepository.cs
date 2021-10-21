using eletronicos_WebAPI.Contexts;
using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Repositories
{
    public class EspecialidadeRepository : IEspecialidadeRepository
    {
        /// <summary>
        /// Instânciando a ctx
        /// </summary>
        Eletronicos_CTX ctx = new Eletronicos_CTX();

        /// <summary>
        /// Método de cadastro de especialidades
        /// </summary>
        /// <param name="id">Identificador da especialidade</param>
        /// <param name="especialidadeAtualizada">Nome da entidade usada depois de atualizada</param>
        public void Atualizar(int id, Especialidade especialidadeAtualizada)
        {
            Especialidade especialidadeBuscada = ctx.Especialidades.Find(id);

            if (especialidadeAtualizada.TituloEspecialidade != null)
            {
                especialidadeBuscada.TituloEspecialidade = especialidadeAtualizada.TituloEspecialidade;
            }

            ctx.Especialidades.Update(especialidadeBuscada);

            ctx.SaveChanges();
        }

        /// <summary>
        /// Faz a busca de uma especialidade pelo seu identificador
        /// </summary>
        /// <param name="id">Identificador de uma especialidade</param>
        /// <returns>Objeto buscado pelo identificador com suas informações</returns>
        public Especialidade BuscarPorId(int id)
        {
            return ctx.Especialidades.FirstOrDefault(u => u.IdEspecialidade == id);
        }

        /// <summary>
        /// Faz o cadastro de especialidades
        /// </summary>
        /// <param name="novaEspecialidade">Especialidade cadastrada</param>
        public void Cadastrar(Especialidade novaEspecialidade)
        {
            ctx.Add(novaEspecialidade);

            ctx.SaveChanges();
        }

        /// <summary>
        /// Faz a exclusão de especialidades
        /// </summary>
        /// <param name="id">Identificador da especialidade deletada</param>
        public void Deletar(int id)
        {
            Especialidade especialidadeBuscada = ctx.Especialidades.Find(id);

            ctx.Especialidades.Remove(especialidadeBuscada);

            ctx.SaveChanges();
        }

        /// <summary>
        /// Faz a listagem das especialidades
        /// </summary>
        /// <returns>Especialidades listadas com suas informações</returns>
        public List<Especialidade> Listar()
        {
            return ctx.Especialidades.ToList();
        }
    }
}
