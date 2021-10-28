using eletronicos_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Interfaces
{
    interface IComentarioRepository
    {
        /// <summary>
        /// Lista todos os tipos de usuários
        /// </summary>
        List<Comentario> Listar();

        /// <summary>
        /// Cadastra um novo tipo de usuário
        /// </summary>
        void Cadastrar(Comentario novoComentario);

        /// <summary>
        /// Deleta um tipo de usuário existente
        /// </summary>
        void Deletar(int id);
    }
}
