using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UpmeetEventSystem.Models;

namespace UpmeetEventSystem.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        EventDBContext db = new EventDBContext();

        [HttpGet("ShowUsers")]
        public List<User> ShowUsers()
        {
            return db.Users.ToList();
        }

        [HttpPut("AddUser")]
        public string AddUser(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
            return $"{u.UserName} was added to the database";
        }

        [HttpDelete("RemoveUser/{id}")]
        public string RemoveUser(int id)
        {
            User u = db.Users.Find(id);
            db.Users.Remove(u);
            db.SaveChanges();
            return $"{u.UserName} was removed from your favorites list.";
        }
    }
}
