using eletronicos_WebAPI.Contexts;
using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Repositories
{
    public class ComentarioRepository : IComentarioRepository
    {
        Eletronicos_CTX ctx = new Eletronicos_CTX();
        public void Cadastrar(Comentario novoComentario)
        {
            ctx.Add(novoComentario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Comentario comentarioBuscado = ctx.Comentarios.Find(id);

            ctx.Comentarios.Remove(comentarioBuscado);

            ctx.SaveChanges();
        }

        public List<Comentario> Listar()
        {
            return ctx.Comentarios.ToList();
        }
    }
}
