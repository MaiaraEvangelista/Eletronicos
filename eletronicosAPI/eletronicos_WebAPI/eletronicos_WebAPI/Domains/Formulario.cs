using System;
using System.Collections.Generic;

#nullable disable

namespace eletronicos_WebAPI.Domains
{
    public partial class Formulario
    {
        public Formulario()
        {
            Lojas = new HashSet<Loja>();
        }

        public int IdFormulario { get; set; }
        public string Status { get; set; }

        public virtual ICollection<Loja> Lojas { get; set; }
    }
}
