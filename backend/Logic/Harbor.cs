using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ
{
    public class Harbor : Tile
    {
        public int alignment { get; } // in discrete stappen van graden?

        public Harbor(int Alignment, int[] Position, ResourceType rType) : base(Position, rType)
        {
            this.alignment = Alignment;
        }

        //public void CalculateAlignment() ???
    }
}
