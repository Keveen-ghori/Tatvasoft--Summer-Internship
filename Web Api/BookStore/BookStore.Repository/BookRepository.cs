using BookStore.Model.Data;
using BookStore.Model.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repository
{
    public class BookRepository: BaseRepository
    {
        public ListResponce<Book> GetBooks(int pageIndex, int pageSize, string keyword = "")
        {
            keyword = keyword?.ToLower()?.Trim();
            var query = _context.Books.Where(c => keyword == null || c.Name.ToLower().Contains(keyword)).AsQueryable();
            int totalCount = query.Count();
            List<Book> books = query.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();

            return new ListResponce<Book>()
            {
                Results = books,
                TotalRecords = totalCount,
            };
        }

        public Book GetBooks(int id)
        {
            return _context.Books.FirstOrDefault(c => c.Id == id);
        }

        public Book AddBooks(Book book)
        {
            var entry = _context.Books.Add(book);
            _context.SaveChanges();
            return entry.Entity;
        }

        public Book UpdateBooks(Book book)
        {
            var entry = _context.Books.Update(book);
            _context.SaveChanges();
            return entry.Entity;
        }

        public bool DeleteBooks(int id)
        {
            var book = _context.Books.FirstOrDefault(c => c.Id == id);
            if (book == null)
                return false;

            _context.Books.Remove(book);
            _context.SaveChanges();
            return true;
        }
    }
}
