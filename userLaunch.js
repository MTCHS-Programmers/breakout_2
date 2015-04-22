function userLaunch() {
    ball.ySpeed = -(ball.yDefault)

    if (Math.floor((Math.random() * 2)) === 1) {
        ball.xSpeed = ball.xDefault;
    }
    else {
        ball.xSpeed = -(ball.xDefault);
    }

    ball.x = user.paddleX + 26;
    ball.y = 431;

    if (key[32]) {
        clock.nextFunction = 1;
        ball.y = 430;
        timer()
    }
}