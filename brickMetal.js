//creates an air brick at given location from loadLevel() in loadLevel.js
function addMetalBrick(newBrick) {
    brickTotalStrength[newBrick] = "null";
    brickStrength[newBrick] = "null";

    var newBrickY = Math.floor((newBrick - 1) / 20) + 1;
    var newBrickX = newBrick - Math.floor(newBrick / 20) * 20;
    if (newBrickX === 0) {
        var newBrickX = 20;
    }

    brickLocation[newBrick] = newBrickX + "-" + newBrickY;
    brickType[newBrick] = 9;

    var id = document.getElementById(newBrick);
    id.style.backgroundImage = "url('textures/brick/brick02.png')";
}