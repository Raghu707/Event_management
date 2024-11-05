using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;

namespace backend
{
    public class eventDataModal
    {

        [Key]
        public int Id { get; set; }
        public string name { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public string date { get; set; } = string.Empty;
        public string location { get; set; } = string.Empty;
    }
}
