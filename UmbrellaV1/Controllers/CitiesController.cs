﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UmbrellaV1.Models;

namespace UmbrellaV1.Controllers
{
    [Route("api/v1/city")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private readonly umbrella_v1Context _context;

        public CitiesController(umbrella_v1Context context)
        {
            _context = context;
        }

        // GET: api/Cities
        [HttpGet]
        public IEnumerable<City> GetCity()
        {
            return _context.City;
        }

        // GET: api/Cities/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCity([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var city = await _context.City.FindAsync(id);

            if (city == null)
            {
                return NotFound();
            }

            return Ok(city);
        }

        // PUT: api/Cities/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCity([FromRoute] long id, [FromBody] City city)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != city.CityId)
            {
                return BadRequest();
            }

            _context.Entry(city).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CityExists(id))
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

        // POST: api/Cities
        [HttpPost]
        public async Task<IActionResult> PostCity([FromBody] City city)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.City.Add(city);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCity", new { id = city.CityId }, city);
        }

        // DELETE: api/Cities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCity([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var city = await _context.City.FindAsync(id);
            if (city == null)
            {
                return NotFound();
            }

            _context.City.Remove(city);
            await _context.SaveChangesAsync();

            return Ok(city);
        }

        private bool CityExists(long id)
        {
            return _context.City.Any(e => e.CityId == id);
        }
    }
}