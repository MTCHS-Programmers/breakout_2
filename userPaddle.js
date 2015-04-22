function movePaddle() {

    if (key[65] || key[37]) {
        user.paddleX = user.paddleX - user.paddleSpeed;
    }

    if (key[68] || key[39]) {
        user.paddleX = user.paddleX + user.paddleSpeed;
    }

    if (user.paddleX < 0) {
        user.paddleX = 0;
    }

    if (user.paddleX > 540) {
        user.paddleX = 540;
    }
}