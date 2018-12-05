using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UmbrellaV1.Models;

namespace UmbrellaV1.Controllers
{
    [Route("api/v1/images")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly IHostingEnvironment _environment;
        private readonly umbrella_v1Context _context;

        public ImagesController(IHostingEnvironment environment, umbrella_v1Context context)
        {
            _environment = environment;
            _context = context;
        }

        [HttpPost]
        [Route("upload/advertistement/{id}/{number}")]
        public async Task<IActionResult> PostUserImage([FromRoute] long id, [FromRoute] int number, IFormFile file)
        {
            string fileName = "IMG_" + DateTime.Now.ToString("ddMMyyyy_") + id + number + file.FileName;
            Image image = new Image()
            {
                ImageName = fileName,
                Secuencial = number,
                AdvertisementId = id
            };

            var uploads = Path.Combine(_environment.WebRootPath, "uploads");
            if (file.Length > 0)
            {
                using (var fileStream = new FileStream(Path.Combine(uploads, fileName), FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
            }

            _context.Add(image);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("download/advertistement/{id}/{number}")]
        public async Task<IActionResult> Download([FromRoute] long id, [FromRoute] long number)
        {

            var image = _context.Image
                .Where(x => x.AdvertisementId == id && x.Secuencial == number)
                .First();

            if (image == null)
                return Content("image not exist");

            var path = Path.Combine(
                           _environment.WebRootPath,
                           "uploads", image.ImageName);

            var memory = new MemoryStream();
            using (var stream = new FileStream(path, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;
            return File(memory, GetContentType(path), Path.GetFileName(path));
        }

        private string GetContentType(string path)
        {
            var types = GetMimeTypes();
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return types[ext];
        }

        private Dictionary<string, string> GetMimeTypes()
        {
            return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".xlsx", "application/vnd.openxmlformats officedocument.spreadsheetml.sheet"},
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"}
            };
        }

    }
}