using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpmeetEventSystem.Models;

namespace UpmeetEventSystem.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        EventDBContext db = new EventDBContext();

        [HttpGet("ShowFavorites")]
        public List<Favorite> ShowFavorites()
        {
            return db.Favorites.ToList();
        }

        [HttpGet("GetFavoritesByDate")]
        public List<Favorite> GetFavsByDate()
        {
            List<Favorite> orderedFavs = db.Favorites.OrderBy(x => x.Event.EventDate).ToList();
            return orderedFavs;
        }

        [HttpPut("AddFavorite")]
        public string AddFavorite(int id)
        {
            Favorite f = db.Favorites.Find(id);
            db.Favorites.Add(f);
            db.SaveChanges();
            return $"{f.Event.EventName} was added to the database";
        }

        [HttpDelete("RemoveFavorite/{id}")]
        public string RemoveFavorite(int id)
        {
            Favorite f = db.Favorites.Find(id);
            db.Favorites.Remove(f);
            db.SaveChanges();
            return $"{f.Event.EventName} was removed from your favorites list.";
        }
    }
}
