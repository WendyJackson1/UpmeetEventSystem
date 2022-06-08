using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpmeetEventSystem.Models;

namespace UpmeetEventSystem.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        EventDBContext db = new EventDBContext();
        
        [HttpGet("GetEvents")]
        public List<Event> GetEvents()
        {
            return db.Events.ToList();
        }

        [HttpGet("SearchByName/{name}")]
        public List<Event> SearchByName(string name)
        {
            List<Event> events = db.Events.Where(m => m.EventName.Contains(name)).ToList();
            return events;
        }

        [HttpGet("SearchById/{id}")]
        public Event GetEventById(int id)
        {
            return db.Events.Where(x => x.EventId == id).First();
        }

        [HttpPost("CreateEvent")]
        public string CreateEvent([FromBody]Event e)
        {
            db.Events.Add(e);
            db.SaveChanges();
            return e.EventName + " has been successfully added to the database";
        }

        [HttpDelete("DeleteEvent/{id}")]
        public string DeleteEvent(int id)
        {
            Event e = db.Events.Find(id);
            db.Events.Remove(e);
            db.SaveChanges();
            return $"The Event at id {id} has been deleted successfully";
        }

        [HttpPut("UpdateEvent/{id}")]
        public string UpdateEvent(int id, Event updatedInfo)
        {
            Event e = db.Events.Find(id);

            e.EventName = updatedInfo.EventName;
            e.EventDate = updatedInfo.EventDate;
            e.EventLocation = updatedInfo.EventLocation;
            e.IsFavorite = updatedInfo.IsFavorite;

            db.Events.Update(e);
            db.SaveChanges();

            return $"The Event {e.EventName} has been updated at id {e.EventId}";
        }

        [HttpPut("FavoriteEvent/{id}")]
        public string FavoriteEvent(int id)
        {
            Event e = db.Events.Find(id);

            e.IsFavorite = true;
            db.Events.Update(e);
            db.SaveChanges();

            return $"{e.EventName} has been favorited";
        }
    }
}
