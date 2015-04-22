function ballHit() {
    hit.left = (Math.floor(ball.x / 30) + 1);
    hit.right = (Math.floor((ball.x + 8) / 30) + 1);
    hit.x = (Math.floor((ball.x + 4) / 30) + 1);

    hit.up = (Math.floor(ball.y / 15) + 1);
    hit.down = (Math.floor((ball.y + 8) / 15) + 1);
    hit.y = (Math.floor((ball.y + 4) / 15) + 1);

    if (brickType[parseFloat(brickLocation.indexOf(hit.left + "-" + hit.y))] > -1) {
        var destroyBrick = parseFloat(brickLocation.indexOf(hit.left + "-" + hit.y));
        brickBounceX(destroyBrick)
        breakBrick(destroyBrick)
    }

    if (brickType[parseFloat(brickLocation.indexOf(hit.right + "-" + hit.y))] > -1) {
        var destroyBrick = parseFloat(brickLocation.indexOf(hit.right + "-" + hit.y));
        brickBounceX(destroyBrick)
        breakBrick(destroyBrick)
    }

    if (brickType[parseFloat(brickLocation.indexOf(hit.x + "-" + hit.up))] > -1) {
        var destroyBrick = parseFloat(brickLocation.indexOf(hit.x + "-" + hit.up));
        brickBounceY(destroyBrick)
        breakBrick(destroyBrick)
    }

    if (brickType[parseFloat(brickLocation.indexOf(hit.x + "-" + hit.down))] > -1) {
        var destroyBrick = parseFloat(brickLocation.indexOf(hit.x + "-" + hit.down));
        brickBounceY(destroyBrick)
        breakBrick(destroyBrick)
    }
}

function brickBounceX(destroyBrick) {
    if (user.power === 1 || brickType[destroyBrick] === 9) {
        ball.xSpeed = ball.xSpeed * -1;
        ball.x = ball.x + ball.xSpeed;
    }
}

function brickBounceY(destroyBrick) {
    if (user.power === 1 || brickType[destroyBrick] === 9) {
        ball.ySpeed = ball.ySpeed * -1;
        ball.y = ball.y + ball.ySpeed;
    }
}
