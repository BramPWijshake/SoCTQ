using Microsoft.Data.SqlClient;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ.DAL
{
    public class LayoutDA : _DataAccess
    {
        public void insertLayout(string name, string json, int size)
        {
            using (SqlConnection conn = new SqlConnection(Connection.ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    query = "INSERT INTO layout(Name, Size, Json, Date) VALUES(@name, @size, @json, CURRENT_DATE)";

                    cmd.Connection = conn;
                    cmd.CommandType = CommandType.Text;
                    cmd.CommandText = query;
                    cmd.Parameters.AddWithValue("@name", name);
                    cmd.Parameters.AddWithValue("@json", json);
                    cmd.Parameters.AddWithValue("@size", size);

                    try
                    {
                        conn.Open();
                        cmd.ExecuteNonQuery();
                    }
                    catch (SqlException ex)
                    {
                        throw new Exception(ex.Message);
                    }
                }

                conn.Close();
            }
        }

        public string getLayout(int id)
        {
            string name = "";
            string json = null;
            int size = -1;

            using (SqlConnection conn = Connection)
            {
                //declareren query 
                string query = "SELECT NAME, JSON, SIZE FROM LAYOUT l WHERE l.ID = @id";

                //invoeren query
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.Add(new SqlParameter("@id", id));

                //uitvoeren query
                SqlDataReader reader = cmd.ExecuteReader();
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