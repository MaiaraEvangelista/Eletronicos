using System;
using System.Collections.Generic;

#nullable disable

namespace eletronicos_WebAPI.Domains
{
    public partial class ImagemLoja
    {
        public int IdImagem { get; set; }
        public int IdLoja { get; set; }
        public byte[] Binario { get; set; }
        public string MimeType { get; set; }
        public string NomeArquivo { get; set; }
        public DateTime? DataInclusao { get; set; }

        public virtual Loja IdLojaNavigation { get; set; }
    }
}
