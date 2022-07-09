using BookStore.Model.Data;
using BookStore.Model.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repository
{
    public class PublisherRepository: BaseRepository
    {
        public ListResponce<Publisher> GetPublisher(int pageIndex, int pageSize, string keyword)
        {
            keyword = keyword?.ToLower()?.Trim();
            var query = _context.Publishers.Where(c => keyword == null || c.Name.ToLower().Contains(keyword)).AsQueryable();
            int totalReocrds = query.Count();
            List<Publisher> publishers = query.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList();

            return new ListResponce<Publisher>()
            {
                Results = publishers,
                ToatalRecords = totalReocrds,
            };
        }

        public Publisher GetPublisher(int id)
        {
            return _context.Publishers.FirstOrDefault(c => c.Id == id);
        }

        public Publisher AddPublisher(Publisher publisher)
        {
            var entry = _context.Publishers.Add(publisher);
            _context.SaveChanges();
            return entry.Entity;
        }

        public Publisher UpdatePublisher(Publisher publisher)
        {
            var entry = _context.Publishers.Update(publisher);
            _context.SaveChanges();
            return entry.Entity;
        }

        public bool DeletePublisher(int id)
        {
            var publisher = _context.Publishers.FirstOrDefault(c => c.Id == id);
            if (publisher == null)
                return false;

            _context.Publishers.Remove(publisher);
            _context.SaveChanges();
            return true;
        }
    }
}
