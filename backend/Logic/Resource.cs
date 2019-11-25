using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ
{
    public class Resource : Tile
    {
       public int value { get; }

        public Resource (int Value, int[] Position, ResourceType rType) : base (Position, rType)
        {
            this.value = value;
        }
    }
}
