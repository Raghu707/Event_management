using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;




namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class eventController : Controller
    {
        private readonly dataContext _context;

        public eventController(dataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<eventDataModal>>> getAllEvents()
        {
            return Ok(await _context.eventModalDetails.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<eventDataModal>>> createEvents(eventDataModal events)
        {
            _context.eventModalDetails.Add(events);
            await _context.SaveChangesAsync();

            return Ok(await _context.eventModalDetails.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<eventDataModal>>> updateEvents(eventDataModal events)
        {
            var dbHero = await _context.eventModalDetails.FindAsync(events.Id);
            if (dbHero == null)
                return BadRequest("Hero not found.");

            dbHero.name = events.name;
            dbHero.description = events.description;
            dbHero.date = events.date;
            dbHero.location = events.location;

            await _context.SaveChangesAsync();

            return Ok(await _context.eventModalDetails.ToListAsync());
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult<List<eventDataModal>>> deleteEvents(int Id)
        {
            var dbHero = await _context.eventModalDetails.FindAsync(Id);
            if (dbHero == null)
                return BadRequest("Hero not found.");

            _context.eventModalDetails.Remove(dbHero);
            await _context.SaveChangesAsync();

            return Ok(await _context.eventModalDetails.ToListAsync());
        }
    }
}