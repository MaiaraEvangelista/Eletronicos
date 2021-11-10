using System;
using System.Collections.Generic;

#nullable disable

namespace eletronicos_WebAPI.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Comentarios = new HashSet<Comentario>();
            Lojas = new HashSet<Loja>();
        }

        public int IdUsuarios { get; set; }
        public int? IdTiposUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Cpf { get; set; }
        public string Cnpj { get; set; }
        public string NomeCompleto { get; set; }
        public string Rua { get; set; }
        public string Nº { get; set; }
        public string Complemento { get; set; }
        public string Cep { get; set; }
        public string Celular { get; set; }

        public virtual TiposUsuario IdTiposUsuarioNavigation { get; set; }
        public virtual ICollection<Comentario> Comentarios { get; set; }
        public virtual ICollection<Loja> Lojas { get; set; }
    }
}
