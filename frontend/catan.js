//Canvas variabelen aanmaken

var mapCanvas;
var drawingContext;

var canvasCenterX;
var canvasCenterY;

var mapStyle = "retro";

var size = null;
var defaultFillStyle = "#ffffff";
var strokeStyle = "#000000";
var lineWidth = 3;
var resourceTypeToColor = {
	"ore": "#363636",
	"clay": "#E83200",
	"wool": "#98E82E",
	"wood": "#0A7300",
	"grain": "#E0E000",
	"desert": "#F2F0A0",
	"sea": "#0000FF",
	"randomHarbor": "#0000FF",
	"sheepHarbor": "#0000FF",
	"clayHarbor": "#0000FF",
	"grainHarbor": "#0000FF",
	"oreHarbor": "#0000FF",
	"woodHarbor": "#0000FF",
	"none": "#ffffff"
};
var resourceTypeToImageCanvas = {
	"ore": null,
	"clay": null,
	"wool": null,
	"wood": null,
	"grain": null,
	"desert": null,
	"randomHarbor": null,
	"sheepHarbor": null,
	"clayHarbor": null,
	"oreHarbor": null,
	"woodHarbor": null,
	"grainHarbor": null,
	"sea": null
};


//Posities bepalen

var dx = size * (1 + Math.cos(Math.PI/3)) / 2;
var dy = size * Math.sin(Math.PI/3);


//Coordinaten, getallen en tiles vaststellen

var catanMap = new CatanMap();

var standardMap = new MapDefinition();
standardMap.resourceDict = {
	"desert": 1,
	"sea": 9,
	"randomHarbor": 4,
	"sheepHarbor": 1,
	"clayHarbor": 1,
	"woodHarbor": 1,
	"grainHarbor": 1,
	"oreHarbor": 1,
	"wood": 4,
	"clay": 3,
	"wool": 4,
	"grain": 4,
	"ore": 3
};

standardMap.numberDict = {
	2: 1,
	3: 2,
	4: 2,
	5: 2,
	6: 2,
	8: 2,
	9: 2,
	10: 2,
	11: 2,
	12: 1
}

standardMap.coordinatesArray = [
	[-6,1],[-6,3],[-6,-1],[-6,-3],[-4,4],[-4,-4],[-2,5],[-2,-5],[0,6],[0,-6],[2,5],[2,-5],[4,4],[4,-4],[6,1],[6,3],[6,-1],[6,-3],
	[-4,2],[-4,0],[-4,-2],
	[-2,3],[-2,1],[-2,-1],[-2,-3],
	[0,4],[0,2],[0,0],[0,-2],[0,-4],
	[2,3],[2,1],[2,-1],[2,-3],
	[4,2],[4,0],[4,-2]
];
//Useless right now
standardMap.harborAlignments = {
	1: 1,
	2: 1,
	3: 1,
	4: 1
}

standardMap.landCoordinatesArray = [
	[-4,2],[-4,0],[-4,-2],
	[-2,3],[-2,1],[-2,-1],[-2,-3],
	[0,4],[0,2],[0,0],[0,-2],[0,-4],
	[2,3],[2,1],[2,-1],[2,-3],
	[4,2],[4,0],[4,-2]
];

standardMap.seaCoordinatesArray = [
	[-6,1],[-6,-3],
	[-4,4],
	[-2,-5],
	[0,6],
	[2,-5],
	[4,4],
	[6,1],[6,-3]
];

standardMap.seaCoordinatesArray2 = [
	[0,-6],[4,-4],[6,-1],[6,3],[2,5],[-2,5],[-6,-1],[-6,3],[-4,-4]
];


standardMap.harborCoordinatesArray = [
	[0,-6],[4,-4],[6,-1],[6,3],[2,5],[-2,5],[-6,-1],[-6,3],[-4,-4]
];

standardMap.harborCoordinatesArray2 = [
	[-6,1],[-6,-3],
	[-4,4],
	[-2,-5],
	[0,6],
	[2,-5],
	[4,4],
	[6,1],[6,-3]
];


