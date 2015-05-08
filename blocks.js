var commands = ["move 1 onto 2",
"move 5 onto 1",
"move 9 onto 5",
"move 8 onto 9",
"move 6 onto 1",
"move 2 onto 4"];

var blocksWorldSize = 10;

var world = [], colOfBlock = [];
BuildWorld(blocksWorldSize);
ProcessCommands(commands); 
PrintWorld();

function BuildWorld(size){
    for(var i=0; i<size; i++) {
        world[i]=[i];
        colOfBlock[i] = i;
    }
}
   
function ProcessCommands(commands){
    var parsed, movedBlock, baseBlock, mbCol, bbCol;
    for(var i=0; i < commands.length; i++){
        parsed = commands[i].replace("move ","").split(" onto ");
        movedBlock = parsed[0];
        baseBlock = parsed[1];
        
        if(movedBlock == baseBlock) continue;
 
        mbCol = colOfBlock[movedBlock];
        bbCol = colOfBlock[baseBlock];

        if(mbCol == bbCol) continue;
        
        tryClear(mbCol,movedBlock);    
        world[mbCol].pop();

        tryClear(bbCol,baseBlock);
        world[bbCol].push(movedBlock);
        
        colOfBlock[movedBlock] = bbCol;
    }
}

function tryClear(column, block){
    var toClear;
    while(world[column][world[column].length-1] != block){
        toClear = world[column].pop();
        world[toClear].push(toClear);
        colOfBlock[toClear] = toClear;
    }
}

function PrintWorld(){
    var obj = document.getElementById("world");
    var maxColHeight = maxHeight();
    
    for(var col=maxColHeight; col > 0; col--){
        for(var j=0; j<world.length; j++){
            if(world[j].length >= col)
                obj.innerHTML += "["+world[j][col-1] + "]";
            else
                obj.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        obj.innerHTML += "</br>";
    }
}

function maxHeight(){
    var height=1;
    for(var i = 0; i<world.length; i++)
        if(world[i].length > height)
            height = world[i].length;
    return height;
}
