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
         'id': 1, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 2, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 3, 'tile': 'Harbor', 'type': '2for1Sheep'
         },
         {
         'id': 4, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 5, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 6, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 7, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 8, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 9, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 10, 'tile': 'Harbor', 'type': '2for1Ore'
         },
         {
         'id': 11, 'tile': 'Resource', 'type': 'Stone'
         },
         {
         'id': 12, 'tile': 'Resource', 'type': 'Ore'
         },
         {
         'id': 13, 'tile': 'Resource', 'type': 'Stone'
         },
         {
         'id': 14, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 15, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 16, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 17, 'tile': 'Resource', 'type': 'Desert'
         },
         {
         'id': 18, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 19, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 20, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 21, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 22, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 23, 'tile': 'Harbor', 'type': '2for1Grain'
         },
         {
         'id': 24, 'tile': 'Resource', 'type': 'Stone'
         },
         {
         'id': 25, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 26, 'tile': 'Resource', 'type': 'Sheep'
         },
         {
         'id': 27, 'tile': 'Resource', 'type': 'Ore'
         },
         {
         'id': 28, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 29, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 30, 'tile': 'Resource', 'type': 'Ore'
         },
         {
         'id': 31, 'tile': 'Resource', 'type': 'Grain'
         },
         {
         'id': 32, 'tile': 'Resource', 'type': 'Forest'
         },
         {
         'id': 33, 'tile': 'Resource', 'type': '2for1Stone'
         },
         {
         'id': 34, 'tile': 'Harbor', 'type': '3for1'
         },
         {
         'id': 35, 'tile': 'Harbor', 'type': 'Water'
         },
         {
         'id': 36, 'tile': 'Harbor', 'type': '2for1Forest'
         },
         {
         'id': 37, 'tile': 'Harbor', 'type': 'Water'
         },]
       }";

        public string GetStandardLayout()
        {
            return json;
        }
    }
}
