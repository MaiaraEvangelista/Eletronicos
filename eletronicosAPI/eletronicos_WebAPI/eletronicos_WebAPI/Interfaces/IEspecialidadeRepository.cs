using eletronicos_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Interfaces
{
    interface IEspecialidadeRepository
    {

        /// <summary>
        /// Lista todos os tipos de especialidades
        /// </summary>
        List<Especialidade> Listar();

        /// <summary>
        /// Busca um tipo de especialidade através do ID
        /// </summary>
        Especialidade BuscarPorId(int id);

        /// <summary>
        /// Cadastra um novo tipo de especialidade
        /// </summary>
        void Cadastrar(Especialidade novaEspecialidade);

        /// <summary>
        /// Atualiza um tipo de especialidade existente
        /// </summary>

        void Atualizar(int id, Especialidade especialidadeAtualizada);

        /// <summary>
        /// Deleta um tipo de especialidade existente
        /// </summary>
        void Deletar(int id);
    }
}
