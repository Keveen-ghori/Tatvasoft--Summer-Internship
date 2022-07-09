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

    [Route("api/Books")]
    [ApiController]
    public class BookController : Controller
    {
        BookRepository _bookRepository = new BookRepository();

        [HttpGet]
        [Route("list")]

        public IActionResult GetBooks(int pageIndex = 1, int pageSize = 10, string keyword = "")
        {
            var books = _bookRepository.GetBooks(pageIndex, pageSize, keyword);
            ListResponce<BookModel> listResponse = new ListResponce<BookModel>()
            {
                Results = books.Results.Select(c => new BookModel(c)),
                TotalRecords = books.TotalRecords,
            };

            return Ok(listResponse);
        }

        [Route("{id}")]
        [HttpGet]
        [ProducesResponseType(typeof(BookModel), (int)HttpStatusCode.OK)]
        public IActionResult GetCategory(int id)
        {
            var book = _bookRepository.GetBooks(id);
            BookModel bookModel = new BookModel(book);

            return Ok(bookModel);
        }

        [Route("add")]
        [HttpPost]
        [ProducesResponseType(typeof(CategoryModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(BadRequestObjectResult), (int)HttpStatusCode.BadRequest)]
        public IActionResult AddBooks(BookModel book)
        {
            if (book == null)
                return BadRequest("Model is null");

            Book books = new Book()
            {
                Id = book.Id,
                Name = book.Name,
                Price = book.Price,
                Description = book.Description,
                Base64image = book.Base64image,
                Categoryid = book.Categoryid,
                Publisherid = book.Publisherid,
                Quantity = book.Quantity,

        };
            var response = _bookRepository.AddBooks(books);
            BookModel bookModel = new BookModel(response);

            return Ok(bookModel);
        }

        [Route("update")]
        [HttpPut]
        [ProducesResponseType(typeof(CategoryModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(BadRequestObjectResult), (int)HttpStatusCode.BadRequest)]
        public IActionResult UpdateBooks(BookModel book)
        {
            if (book == null)
                return BadRequest("Model is null");

            Book books = new Book()
            {
                Id = book.Id,
                Name = book.Name,
                Price = book.Price,
                Description = book.Description,
                Base64image = book.Base64image,
                Categoryid = book.Categoryid,
                Publisherid = book.Publisherid,
                Quantity = book.Quantity,
        };
            var response = _bookRepository.UpdateBooks(books);
            BookModel bookModel = new BookModel(response);

            return Ok(bookModel);
        }

        [Route("delete/{id}")]
        [HttpDelete]
        [ProducesResponseType(typeof(bool), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(BadRequestObjectResult), (int)HttpStatusCode.BadRequest)]
        public IActionResult DeleteBook(int id)
        {
            if (id == 0)
                return BadRequest("id is null");

            var response = _bookRepository.DeleteBooks(id);
            return Ok(response);
        }
    }
}
