using System;
using System.Collections.Generic;

#nullable disable

namespace eletronicos_WebAPI.Domains
{
    public partial class Loja
    {
        public int IdLoja { get; set; }
        public int? IdUsuarios { get; set; }
        public int? IdEspecialidade { get; set; }
        public int? IdFormulario { get; set; }
        public int? IdComentario { get; set; }
        public string Imagem { get; set; }
        public string NomeComercio { get; set; }
        public string Cidade { get; set; }
        public string Rua { get; set; }
        public string Nº { get; set; }
        public string Complemento { get; set; }
        public string Cep { get; set; }
        public string Telefone { get; set; }

        public virtual Comentario IdComentarioNavigation { get; set; }
        public virtual Especialidade IdEspecialidadeNavigation { get; set; }
        public virtual Formulario IdFormularioNavigation { get; set; }
        public virtual Usuario IdUsuariosNavigation { get; set; }
    }
}