var normalMap = new MapDefinition();
normalMap.resourceDict = {
	"sea": 18,
	"desert": 1,
	"randomHarbor": 0,
	"sheepHarbor": 0,
	"clayHarbor": 0,
	"woodHarbor": 0,
	"grainHarbor": 0,
	"oreHarbor": 0,
	"wood": 4,
	"clay": 3,
	"wool": 4,
	"grain": 4,
	"ore": 3
};

normalMap.numberDict = {
	2: 1,
	3: 2,
	4: 2,
	5: 2,
	6: 2,
	8: 2,
	9: 2,
	10: 2,
	11: 2,
	12: 1
}
//De eerste lijn zijn sea coords
normalMap.coordinatesArray = [
	[-6,1],[-6,3],[-6,-1],[-6,-3],[-4,4],[-4,-4],[-2,5],[-2,-5],[0,6],[0,-6],[2,5],[2,-5],[4,4],[4,-4],[6,1],[6,3],[6,-1],[6,-3],
	[-4,2],[-4,0],[-4,-2],
	[-2,3],[-2,1],[-2,-1],[-2,-3],
	[0,4],[0,2],[0,0],[0,-2],[0,-4],
	[2,3],[2,1],[2,-1],[2,-3],
	[4,2],[4,0],[4,-2]
];

normalMap.landCoordinatesArray = [
	[-4,2],[-4,0],[-4,-2],
	[-2,3],[-2,1],[-2,-1],[-2,-3],
	[0,4],[0,2],[0,0],[0,-2],[0,-4],
	[2,3],[2,1],[2,-1],[2,-3],
	[4,2],[4,0],[4,-2]
];

normalMap.seaCoordinatesArray = [
	[-6,1],[-6,3],[-6,-1],[-6,-3],
	[-4,4],[-4,-4],
	[-2,5],[-2,-5],
	[0,6],[0,-6],
	[2,5],[2,-5],
	[4,4],[4,-4],
	[6,1],[6,3],[6,-1],[6,-3]
];

normalMap.seaCoordinatesArray2 = [
	[-6,1],[-6,3],[-6,-1],[-6,-3],
	[-4,4],[-4,-4],
	[-2,5],[-2,-5],
	[0,6],[0,-6],
	[2,5],[2,-5],
	[4,4],[4,-4],
	[6,1],[6,3],[6,-1],[6,-3]
];

normalMap.harborCoordinatesArray = [

];

normalMap.harborCoordinatesArray2 = [

];

var expandedMap = new MapDefinition();
expandedMap.resourceDict = {
	"desert": 2,
	"sea": 22,
	"randomHarbor": 0,
	"sheepHarbor": 0,
	"clayHarbor": 0,
	"woodHarbor": 0,
	"grainHarbor": 0,
	"oreHarbor": 0,
	"wood": 6,
	"clay": 5,
	"wool": 6,
	"grain": 6,
	"ore": 5
}
expandedMap.numberDict = {
	2: 2,
	3: 3,
	4: 3,
	5: 3,
	6: 3,
	8: 3,
	9: 3,
	10: 3,
	11: 3,
	12: 2
}
expandedMap.coordinatesArray = [
	[-8,1],[-8,3],[-8,-1],[-8,-3],[-6,4],[-6,-4],[-4,5],[-4,-5],[-2,6],[-2,-6],[0,7],[0,-7],[2,6],[2,-6],[4,5],[4,-5],[6,4],[6,-4],[8,1],[8,3],[8,-1],[8,-3],
	[-6,2],[-6,0],[-6,-2],
	[-4,3],[-4,1],[-4,-1],[-4,-3],
	[-2,4],[-2,2],[-2,0],[-2,-2],[-2,-4],
	[0,5],[0,3],[0,1],[0,-1],[0,-3],[0,-5],
	[2,4],[2,2],[2,0],[2,-2],[2,-4],
	[4,3],[4,1],[4,-1],[4,-3],
	[6,2],[6,0],[6,-2]
];

expandedMap.landCoordinatesArray = [
	[-6,2],[-6,0],[-6,-2],
	[-4,3],[-4,1],[-4,-1],[-4,-3],
	[-2,4],[-2,2],[-2,0],[-2,-2],[-2,-4],
	[0,5],[0,3],[0,1],[0,-1],[0,-3],[0,-5],
	[2,4],[2,2],[2,0],[2,-2],[2,-4],
	[4,3],[4,1],[4,-1],[4,-3],
	[6,2],[6,0],[6,-2]
];

