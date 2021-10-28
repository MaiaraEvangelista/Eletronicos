using System;
using System.Collections.Generic;

#nullable disable

namespace eletronicos_WebAPI.Domains
{
    public partial class Comentario
    {
        public Comentario()
        {
            Lojas = new HashSet<Loja>();
        }

        public int IdComentario { get; set; }
        public int? IdUsuarios { get; set; }
        public string Comentario1 { get; set; }

        public virtual Usuario IdUsuariosNavigation { get; set; }
        public virtual ICollection<Loja> Lojas { get; set; }
    }
}
