using BookStore.Model.Data;
using BookStore.Model.Model;
using BookStore.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace BookStore.Api.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepository _repository = new UserRepository();

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(LoginModel model)
        {
            User user = _repository.Login(model);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult Register(RegisterModel model)
        {
            User user = _repository.Register(model);
            if (user == null)
                return BadRequest();
            return Ok(user);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult GetUsers(int pageIndex = 1, int pageSize = 10, string keyword = "")
        {
            ListResponce<User> response = _repository.GetUsers(pageIndex, pageSize, keyword);
            ListResponce<UserModel> users = new ListResponce<UserModel>()
            {
                Results = response.Results.Select(u => new UserModel(u)),
                ToatalRecords = response.ToatalRecords,
            };

            return Ok(users);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetUser(int id)
        {
            User user = _repository.GetUser(id);
            if (user == null)
                return NotFound();

            UserModel userModel = new UserModel(user);
            return Ok(userModel);
        }

        [HttpPut]
        [Route("update")]
        public IActionResult UpdateUser(UserModel model)
        {
            try
            {
                if (model != null)
                {
                    var user = _repository.GetUser(model.Id);
                    if (user == null)
                        return StatusCode(HttpStatusCode.NotFound.GetHashCode(), "User not found");

                    user.Firstname = model.Firstname;
                    user.Lastname = model.Lastname;
                    user.Email = model.Email;

                    var isSaved = _repository.UpdateUser(user);
                    if (isSaved)
                    {
                        return StatusCode(HttpStatusCode.OK.GetHashCode(), "User detail updated successfully");
                    }
                }

                return StatusCode(HttpStatusCode.NotFound.GetHashCode(), "Please provide correct information");
            }
            catch (Exception ex)
            {
                return StatusCode(HttpStatusCode.InternalServerError.GetHashCode(), ex.Message);
            }
        }

        [HttpDelete]
        [Route("Delete")]

        public IActionResult DeleteUser(int id)
        {
            try
            {

                if (id > 0)
                {
                    var user = _repository.GetUser(id);
                    if (user == null)
                    {
                        return StatusCode(HttpStatusCode.NotFound.GetHashCode(), "user not found");
                    }
                    bool isDeleted = _repository.DeleteUser(user);
                    if (isDeleted)
                    {
                        return StatusCode(HttpStatusCode.OK.GetHashCode(), "user deleted successfully");
                    }
                }
                return StatusCode(HttpStatusCode.NotFound.GetHashCode(), "Please provide correct information");
            }
            catch (Exception e)
            {
                return StatusCode(HttpStatusCode.InternalServerError.GetHashCode(), e.Message);
            }
        }

        [HttpGet]
        [Route("role-list")]
        public IActionResult GetRoles()
        {
            ListResponce<Role> response = _repository.GetRoles();
            ListResponce<RoleModel> roles = new ListResponce<RoleModel>()
            {
                Results = response.Results.Select(u => new RoleModel(u)),
                ToatalRecords = response.ToatalRecords,
            };

            return Ok(roles);
        }
    }
}
