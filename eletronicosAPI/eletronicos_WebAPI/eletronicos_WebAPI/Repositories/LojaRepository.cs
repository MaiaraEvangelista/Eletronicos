using eletronicos_WebAPI.Contexts;
using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Repositories
{
    //método de herança da interface com seus métodos
    public class LojaRepository : ILojaRepository
    {
        Eletronicos_CTX ctx = new Eletronicos_CTX();

        /// <summary>
        /// Faz a atualização das lojas
        /// </summary>
        /// <param name="lojaAtualizada">Nomenclatura após a atualização</param>
        /// <param name="id">Identificador das loojas</param>
        public void Atualizar(Loja lojaAtualizada, int id)
        {
            Loja lojaBuscada = ctx.Lojas.Find(id);

            if (lojaAtualizada.Cep != null)
            {
               lojaBuscada.Cep = lojaAtualizada.Cep;
            }

            if (lojaAtualizada.Cidade != null)
            {
                lojaBuscada.Cidade = lojaAtualizada.Cidade;
            }

            if (lojaAtualizada.NomeComercio != null)
            {
                lojaBuscada.NomeComercio = lojaAtualizada.NomeComercio;
            }


            if (lojaAtualizada.Uf != null)
            {
                lojaBuscada.Uf = lojaAtualizada.Uf;
            }

            if (lojaAtualizada.Rua != null)
            {
                lojaBuscada.Rua = lojaAtualizada.Rua;
            }

            if (lojaAtualizada.Telefone != null)
            {
                lojaBuscada.Telefone = lojaAtualizada.Telefone;
            }


            ctx.Lojas.Update(lojaBuscada);

            ctx.SaveChanges();
        }


        /// <summary>
        /// Faz a busca pelo identificador das lojas
        /// </summary>
        /// <param name="id">Identificador da loja</param>
        /// <returns>A loja buscada com suas informações</returns>
        public Loja BuscarPorId(int id)
        {
            return ctx.Lojas.FirstOrDefault(l => l.IdLoja == id);
        }

        /// <summary>
        /// Faz o cadastro de uma nova loja
        /// </summary>
        /// <param name="novaLoja">Nomeação de cadastro da loja</param>
        public void Cadastrar(Loja novaLoja)
        {
            ctx.Lojas.Add(novaLoja);

            ctx.SaveChanges();
        }

        /// <summary>
        /// Faz a exclusão de uma loja
        /// </summary>
        /// <param name="id">Identificador da loja</param>
        public void Deletar(int id)
        {
            ctx.Lojas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        /// <summary>
        /// Faz a listagem das lojas
        /// </summary>
        /// <returns>Lojas com suas informações</returns>
        public List<Loja> Listar()
        {
            return ctx.Lojas.ToList();
                //.Include(l => l.IdEspecialidadeNavigation)
                //.Include(l => l.IdUsuariosNavigation)
                //.ToList();
            
        }

        public void SalvarImagem(IFormFile foto)
        {
            throw new NotImplementedException();
        }
    }
}
