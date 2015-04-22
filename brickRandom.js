//creates an air brick at given location from loadLevel() in loadLevel.js
function addRandomBrick(newBrick) {
    brickTotalStrength[newBrick] = "1";
    brickStrength[newBrick] = "1";

    var newBrickY = Math.floor((newBrick - 1) / 20) + 1;
    var newBrickX = newBrick - Math.floor(newBrick / 20) * 20;
    if (newBrickX === 0) {
        var newBrickX = 20;
    }

    brickLocation[newBrick] = newBrickX + "-" + newBrickY;
    brickType[newBrick] = 8;

    brick.count = brick.count + 1;

    var id = document.getElementById(newBrick);
    id.style.width = "28px";
    id.style.height = "13px";
    id.style.border = "1px solid black";
    id.style.backgroundImage = "url('textures/brick/brick03.gif')";
}

function fromRandomBrick(newBrick) {
    var id = document.getElementById(newBrick);
    id.style.width = "30px";
    id.style.height = "15px";
    id.style.border = "0px";
    id.style.backgroundImage = "none";

    var random = Math.floor((Math.random() * 4) + 1)

    if (random === 1) {
        addRedBrick(newBrick)
    }

    if (random === 2) {
        addGreenBrick(newBrick)
    }

    if (random === 3) {
        addBlueBrick(newBrick)
    }

    if (random === 4) {
        addYellowBrick(newBrick)
    }
}