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
    public class StandardLayoutDA : _DataAccess
    {
        LayoutDA layoutDA = new LayoutDA();

        public string getLayout(int id)
        {
            string name = "";
            string json = null;
            int size = -1;

            using (MySqlConnection conn = _DataAccess.Connection)
            {
                //declareren query 
                string query = "SELECT * FROM layout WHERE ID='@id'";
                /*query += "FROM layout l ";
                query += "INNER JOIN standard s ";
                query += "ON l.ID = s.LayoutID ";
                query += "WHERE s.ID = @id";*/

                //invoeren query    
                MySqlCommand cmd = new MySqlCommand(query, conn);
                cmd.Parameters.Add(new MySqlParameter("@id", id));

                //uitvoeren van de query
                MySqlDataReader reader = cmd.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        name = reader.GetString(0);
                        json = reader.GetString(1);
                        size = reader.GetInt32(2);
                    }
                }

                conn.Close();
            }

            return json;
        }
    }
}