expandedMap.seaCoordinatesArray = [
	[-8,1],[-8,3],[-8,-1],[-8,-3],
	[-6,4],[-6,-4],
	[-4,5],[-4,-5],
	[-2,6],[-2,-6],
	[0,7],[0,-7],
	[2,6],[2,-6],
	[4,5],[4,-5],
	[6,4],[6,-4],
	[8,1],[8,3],[8,-1],[8,-3]
];

expandedMap.seaCoordinatesArray2 = [
	[-8,1],[-8,3],[-8,-1],[-8,-3],
	[-6,4],[-6,-4],
	[-4,5],[-4,-5],
	[-2,6],[-2,-6],
	[0,7],[0,-7],
	[2,6],[2,-6],
	[4,5],[4,-5],
	[6,4],[6,-4],
	[8,1],[8,3],[8,-1],[8,-3]
];

expandedMap.harborCoordinatesArray = [

];

expandedMap.harborCoordinatesArray2 = [

];

//Functies

window.onresize = function(event) {
	//Om de map te updaten 
	sizeCanvas();
	catanMap.resize();
	catanMap.draw();
}

function init() {
	//Om Canvas the initialiseren

	loadImages(function() {
		var button = $('button#gen-map-button')[0];
		$(button).click(generate);
		button.disabled = false;
		button.innerHTML = "Click om te starten.";
	});
	
	addCanvas();
	
}

function preloadImages(arr, callback){
	//Zie volgende functie
	
    var newimages=[], loadedimages=0;
    var postaction=function(){};
    var arr=(typeof arr!="object")? [arr] : arr;
    function imageloadpost(){
        loadedimages++;
        if (loadedimages==arr.length){
            callback(newimages); 
        }
    }
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image();
        newimages[i].src=arr[i];
        newimages[i].onload=function(){
            imageloadpost();
        }
        newimages[i].onerror=function(){
            imageloadpost();
        }
    }

}

function loadImages(callback) {
	//Om de img paths te laden

	var rTypes = [];
	var imgPaths = [];
	for (var key in resourceTypeToImageCanvas) {
		rTypes.push(key);
		imgPaths.push("images/"+key+".png");
	}
	
	preloadImages(imgPaths, function(images) {
		
		for (var i = 0; i < imgPaths.length; i += 1) {
			var img = images[i];
			var imgCanvas = document.createElement("canvas");
			var imgContext = imgCanvas.getContext("2d");
			
			imgCanvas.width = img.width;
			imgCanvas.height = img.height;
			imgContext.drawImage(img, 0, 0);
        	
			
			resourceTypeToImageCanvas[ rTypes[i] ] = imgCanvas;


		}
		
		callback();
		
	});
	
}

function generate() {
	//de parameters van de map instellen
	
	var mapDef;
	switch($("input:radio['name=game-type']:checked").val()) {
		case "expanded":
			mapDef = expandedMap;
			break;
		case "standard":
			mapDef = standardMap;
			break;
		default:
			mapDef = normalMap;
	}
	
	catanMap.defineMap(mapDef);
	catanMap.generate();
	catanMap.resize();
	catanMap.draw();	
	
}

function MapDefinition() {
	this.resourceDict = null;
	this.numberDict = null;
	this.coordinatesArray = null;
}

MapDefinition.prototype.checkValidity = function() {
	//Checken of er genoeg coords/tiles/numbers zijn
	var cArrLen = this.coordinatesArray.length;
	var rDictLen = this.sumDictVals(this.resourceDict);
	var nDictLen = this.sumDictVals(this.numberDict);
	var numDeserts = this.resourceDict["desert"];
	var numSeas = this.resourceDict["sea"];
	var numHarbors = this.resourceDict["randomHarbor"]+ this.resourceDict["sheepHarbor"]+this.resourceDict["clayHarbor"]+this.resourceDict["oreHarbor"]+this.resourceDict["woodHarbor"]+this.resourceDict["grainHarbor"];
	
	return (cArrLen == rDictLen) && (rDictLen == (nDictLen + numDeserts + numSeas + numHarbors));
}

