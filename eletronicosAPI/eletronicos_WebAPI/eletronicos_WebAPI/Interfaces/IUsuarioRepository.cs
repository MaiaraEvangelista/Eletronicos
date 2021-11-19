using eletronicos_WebAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Lista todos os usuários
        /// </summary>
        /// <returns>Uma lista de usuários</returns>
        List<Usuario> Listar();

        /// <summary>
        /// Busca um usuário através do ID
        /// </summary>
        Usuario BuscarPorId(int id);

        Usuario BuscarPorEmail(string email);

        /// <summary>
        /// Cadastra um novo usuário
        /// </summary>
        void Cadastrar(Usuario novoUsuario);

        /// <summary>
        /// Atualiza um usuário existente
        /// </summary>
        void Atualizar(int id, Usuario usuarioAtualizado);

        /// <summary>
        /// Deleta um usuário 
        /// </summary>
        void Deletar(int id);

        /// <summary>
        /// Valida o usuário
        /// </summary>
        Usuario Login(string email, string senha);

        bool VerificarHashes(string senha, string hash);

        string criptografar(string senha);
    }
}
