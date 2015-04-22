//creates all Brick data and information
brick = new Object()
brickStrength = new Array()
brickTotalStrength = new Array()
brickLocation = new Array()
brickType = new Array()
brickState = new Array()
brickTime = new Array()

brick.count = 0;

function breakBrick(newBrick) {
    if (brickType[newBrick] != 9) {
        brickStrength[newBrick] = brickStrength[newBrick] - user.power;
    }

    if (brickStrength[newBrick] === 1 && brickType[newBrick] === 2) {
        document.getElementById(newBrick).style.backgroundImage = "url('textures/brick/brick01_2.png')";
    }

    if (brickStrength[newBrick] === 2 && brickType[newBrick] === 3) {
        document.getElementById(newBrick).style.backgroundImage = "url('textures/brick/brick01_1.png')";
    }

    if (brickStrength[newBrick] === 1 && brickType[newBrick] === 3) {
        document.getElementById(newBrick).style.backgroundImage = "url('textures/brick/brick01_3.png')";
    }

    if (brickStrength[newBrick] === 3 && brickType[newBrick] === 4) {
        document.getElementById(newBrick).style.backgroundImage = "url('textures/brick/brick01_1.png')";
    }

    if (brickStrength[newBrick] === 2 && brickType[newBrick] === 4) {
        document.getElementById(newBrick).style.backgroundImage = "url('textures/brick/brick01_2.png')";
    }

    if (brickStrength[newBrick] === 1 && brickType[newBrick] === 4) {
        document.getElementById(newBrick).style.backgroundImage = "url('textures/brick/brick01_3.png')";
    }

    if (brickStrength[newBrick] < 1) {
        if (brickType[newBrick] === 1 || brickType[newBrick] === 2 || brickType[newBrick] === 3 || brickType[newBrick] === 4) {
            brick.count = brick.count - 1;
            user.score = user.score + (brickType[newBrick] * 2);
            addAirBrick(newBrick)
        }

        if (brickType[newBrick] === 8) {
            brick.count = brick.count - 1;
            user.score = user.score + 1;
            fromRandomBrick(newBrick)
        }

        if (brickType[newBrick] === 7) {
            user.score = user.score + 1;
            explosion(newBrick)
        }
    }
}