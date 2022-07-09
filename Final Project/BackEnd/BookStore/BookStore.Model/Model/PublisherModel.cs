using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStore.Model.Data;

namespace BookStore.Model.Model
{
    public class PublisherModel
    {
        public PublisherModel()
        {
        }

        public PublisherModel(Publisher publisher)
        {
            Id = publisher.Id;
            Name = publisher.Name;
            Address = publisher.Address;
            Contact = publisher.Contact;

        }

        public int Id { get; set; }
        [Required(ErrorMessage="Publisher's Id is required")]
        public string Name { get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
    }
}