MapDefinition.prototype.sumDictVals = function(dict) {
	var sum = 0;
	for (var key in dict) {
		sum += dict[key];
	}
	return sum;
}

function CatanMap() {
	
	this.mapDefinition = null;
	this.hexTiles = null;
	this.coordToTile = {};
	this.coordSpan = [0,0];
	
}
CatanMap.prototype.defineMap = function(mapDefinition) {
	//De map coordinates geven
	
	if (mapDefinition.checkValidity()) {
		
		this.mapDefinition = mapDefinition;
		
		var coordRangeX = [0,0];
		var coordRangeY = [0,0];
		
		for (var i = 0; i < mapDefinition.coordinatesArray.length; i += 1) {
			var coord = mapDefinition.coordinatesArray[i];
			coordRangeX = [
				Math.min(coordRangeX[0], coord[0]),
				Math.max(coordRangeX[1], coord[0])
			];
			coordRangeY = [
				Math.min(coordRangeY[0], coord[1]),
				Math.max(coordRangeY[1], coord[1])
			];
		}
		
		this.coordSpan = [
			coordRangeX[1] - coordRangeX[0],
			coordRangeY[1] - coordRangeY[0]
		];
		
	} else {
		console.log("Invalid map definition.");
	}
}
CatanMap.prototype.generate = function() {
	//het genereren van de map	
	if (this.mapDefinition) {
		
		this.hexTiles = [];
		
		var numTiles = this.mapDefinition.coordinatesArray.length;
		
		var tileCoordinates = this.mapDefinition.landCoordinatesArray.copy();

		var chance = Math.random();
		if(chance < 0.5){
			var seaCoordinates = this.mapDefinition.seaCoordinatesArray.copy();
			var harborCoordinates = this.mapDefinition.harborCoordinatesArray.copy();
		}
		else{
			var seaCoordinates = this.mapDefinition.seaCoordinatesArray2.copy();
			var harborCoordinates = this.mapDefinition.harborCoordinatesArray2.copy();
		}
		
		var tileNumbers = [];
		for (var key in this.mapDefinition.numberDict) {
			for (var i = 0; i < this.mapDefinition.numberDict[key]; i += 1) {
				tileNumbers.push(parseInt(key));
			}
		}


		//hier split hij alle land tiles van de zeetiles/desert
		var tileTypes = [];
		for (var key in this.mapDefinition.resourceDict) {
			if (key != "desert" && key != "sea" && key != "randomHarbor" && key != "sheepHarbor" && key != "woodHarbor" && key != "grainHarbor" && key != "clayHarbor" && key != "oreHarbor") {
				for (var i = 0; i < this.mapDefinition.resourceDict[key]; i += 1) {
					tileTypes.push(key);
				}
			}
		}

		//Eerst handelt hij alle harbors/zee/deserts
		var newCoords = null;
		var newAlignment = null;
		var numHarbors = this.mapDefinition.resourceDict["randomHarbor"]+this.mapDefinition.resourceDict["sheepHarbor"]+this.mapDefinition.resourceDict["clayHarbor"]+this.mapDefinition.resourceDict["oreHarbor"]+this.mapDefinition.resourceDict["woodHarbor"]+this.mapDefinition.resourceDict["grainHarbor"];

		var numRandomHarbors = this.mapDefinition.resourceDict["randomHarbor"];

		for (var i = 0; i < numRandomHarbors; i += 1) {
			var harborHexTile = new HexTile();
			newCoords = harborCoordinates.random(true);
			harborHexTile.setCoordinate.apply(
				harborHexTile,
				newCoords
			);
			harborHexTile.setResourceType("randomHarbor");
			this.hexTiles.push(harborHexTile);
			this.coordToTile[newCoords.toString()] = harborHexTile;
		}

		var numSheepHarbors = this.mapDefinition.resourceDict["sheepHarbor"];

		for (var i = 0; i < numSheepHarbors; i += 1) {
			var harborHexTile = new HexTile();
			newCoords = harborCoordinates.random(true);
			harborHexTile.setCoordinate.apply(
				harborHexTile,
				newCoords
			);
			harborHexTile.setResourceType("sheepHarbor");
			this.hexTiles.push(harborHexTile);
			this.coordToTile[newCoords.toString()] = harborHexTile;
		}

		var numClayHarbors = this.mapDefinition.resourceDict["clayHarbor"];

		for (var i = 0; i < numClayHarbors; i += 1) {
			var harborHexTile = new HexTile();
			newCoords = harborCoordinates.random(true);
			harborHexTile.setCoordinate.apply(
				harborHexTile,
				newCoords
			);
			harborHexTile.setResourceType("clayHarbor");
			this.hexTiles.push(harborHexTile);
			this.coordToTile[newCoords.toString()] = harborHexTile;
		}

		var numOreHarbors = this.mapDefinition.resourceDict["oreHarbor"];

		for (var i = 0; i < numOreHarbors; i += 1) {
			var harborHexTile = new HexTile();
			newCoords = harborCoordinates.random(true);
			harborHexTile.setCoordinate.apply(
				harborHexTile,
				newCoords
			);
			harborHexTile.setResourceType("oreHarbor");
			this.hexTiles.push(harborHexTile);
			this.coordToTile[newCoords.toString()] = harborHexTile;
		}

		var numWoodHarbors = this.mapDefinition.resourceDict["woodHarbor"];

		for (var i = 0; i < numWoodHarbors; i += 1) {
			var harborHexTile = new HexTile();
			newCoords = harborCoordinates.random(true);
			harborHexTile.setCoordinate.apply(
				harborHexTile,
				newCoords
			);
			harborHexTile.setResourceType("woodHarbor");
			this.hexTiles.push(harborHexTile);
			this.coordToTile[newCoords.toString()] = harborHexTile;
		}

		var numGrainHarbors = this.mapDefinition.resourceDict["grainHarbor"];

		for (var i = 0; i < numGrainHarbors; i += 1) {
			var harborHexTile = new HexTile();
			newCoords = harborCoordinates.random(true);
			harborHexTile.setCoordinate.apply(
				harborHexTile,
				newCoords
			);
			harborHexTile.setResourceType("grainHarbor");
			this.hexTiles.push(harborHexTile);
			this.coordToTile[newCoords.toString()] = harborHexTile;
		}

		var numSeas = this.mapDefinition.resourceDict["sea"];
		
		for (var i = 0; i < numSeas; i += 1) {
			var seaHexTile = new HexTile();
			newCoords = seaCoordinates.random(true);
			seaHexTile.setCoordinate.apply(
				seaHexTile,
				newCoords
			);
			seaHexTile.setResourceType("sea");
			this.hexTiles.push(seaHexTile);
			this.coordToTile[newCoords.toString()] = seaHexTile;
		}
		
		var numDeserts = this.mapDefinition.resourceDict["desert"];
		
		for (var i = 0; i < numDeserts; i += 1) {
			var desertHexTile = new HexTile();
			newCoords = tileCoordinates.random(true);
			desertHexTile.setCoordinate.apply(
				desertHexTile,
				newCoords
			);
			desertHexTile.setResourceType("desert");
			this.hexTiles.push(desertHexTile);
			this.coordToTile[newCoords.toString()] = desertHexTile;
		}

		//Daarna schijdt het programma de 6/8 tiles		
		var highlyProductiveIdx = [];
		highlyProductiveIdx = highlyProductiveIdx.concat(
			tileNumbers.indexOfArray(6),
			tileNumbers.indexOfArray(8)
		);
		for (var i = 0; i < highlyProductiveIdx.length; i += 1) {
			tileNumbers.swap(i,highlyProductiveIdx[i]);
		}
		
		//Hierna handelt het programma de rest at random en reshuffled 6/8 tiles als ze bij elkaar liggen
		for (var i = 0; i < (numTiles - numDeserts - numSeas - numHarbors); i += 1) {
			
			var newHexTile = new HexTile();
			newHexTile.setNumber(tileNumbers[i]);
			newHexTile.setResourceType(tileTypes.random(true));

			var invalid;
			
			if ( newHexTile.isHighlyProductive() ) {
				var tmpCoords = [];
				do {
					newCoords = tileCoordinates.random(true);
					newHexTile.setCoordinate.apply(
						newHexTile,
						newCoords
					);
					invalid = this.hasHighlyProductiveNeighbors(newHexTile);
					if (invalid) {
						tmpCoords.push(newCoords);
					}
				} while ( invalid );
				tileCoordinates = tileCoordinates.concat(tmpCoords);
			} else {
				newCoords = tileCoordinates.random(true);
				newHexTile.setCoordinate.apply(
					newHexTile,
					newCoords
				);
			}
			
			this.hexTiles.push(newHexTile);
			this.coordToTile[newCoords.toString()] = newHexTile;
		}
		
	} else {
		console.log("No map definition.");
	}
}
//Tekenen van de hextiles
CatanMap.prototype.draw = function() {
	if (this.hexTiles) {
		drawingContext.clear();
		for (var i = 0; i < this.hexTiles.length; i += 1) {
			this.hexTiles[i].draw();
		}
	}	
}
//Resize canvas functie
CatanMap.prototype.resize = function() {

	var wSize = (mapCanvas.width-10) / 
		( (this.coordSpan[0] * (1 + Math.cos(Math.PI/3)) / 2) + 2 );
	var hSize = (mapCanvas.height-10) / 
		( (this.coordSpan[1] + 2) * Math.sin(Math.PI/3) );
	size = Math.floor(Math.min(wSize, hSize));
	dx = size * (1 + Math.cos(Math.PI/3)) / 2;
	dy = size * Math.sin(Math.PI/3);
}


