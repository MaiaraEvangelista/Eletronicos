using System;
using System.Collections.Generic;

#nullable disable

namespace eletronicos_WebAPI.Domains
{
    public partial class Loja
    {
        public int IdLoja { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdEspecialidade { get; set; }
        public int? IdFormulario { get; set; }
        public string NomeComercio { get; set; }
        public string Cnpj { get; set; }
        public string Cidade { get; set; }
        public string Rua { get; set; }
        public string N { get; set; }
        public string Uf { get; set; }
        public string Complemento { get; set; }
        public string Cep { get; set; }
        public string Telefone { get; set; }


        public virtual Especialidade IdEspecialidadeNavigation { get; set; }
        public virtual Formulario IdFormularioNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ImagemLoja ImagemLoja { get; set; }
    }
}
