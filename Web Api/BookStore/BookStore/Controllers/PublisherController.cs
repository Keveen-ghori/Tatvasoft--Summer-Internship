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
    [Route("api/publisher")]
    [ApiController]
    public class PublisherController : ControllerBase
    {
        PublisherRepository _publisherRepository = new PublisherRepository();

        [Route("list")]
        [HttpGet]
        [ProducesResponseType(typeof(ListResponce<PublisherModel>), (int)HttpStatusCode.OK)]
        public IActionResult GetPublisher(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var publisher = _publisherRepository.GetPublisher(pageIndex, pageSize, keyword);
            ListResponce<PublisherModel> listResponse = new ListResponce<PublisherModel>()
            {
                Results = publisher.Results.Select(c => new PublisherModel(c)),
                TotalRecords = publisher.TotalRecords,
            };

            return Ok(listResponse);
        }

        [Route("{id}")]
        [HttpGet]
        [ProducesResponseType(typeof(CategoryModel), (int)HttpStatusCode.OK)]
        public IActionResult GetPublisher(int id)
        {
            var publisher = _publisherRepository.GetPublisher(id);
            PublisherModel publisherModel = new PublisherModel(publisher);

            return Ok(publisherModel);
        }

        [Route("add")]
        [HttpPost]
        [ProducesResponseType(typeof(PublisherModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(BadRequestObjectResult), (int)HttpStatusCode.BadRequest)]
        public IActionResult AddPublisher(PublisherModel publisher)
        {
            if (publisher == null)
                return BadRequest("Model is null");

            Publisher publishers = new Publisher()
            {
                Id = publisher.Id,
                Name = publisher.Name,
                Address = publisher.Address,
                Contact = publisher.Contact
            };
            var response = _publisherRepository.AddPublisher(publishers);
            PublisherModel publisherModel = new PublisherModel(response);

            return Ok(publisherModel);
        }


        [Route("update")]
        [HttpPut]
        [ProducesResponseType(typeof(PublisherModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(BadRequestObjectResult), (int)HttpStatusCode.BadRequest)]
        public IActionResult UpdatePublisher(PublisherModel publisher)
        {
            if (publisher == null)
                return BadRequest("Model is null");

            Publisher publishers = new Publisher()
            {
                Id = publisher.Id,
                Name = publisher.Name,
                Address = publisher.Address,
                Contact = publisher.Contact
        };
            var response = _publisherRepository.UpdatePublisher(publishers);
            PublisherModel publisherModel = new PublisherModel(response);

            return Ok(publisherModel);
        }

        [Route("delete/{id}")]
        [HttpDelete]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(BadRequestObjectResult), (int)HttpStatusCode.BadRequest)]
        public IActionResult DeletePublisher(int id)
        {
            if (id == 0)
                return BadRequest("id is null");

            var response = _publisherRepository.DeletePublisher(id);
            return Ok(response);
        }
    }
}
