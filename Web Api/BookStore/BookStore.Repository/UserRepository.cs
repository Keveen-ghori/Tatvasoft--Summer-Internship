using BookStore.Model.Data;
using BookStore.Model.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repository
{
    public class UserRepository : BaseRepository
    {
        public User Login(LoginModel model)
        {
            return _context.Users.FirstOrDefault(c => c.Email.Equals(model.Email.ToLower()) && c.Password.Equals(model.Password));
        }

        public User Register(RegisterModel model)
        {
            User user = new User()
            {
                Email = model.Email,
                Password = model.Password,
                Firstname = model.Firstname,
                Lastname = model.Lastname,
                Roleid = model.Roleid,
            };
            var entry = _context.Users.Add(user);
            _context.SaveChanges();
            return entry.Entity;
        }

        public ListResponce<User> GetUsers(int pageIndex, int pageSize, string keyword)
        {
            keyword = keyword?.ToLower().Trim();
            var query = _context.Users.Where(c
                => keyword == null
                || c.Firstname.ToLower().Contains(keyword)
                || c.Lastname.ToLower().Contains(keyword)
            ).AsQueryable();

            int totalRecords = query.Count();
            IEnumerable<User> users = query.Skip((pageIndex - 1) * pageSize).Take(pageSize);

            return new ListResponce<User>()
            {
                Results = users,
                ToatalRecords = totalRecords
            };
        }

        public User GetUser(int id)
        {
            return _context.Users.FirstOrDefault(w => w.Id == id);
        }

        public bool DeleteUser(User model)
        {
            if (model.Id > 0)
            {
                _context.Users.Remove(model);
                _context.SaveChanges();

                return true;
            }
            return false;
        }


        public bool UpdateUser(User model)
        {
            if (model.Id > 0)
            {
                _context.Update(model);
                _context.SaveChanges();

                return true;
            }

            return false;
        }
        public ListResponce<Role> GetRoles()
        {
            var query = _context.Roles.AsQueryable();
            int totalRecords = query.Count();
            IEnumerable<Role> roles = query;
            return new ListResponce<Role>()
            {
                Results = roles,
                ToatalRecords = totalRecords
            };
        }

    }
}
