using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ
{
    public abstract class Tile
    {
        public enum ResourceType
        {
            Resource,
            Harbor
        }

        public ResourceType resourceType { get; } //is dit nodig? inhertetance etc
        protected int[] position { get; } = new int[2]; //positie als x-y in 2d array

        protected Tile(int[] Position, ResourceType rType)
        {
            this.position = Position;
            this.resourceType = rType;
        }

    }
}
