clock = new Object()
clock.nextFunction = 1;
clock.loop = 0;

function timer() {
    if (key[27]) {
        menuPause()
    }

    document.getElementById("ball").style.left = ball.x;
    document.getElementById("ball").style.top = ball.y;

    document.getElementById("paddle").style.left = user.paddleX;

    window.setTimeout(function () { afterTimer() }, speed.timer);
    window.set
}

function sleep(delay) {
    var start = new Date().getTime();

    while (new Date().getTime() < start + delay) {
    }
}

function afterTimer() {
    if (clock.nextFunction === 1) {
        userGame()
    }

    if (clock.nextFunction === 2) {
        userServeBall()
    }
}