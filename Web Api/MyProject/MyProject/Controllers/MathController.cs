using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Controllers
{
    [Route("api/Math")]
    [ApiController]
    public class MathController : ControllerBase
    {
        
        private List<Person> person = new List<Person>()
            {
                new Person()
                {
                    Id =1,
                    Name = "Kevin"
                },

                new Person()
                {
                    Id =2,
                    Name = "John"
                }
            };


        [HttpGet]
        [Route("Add")]
        public IActionResult Add(int a, int b)
        {
            int result = a + b;
            return Ok(result);
        }

        [HttpPost]
        [Route("Multiple")]
        public IActionResult Multiple(InputData Input)
        {
            int result = Input.value1 * Input.value2;
            return Ok(result);
        }

        [HttpPut]
        [Route("Subtract")]

        public IActionResult Subtract(int a, int b)
        {
            int result = a - b;
            return Ok(result);
        }

        [HttpPut]
        [Route("Division")]
        public IActionResult Division(int a, int b)
        {
            int result = a / b;
            if (b == 0)
            {
                return BadRequest("B's Value cannot be Zero");
            }

            return Ok(result);
        }



        public class InputData
        {
            public int value1 { get; set; }
            public int value2 { get; set; }

        }

        public class Person
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        [HttpGet]
        [Route("Data")]

        public IActionResult getData()
        {
            return Ok(person);
        }
    }
}
