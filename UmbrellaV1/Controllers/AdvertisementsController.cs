using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UmbrellaV1.Models;

namespace UmbrellaV1.Controllers
{
    [Route("api/v1/advertisement")]
    [ApiController]
    public class AdvertisementsController : ControllerBase
    {
        private readonly umbrella_v1Context _context;

        public AdvertisementsController(umbrella_v1Context context)
        {
            _context = context;
        }

        // GET: api/Advertisements
        [HttpGet]
        public IEnumerable<Advertisement> GetAdvertisement()
        {
            return _context.Advertisement
                .Include(add => add.City)
                .Include(add => add.Image)
                .Include(add => add.User);
        }

        // GET: api/Advertisements/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdvertisement([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var advertisement = await _context.Advertisement.FindAsync(id);

            if (advertisement == null)
            {
                return NotFound();
            }

            return Ok(advertisement);
        }

        // PUT: api/Advertisements/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdvertisement([FromRoute] long id, [FromBody] Advertisement advertisement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != advertisement.AdvertisementId)
            {
                return BadRequest();
            }

            _context.Entry(advertisement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdvertisementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Advertisements
        [HttpPost]
        public async Task<IActionResult> PostAdvertisement([FromBody] Advertisement advertisement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            advertisement.CreatedDate = DateTime.Now;
            _context.Advertisement.Add(advertisement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdvertisement", new { id = advertisement.AdvertisementId }, advertisement);
        }

        // DELETE: api/Advertisements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdvertisement([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var advertisement = await _context.Advertisement.FindAsync(id);
            if (advertisement == null)
            {
                return NotFound();
            }

            _context.Advertisement.Remove(advertisement);
            await _context.SaveChangesAsync();

            return Ok(advertisement);
        }

        private bool AdvertisementExists(long id)
        {
            return _context.Advertisement.Any(e => e.AdvertisementId == id);
        }
    }
}