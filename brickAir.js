//creates an air brick at given location from loadLevel() in loadLevel.js
function addAirBrick(newBrick) {
    brickTotalStrength[newBrick] = "null";
    brickStrength[newBrick] = "null";
    brickType[newBrick] = 0;
    brickLocation[newBrick] = "null";

    var id = document.getElementById(newBrick);
    id.style.backgroundImage = "none";
    id.style.backgroundColor = "rgba(00,00,00,0.0)";
}