//Check voor 6/8 tiles naast elkaar
CatanMap.prototype.hasHighlyProductiveNeighbors = function(tile) {
	var adjacentTiles = this.getAdjacentTiles(tile);
	for (var i = 0; i < adjacentTiles.length; i += 1) {
		if ( adjacentTiles[i].isHighlyProductive() ) {
			return true;
		}
	}
	return false;
}

CatanMap.prototype.getAdjacentTiles = function(tile) {
	
	var tileX = tile.gridX;
	var tileY = tile.gridY;
	
	var adjTiles = [];
	
	xshift = [0, 2, 2, 0, -2, -2];
	yshift = [2, 1, -1, -2, -1, 1];
	
	for (var i = 0; i < 6; i += 1) {
		var adjTile = this.coordToTile[
			[tileX + xshift[i], tileY + yshift[i]].toString()
		];
		if (adjTile) {
			adjTiles.push(adjTile);
		}
	}
	return adjTiles;	
}
//Hextile class aanmaken
function HexTile() {
	this.gridX;
	this.gridY;
	this.xCenter;
	this.yCenter;
	this.resourceType = "none";
	this.fillStyle = defaultFillStyle;
	this.number;
	this.alignment;
}
HexTile.prototype.strokeStyle = strokeStyle;
HexTile.prototype.lineWidth = lineWidth;
HexTile.prototype.hexColorMap = resourceTypeToColor;
HexTile.prototype.size = size;
HexTile.prototype.setResourceType = function(resourceType) {
	if (this.hexColorMap[resourceType]) {
		this.resourceType = resourceType;
		this.fillStyle = this.hexColorMap[resourceType];
	} else {
		console.log("Unrecognized resource type:",resourceType);
	}
}
HexTile.prototype.isHighlyProductive = function() {
	return ( (this.number == 6) || (this.number == 8) );
}
HexTile.prototype.setNumber = function(number) {
	this.number = number;
}
HexTile.prototype.setCoordinate = function(x,y) {
	this.gridX = x;
	this.gridY = y;
}
HexTile.prototype.draw = function() {
	this.xCenter = canvasCenterX + dx*this.gridX;
	this.yCenter = canvasCenterY + dy*this.gridY;
	
	this.drawBase();
	// Teken geen nummer als het een desert, sea of haven is
	if (this.number) {
		this.drawNumber();
	}
}
HexTile.prototype.drawBase = function() {
	//hier tekent hij de lijnen tussen de tiles
	
	if (mapStyle == "retro") {
		drawingContext.lineWidth = 10;
		drawingContext.fillStyle = "rgba(255,255,255,0)";
		drawingContext.strokeStyle = "#FAEB96";
	} else {
		drawingContext.lineWidth = this.lineWidth;
		drawingContext.fillStyle = this.fillStyle;
		drawingContext.strokeStyle = this.strokeStyle;
	}
	
	var angleOffset = Math.PI / 6;
	
	
	drawingContext.beginPath();
	drawingContext.moveTo (
		this.xCenter + size * Math.sin(angleOffset),
		this.yCenter - size * Math.cos(angleOffset)
	);
	
	var newAngle;
	for (var i = 1; i <= 6; i += 1) {
		newAngle = i * Math.PI / 3;
		drawingContext.lineTo (
			this.xCenter + size * Math.sin(newAngle + angleOffset),
			this.yCenter - size * Math.cos(newAngle + angleOffset)
		);
	}
	drawingContext.closePath();
	//Hier plaatst hij de image
	if (mapStyle == "retro") {
		
		var imgCanvas = resourceTypeToImageCanvas[this.resourceType];
		
		drawingContext.drawImage(
			imgCanvas,
			0, 0, imgCanvas.width, imgCanvas.height, 
			this.xCenter - size,
			this.yCenter - dy,
			2*size,
			2*dy

		);
	} else {
		drawingContext.fill();
	}
	
	drawingContext.stroke();
	
}
HexTile.prototype.drawNumber = function() {
	//Hier tekent hij de cijfers op de tiles, en nu ook de probability van de numbers
	
	drawingContext.fillStyle = "#FFFFFF";
	drawingContext.strokeStyle = "#000000";
	drawingContext.lineWidth = 3;
	
	drawingContext.beginPath();
	drawingContext.arc(this.xCenter, this.yCenter, 0.375 * size,
		0, 2 * Math.PI, false);
	drawingContext.closePath();
	
	drawingContext.fill();
	drawingContext.stroke();
	
	var fontSizePt = Math.ceil(30/40*(.45*size-8)+6);
	
	drawingContext.font = "bold " + fontSizePt + "pt sans-serif";
	drawingContext.textAlign = "center";
	if ( this.isHighlyProductive() ) {
		drawingContext.fillStyle = "#FF0000";
	} else {
		drawingContext.fillStyle = "#000000";
	}
	drawingContext.fillText(
		this.number.toString(),
		this.xCenter,
		this.yCenter + Math.ceil( 0.85 * fontSizePt/2 )
	);
	var driesprong = "";
	if(this.number == 8 || this.number == 6){driesprong = "*****"} 
		else if(this.number == 12 || this.number == 2){driesprong = "*"}
		else if(this.number == 11 || this.number == 3){driesprong = "**"}
		else if(this.number == 10 || this.number == 4){driesprong = "***"}
		else if(this.number == 9 || this.number == 5){driesprong = "****"}
	drawingContext.fillText(
		driesprong,
		this.xCenter,
		this.yCenter + 45
	);
}

