using System;
using System.Collections.Generic;

#nullable disable

namespace eletronicos_WebAPI.Domains
{
    public partial class Especialidade
    {
        public Especialidade()
        {
            Lojas = new HashSet<Loja>();
        }

        public int IdEspecialidade { get; set; }
        public string TituloEspecialidade { get; set; }

        public virtual ICollection<Loja> Lojas { get; set; }
    }
}
