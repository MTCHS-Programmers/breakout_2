ball = new Object();
ball.x = 0
ball.xSpeed = 1.5;
ball.xDefault = 1.5;
ball.y = 0
ball.ySpeed = 1.5;
ball.yDefault = 1.5;

hit = new Object()

function ballMove() {
    ball.x = ball.x + ball.xSpeed;
    ball.y = ball.y + ball.ySpeed;

    if (ball.x > 592) {
        ball.xSpeed = ball.xSpeed * -1;
        ball.x = 592;
    }
    if (ball.x < 0) {
        ball.xSpeed = ball.xSpeed * -1;
        ball.x = 0;
    }

    if (ball.y > 442) {
        ball.ySpeed = ball.ySpeed * -1;
        ball.y = 442;
    }
    if (ball.y < 0) {
        ball.ySpeed = ball.ySpeed * -1;
        ball.y = 0;
    }

    ballHit()
    ballCorrection()
}

function ballCorrection() {
    if (parseFloat(ball.xSpeed) > 0 && parseFloat(ball.xSpeed) > parseFloat(ball.xDefault)) {
        ball.xSpeed = ball.xSpeed - 0.0001;
    }

    if (parseFloat(ball.xSpeed) > 0 && parseFloat(ball.xSpeed) < parseFloat(ball.xDefault)) {
        ball.xSpeed = ball.xSpeed + 0.0001;
    }

    if (parseFloat(ball.xSpeed) < 0 && parseFloat(ball.xSpeed) > (parseFloat(ball.xDefault) * -1)) {
        ball.xSpeed = ball.xSpeed - 0.0001;
    }

    if (parseFloat(ball.xSpeed) < 0 && parseFloat(ball.xSpeed) < (parseFloat(ball.xDefault) * -1)) {
        ball.xSpeed = ball.xSpeed + 0.0001;
    }

    if (parseFloat(ball.ySpeed) > 0 && parseFloat(ball.ySpeed) > parseFloat(ball.yDefault)) {
        ball.ySpeed = ball.ySpeed - 0.0001;
    }

    if (parseFloat(ball.ySpeed) > 0 && parseFloat(ball.ySpeed) < parseFloat(ball.yDefault)) {
        ball.ySpeed = ball.ySpeed + 0.0001;
    }

    if (parseFloat(ball.ySpeed) < 0 && parseFloat(ball.ySpeed) > (parseFloat(ball.yDefault) * -1)) {
        ball.ySpeed = ball.ySpeed - 0.0001;
    }

    if (parseFloat(ball.ySpeed) < 0 && parseFloat(ball.ySpeed) < (parseFloat(ball.yDefault) * -1)) {
        ball.ySpeed = ball.ySpeed + 0.0001;
    }
}