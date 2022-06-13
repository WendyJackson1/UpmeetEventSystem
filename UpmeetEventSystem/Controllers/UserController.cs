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
            using EventDBContext db = new EventDBContext();
            {
                var name = db.Users.Where(x => x.UserName == u.UserName).FirstOrDefault();
                if (name == null)
                {
                    db.Users.Add(u);
                    db.SaveChanges();
                    return $"{u.UserName} was added to the database";
                }
                else
                {
                    return $"{u.UserName} already exists, please try again.";
                }
            }


            //List<User> output = db.Users.ToList();
            //if (db.Users.Contains(u))
            //for (int i = 0; i < output.Count(); i++)
            //{
            //    User x = output[i];
            //    if(x.UserName == u.UserName)
            //    {
            //        return $"{u.UserName} already exists, please try again.";
            //    }
            //    else
            //    {
            //        db.Users.Add(u);
            //        db.SaveChanges();
            //        return $"{u.UserName} was added to the database";
            //    }
            //}
            //return AddUser(u);

            //if (db.Users = u.UserName)
            //{
            //    return $"{u.UserName} already exists, please try again.";
            //}
            //else
            //{
            //    db.Users.Add(u);
            //    db.SaveChanges();
            //    return $"{u.UserName} was added to the database";
            //}
        }

        [HttpDelete("RemoveUser/{id}")]
        public string RemoveUser(int id)
        {
            User u = db.Users.Find(id);
            db.Users.Remove(u);
            db.SaveChanges();
            return $"{u.UserName} was removed from your user list.";
        }
    }
}
