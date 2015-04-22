//creates an air brick at given location from loadLevel() in loadLevel.js
function addRedBrick(newBrick) {
    brickTotalStrength[newBrick] = "1";
    brickStrength[newBrick] = "1";

    var newBrickY = Math.floor((newBrick - 1) / 20) + 1;
    var newBrickX = newBrick - Math.floor(newBrick / 20) * 20;
    if (newBrickX === 0) {
        var newBrickX = 20;
    }

    brickLocation[newBrick] = newBrickX + "-" + newBrickY;
    brickType[newBrick] = 1;

    brick.count = brick.count + 1;

    var id = document.getElementById(newBrick);
    id.style.backgroundImage = "url('textures/brick/brick01.png')";
    id.style.backgroundColor = "#ff0000";
}