//Random object uit de array pakken en removen
Array.prototype.random = function(removeElem) {
	var idx = Math.floor(Math.random() * this.length);
	var val = this[idx];
	if (removeElem) {
		this.splice(idx,1);
	}
	return val;
}
Array.prototype.copy = function() {
	return this.slice();
}

//Index maken van 6/8 getallen
Array.prototype.indexOfArray = function(val) {
	var arr = [];
	var sIdx = 0;
	var tmpCopy = this.copy();
	do {
		var rIdx = tmpCopy.indexOf(val);
		var valid = (rIdx >= 0);
		if (valid) {
			tmpCopy.splice(0, rIdx + 1);
			arr.push(sIdx + rIdx);
			sIdx += rIdx + 1;
		}
	} while (valid);
	return arr;
}
//Voor het wisselen van numbers 6/8
Array.prototype.swap = function(idx1, idx2) {
	var tmp = this[idx1];
	this[idx1] = this[idx2];
	this[idx2] = tmp;
}
//Dit is het toevoegen van canvas
function addCanvas() {
	mapCanvas = document.createElement("canvas");
	drawingContext = mapCanvas.getContext('2d');
	mapCanvas.id = "map-canvas";
	
	sizeCanvas();
	
	document.getElementById("map-container").appendChild(mapCanvas);
	
}
//De grootte van de map bepalen
function sizeCanvas() {
	var mapContainer = $("div#map-container")[0];
	$(mapCanvas).attr("width", $(mapContainer).width());
	$(mapCanvas).attr("height", $(mapContainer).height());
	canvasCenterY = mapCanvas.height/2;
	canvasCenterX = mapCanvas.width/2;
}
CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};