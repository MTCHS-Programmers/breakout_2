//creates an air brick at given location from loadLevel() in loadLevel.js
function addGreenBrick(newBrick) {
    brickTotalStrength[newBrick] = "2";
    brickStrength[newBrick] = "2";

    var newBrickY = Math.floor((newBrick - 1) / 20) + 1;
    var newBrickX = newBrick - Math.floor(newBrick / 20) * 20;
    if (newBrickX === 0) {
        var newBrickX = 20;
    }

    brickLocation[newBrick] = newBrickX + "-" + newBrickY;
    brickType[newBrick] = 2;

    brick.count = brick.count + 1;

    var id = document.getElementById(newBrick);
    id.style.backgroundImage = "url('textures/brick/brick01.png')";
    id.style.backgroundColor = "#00ff00";
}