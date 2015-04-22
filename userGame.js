function userGame() {
    ballMove()
    movePaddle()
    userCheck()
    brickCheck()
    userInfo()

    if (clock.nextFunction === 1) {
        timer()
    }
}

function userServeBall() {
    userLaunch()
    movePaddle()
    userCheck()
    brickCheck()
    userInfo()

    if (clock.nextFunction === 2) {
        timer()
    }
}