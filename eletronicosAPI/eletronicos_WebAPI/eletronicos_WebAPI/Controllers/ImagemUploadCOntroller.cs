using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WallFertas.Imagem;

namespace WallFertas.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ImagemUploadController : ControllerBase
    {
        public static IWebHostEnvironment _webHostEnvironment;

        public ImagemUploadController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpPost]

        public string Cadastrar([FromForm] ImagemUpload imagem)
        {
            try
            {
                if (imagem.files.Length > 0)
                {
                    string stringConexao = _webHostEnvironment.WebRootPath + "\\cadastrado\\";
                    if (!Directory.Exists(stringConexao))
                    {
                        Directory.CreateDirectory(stringConexao);
                    }
                    using (FileStream fileStream = System.IO.File.Create(stringConexao + imagem.files.FileName))
                    {
                        imagem.files.CopyTo(fileStream);
                        fileStream.Flush();
                        return "Cadastrado";
                    }
                }
                else
                {
                    return "não enviado.";
                }
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}