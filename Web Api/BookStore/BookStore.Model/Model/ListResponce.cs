using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Model.Model
{
    public class ListResponce<T> where T : class
    {
        public int TotalRecords;

        public IEnumerable<T> Results { get; set; }

        public int ToatalRecords { get; set; }
    }
}
