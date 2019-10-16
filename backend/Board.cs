using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KVTQ
{
    public class Board
    {
        public int NumberOFplayers; // niet beter in een enum of iets dergelijks?
        BoardGenerator boardGenerator = new BoardGenerator();
        List<Tile> TileList;
        StrategicValueCollection strategicValueCollection = new StrategicValueCollection();
        
        // rest van de opties moeten hier nog in
        
    }
}
