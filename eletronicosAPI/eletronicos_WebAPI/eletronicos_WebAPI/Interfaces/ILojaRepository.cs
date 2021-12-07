using eletronicos_WebAPI.Domains;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Interfaces
{
    interface ILojaRepository
    {
        /// <summary>
        /// Faz a listagem das lojas
        /// </summary>
        /// <returns>As lojas listadas com suas informações</returns>
        List<Loja> Listar();

        /// <summary>
        /// Faz a busca das lojas por id
        /// </summary>
        /// <param name="id">Identificador das lojas</param>
        /// <returns>A loja encontrada com seu id, e todas as suas informações</returns>
        Loja BuscarPorId(int id);

        /// <summary>
        /// faz o cadastro de uma nova loja
        /// </summary>
        /// <param name="novaLoja">A loja cadastrada </param>
        void Cadastrar(Loja novaLoja);

        /// <summary>
        /// Faz a atualização da loja
        /// </summary>
        /// <param name="lojaAtualizada">Loja que acaba de ser atualizada</param>
        /// <param name="id">Identificador</param>
        void Atualizar(Loja lojaAtualizada, int id);

        /// <summary>
        /// Faz a exclusão da loja
        /// </summary>
        /// <param name="id">Identificador da loja</param>
        void Deletar(int id);


        void SalvarImagemBd(IFormFile foto, int idLoja);

        void SalvarImagemDir(IFormFile foto, int idLoja);

        string ConsultarImagemBd(int idLoja);

        string consultarImagemDir(int idLoja);

    }
}
