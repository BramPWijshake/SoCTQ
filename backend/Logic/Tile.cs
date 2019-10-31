using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ
{
    public class Tile
    {
        public enum ResourceType
        {
            Resource,
            Harbor
        }

        public ResourceType resourceType { get; }
        public int position { get; }
    }
}
