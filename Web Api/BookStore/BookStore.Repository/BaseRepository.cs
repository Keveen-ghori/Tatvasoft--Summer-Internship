using BookStore.Model.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repository
{
    public class BaseRepository
    {
        protected readonly bookstoreContext _context = new bookstoreContext();
    }
}
