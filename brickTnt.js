//creates an air brick at given location from loadLevel() in loadLevel.js
function addTntBrick(newBrick) {
    brickTotalStrength[newBrick] = "1";
    brickStrength[newBrick] = "1";

    var newBrickY = Math.floor((newBrick - 1) / 20) + 1;
    var newBrickX = newBrick - Math.floor(newBrick / 20) * 20;
    if (newBrickX === 0) {
        var newBrickX = 20;
    }

    brickLocation[newBrick] = newBrickX + "-" + newBrickY;
    brickType[newBrick] = 7;

    brick.count = brick.count + 1;

    var id = document.getElementById(newBrick);
    id.style.backgroundImage = "url('textures/brick/brick03.png')";
}

function explosion(newBrick) {
    var explosionX1 = brickLocation[newBrick].substring(0, 1);
    var explosionX2 = brickLocation[newBrick].substring(1, 2);

    if (explosionX2 != "-") {
        var explosionX = explosionX1 + explosionX2;
        var explosionY = brickLocation[newBrick].substring(3, 10);
    }
    else {
        var explosionX = explosionX1;
        var explosionY = brickLocation[newBrick].substring(2, 10);
    }

    var explosionXLeft = parseFloat(explosionX) - 1;
    var explosionXRight = parseFloat(explosionX) + 1;
    var explosionX2Right = parseFloat(explosionX) + 2;
    var explosionX2Left = parseFloat(explosionX) - 2;

    var explosionYUp = parseFloat(explosionY) - 1;
    var explosionYDown = parseFloat(explosionY) + 1;
    var explosionY2Up = parseFloat(explosionY) - 2;
    var explosionY2Down = parseFloat(explosionY) + 2;

    newBrick = brickLocation.indexOf(explosionX + "-" + explosionY);

    document.getElementById(newBrick).style.backgroundColor = "#fff";
    brickStrength[newBrick] = "null";
    brickTotalStrength[newBrick] = "null";
    brickType[newBrick] = "7_1";
    document.getElementById(newBrick).style.backgroundColor = "rgba(00,00,00,0.0)";

    //starts brick animation
    brickState[newBrick] = 1;
}