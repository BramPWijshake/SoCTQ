using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ.DAL
{
    public class StandardLayoutDAL
    {
        string json = @"{
        'data': [{
         'id': 0, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': '2for1Sheep'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 11, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 12, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 9, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': '2for1Ore'
         },
         {
         'id': 4, 'tile': 'Resource', 'type': 'Stone'
         },
         {
         'id': 6, 'tile': 'Resource', 'type': 'Ore'
         },
         {
         'id': 5, 'tile': 'Resource', 'type': 'Stone'
         },
         {
         'id': 10, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 7, 'tile': 'Resource', 'type': 'Desert'
         },
         {
         'id': 3, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 11, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 4, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 8, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': '2for1Grain'
         },
         {
         'id': 8, 'tile': 'Resource', 'type': 'Stone'
         },
         {
         'id': 10, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 9, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 3, 'tile': 'Resource', 'type': 'Ore'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 5, 'tile': 'Resource', 'type': 'Ore'
         },
         {
         'id': 2, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 6, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 0, 'tile': 'Resource', 'type': '2for1Stone'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': '2for1Forest'
         },
         {
         'id': 0, 'tile': 'Harbor', 'type': 'Water'
         },]
       }";

        public string GetStandardLayout()
        {
            return json;
        }
    }
}
