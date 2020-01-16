using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ
{
    public class Database
    {
        private readonly string connectionString = "Server=studmysql01.fhict.local;Uid=dbi345747;Database=dbi345747;Pwd=KVTQ123!;";

        public Board getLayout()
        {
            Board layout = new Board();

            return layout;
        }
    }
}