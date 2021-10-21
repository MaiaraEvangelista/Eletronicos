using eletronicos_WebAPI.Contexts;
using eletronicos_WebAPI.Domains;
using eletronicos_WebAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eletronicos_WebAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        Eletronicos_CTX ctx = new Eletronicos_CTX();

        public void Atualizar(int id, Usuario usuarioAtualizado)
        {

            Usuario usuarioBuscado = ctx.Usuarios.Find(id);


            if (usuarioAtualizado.NomeCompleto != null)
            {
                usuarioBuscado.NomeCompleto = usuarioAtualizado.NomeCompleto;
            }


            if (usuarioAtualizado.Email != null)
            {
                usuarioBuscado.Email = usuarioAtualizado.Email;
            }


            if (usuarioAtualizado.Senha != null)
            {
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
            }

            ctx.Usuarios.Update(usuarioBuscado);

            ctx.SaveChanges();
        }

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios
            .Select(u => new Usuario()
            {
                IdUsuarios = u.IdUsuarios,
                NomeCompleto = u.NomeCompleto,
                Email = u.Email,
                IdTiposUsuario = u.IdTiposUsuario,

                IdTiposUsuarioNavigation = new TiposUsuario()
                {
                    IdTiposUsuario = u.IdTiposUsuarioNavigation.IdTiposUsuario,
                    TituloTiposUsuario = u.IdTiposUsuarioNavigation.TituloTiposUsuario
                }
            })
            .FirstOrDefault(u => u.IdUsuarios == id);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Usuarios.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios
            .Select(u => new Usuario()
            {
                IdUsuarios = u.IdUsuarios,
                NomeCompleto = u.NomeCompleto,
                Email = u.Email,
                IdTiposUsuario = u.IdTiposUsuario,

                IdTiposUsuarioNavigation = new TiposUsuario()
                {
                    IdTiposUsuario = u.IdTiposUsuarioNavigation.IdTiposUsuario,
                    TituloTiposUsuario = u.IdTiposUsuarioNavigation.TituloTiposUsuario
                }
            })
            .ToList();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
