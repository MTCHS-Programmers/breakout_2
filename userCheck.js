function userCheck() {

    //chacks for the balls Y boudaries (430px Top)
    if (ball.y > 431) {

        //this makes sure the balls is within the paddles X boundaries. +/- 7 has been added to ball.x position to account for side hits
        if (user.paddleX < (ball.x + 7) && (user.paddleX + 60) > (ball.x - 7)) {
            if (user.catch === "false") {
                if(key[65] || key[37]) {
                    if(ball.xSpeed > 0) {
                        ball.xSpeed = ball.xSpeed - (ball.xSpeed/5);
                        ball.ySpeed = ball.ySpeed + (ball.ySpeed/5);
                    }
                    else {
                        ball.xSpeed = ball.xSpeed + (ball.xSpeed/12);
                        ball.ySpeed = ball.ySpeed - (ball.ySpeed/12);
                    }
                }

                if(key[68] || key[39]) {
                    if(ball.xSpeed > 0) {
                        ball.xSpeed = ball.xSpeed + (ball.xSpeed/12);
                        ball.ySpeed = ball.ySpeed - (ball.ySpeed/12);
                    }
                    else {
                        ball.xSpeed = ball.xSpeed - (ball.xSpeed/5);
                        ball.ySpeed = ball.ySpeed + (ball.ySpeed/5);
                    }
                }

                ball.ySpeed = ball.ySpeed * -1;
                ball.y = 431;
            }
            else {
                clock.nextFunction = 2;
            }
        }
    }
    ballCheck()
    }

function ballCheck() {
    if (ball.y === 442) {
        sleep(1000);
        user.lives = user.lives - 1;
        user.paddleX = 265;
        user.power = 1;
        clock.nextFunction = 2;
    }

    if(user.lives === 0) {
        clock.nextFunction = 3;
        document.getElementById("infoLives").innerHTML = "Game Over!";
        alert("Game Over");
    }

    if(brick.count === 0) {
        level.current = level.current + 1;
        user.lives = user.lives + 1;
        document.getElementById("infoLevel").innerHTML = "Level: " + level.current;
        alert("Well done. On to level: " + level.current);
        levelCurrent()
    }
}