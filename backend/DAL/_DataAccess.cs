using Microsoft.Data.SqlClient;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace KVTQ.DAL
{
    public abstract class _DataAccess
    {
    
        private static readonly string connectionString = @"Server=studmysql01.fhict.local;Database=dbi345747;Uid=dbi345747;Pwd=KVTQ123!;";

       /* MySqlConnectionStringBuilder conn_string = new MySqlConnectionStringBuilder();
        conn_string.Server = "127.0.0.1";
        conn_string.Port = 3306;
        conn_string.UserID = "root";
        conn_string.Password = "myPassword";
        conn_string.Database = "myDB";

        protected string query;
        */
        public static MySqlConnection Connection
        {
            get
            {
                MySqlConnection connection = new MySqlConnection(connectionString);

                connection.Open();
                return connection;
            }
        }
    
    }
}